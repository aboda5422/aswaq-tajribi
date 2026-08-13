# -*- coding: utf-8 -*-
"""Build category UI data from the Excel catalog and replace products in Supabase."""
from __future__ import annotations

import json
import os
import re
import ssl
import time
import unicodedata
import urllib.error
import urllib.request
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
EXCEL = Path(r"c:\Users\aboda5422\Desktop\مجلد جديد\19,000 supermarket products.xlsx")
STORE_DATA = ROOT / "src" / "data" / "store-data.ts"

SUPABASE_URL = os.environ.get("SUPABASE_URL", "https://xcsmmdxsdptwjnhxznbd.supabase.co")
SERVICE_KEY = os.environ["SUPABASE_SERVICE_ROLE_KEY"]
ACCESS_TOKEN = os.environ.get("SUPABASE_ACCESS_TOKEN", "")
PROJECT_REF = "xcsmmdxsdptwjnhxznbd"

# Shopping-demand order: daily needs → pantry → drinks, then the rest.
SECTION_ORDER = [
    ("الأغذية الطازجة", "fresh"),
    ("المخبوزات", "bakery"),
    ("البقالة", "pantry"),
    ("المجمدات", "frozen"),
    ("المشروبات", "drinks"),
    ("عضوي وخالٍ من", "organic"),
    ("العناية والجمال", "beauty"),
    ("التنظيف والمنزل", "cleaning"),
    ("المنزل والحديقة", "home"),
    ("منتجات الأطفال", "baby"),
    ("الحيوانات الأليفة", "pets"),
    ("القرطاسية والمدرسة", "stationery"),
    ("الألعاب", "toys"),
    ("الرياضة والصحة", "health"),
    ("الإلكترونيات والأجهزة", "electronics"),
    ("الجوالات والإكسسوارات", "mobiles"),
    ("السيارات", "auto"),
    ("الأزياء والإكسسوارات", "fashion"),
    ("غير غذائي", "nonfood"),
    ("متفرقات", "misc"),
]

SLUG_DISPLAY = {
    "dairy-eggs": ("ألبان وبيض", "Dairy & Eggs"),
    "breakfast": ("منتجات الإفطار", "Breakfast"),
    "fruits-vegetables": ("خضار وفواكه", "Fruits & Vegetables"),
    "ready-to-eat": ("وجبات جاهزة", "Ready to Eat"),
}

UNIT_AR = {"pack": "عبوة", "pieces": "قطعة"}

COLORS = [
    "bg-green-50", "bg-yellow-50", "bg-orange-50", "bg-red-50", "bg-blue-50",
    "bg-amber-50", "bg-pink-50", "bg-purple-50", "bg-teal-50", "bg-cyan-50",
    "bg-rose-50", "bg-gray-50",
]

NINJA = "https://img.ananinja.com/media/ninja-catalog-42"
NINJA_IMAGES = {
    "خضروات": f"{NINJA}/5e8acb97-45c8-4cd3-aeed-92c766c0ff2f_Fruits-Ar1.png?w=400&q=75",
    "الفاكهة": f"{NINJA}/5e8acb97-45c8-4cd3-aeed-92c766c0ff2f_Fruits-Ar1.png?w=400&q=75",
    "خضار وفواكه": f"{NINJA}/5e8acb97-45c8-4cd3-aeed-92c766c0ff2f_Fruits-Ar1.png?w=400&q=75",
    "fruits-vegetables": f"{NINJA}/5e8acb97-45c8-4cd3-aeed-92c766c0ff2f_Fruits-Ar1.png?w=400&q=75",
    "منتجات الألبان والبيض": f"{NINJA}/b1ba9c84-8f44-436a-a75c-d5c2c018f54d_3def7b74-0c4f-432a-944d-7b8f5df0fb57_Ninja-Banners-Dairy-Egg-Ar.png?w=400&q=75",
    "ألبان وبيض": f"{NINJA}/b1ba9c84-8f44-436a-a75c-d5c2c018f54d_3def7b74-0c4f-432a-944d-7b8f5df0fb57_Ninja-Banners-Dairy-Egg-Ar.png?w=400&q=75",
    "dairy-eggs": f"{NINJA}/b1ba9c84-8f44-436a-a75c-d5c2c018f54d_3def7b74-0c4f-432a-944d-7b8f5df0fb57_Ninja-Banners-Dairy-Egg-Ar.png?w=400&q=75",
    "اللحوم والدواجن": f"{NINJA}/02cfd749-5c2b-479c-b4ef-8d7ea1699475_Ar.jpeg?w=400&q=75",
    "خبز وغيره": f"{NINJA}/9532ad87-bf7a-47a0-a6fd-8861c2f1765d_10.png?w=400&q=75",
    "خبز عربي، راب وغيرها": f"{NINJA}/9532ad87-bf7a-47a0-a6fd-8861c2f1765d_10.png?w=400&q=75",
    "الأرز والمعكرونة والبقوليات": f"{NINJA}/c33c4523-0166-4934-95b1-4e1499c11366_1-Pasta,Rice-AR(2).jpg?w=400&q=75",
    "مكونات الطبخ": f"{NINJA}/ef189fc5-fb1f-4a00-8b1a-f3901a84f27e_2-CookingNeeds-AR(2).jpg?w=400&q=75",
    "توابل، صلصات ومخللات": f"{NINJA}/2c6bf22a-22e0-4881-b384-fd671128da02_5-Spices-Seasoning-AR(1).jpg?w=400&q=75",
    "معلبات ومرطبانات وغيرها": f"{NINJA}/db12f8d8-a49b-4d1b-89a4-b9afc1679108_4-CannedFood-AR(1).jpg?w=400&q=75",
    "المربيات ، العسل وغيرها": f"{NINJA}/b5527955-267f-4732-8675-991ca341092e_222ecovered-Recovered.png?w=400&q=75",
    "منتجات الفطور الغذائية": f"{NINJA}/ee12680d-7190-45c0-b9e8-c822a5fe949d_10.jpg?w=400&q=75",
    "breakfast": f"{NINJA}/ee12680d-7190-45c0-b9e8-c822a5fe949d_10.jpg?w=400&q=75",
    "منتجات الإفطار": f"{NINJA}/ee12680d-7190-45c0-b9e8-c822a5fe949d_10.jpg?w=400&q=75",
    "مشروبات غازية": f"{NINJA}/a3aac811-db28-4d6b-8f04-2e7da5f671e9_SoftDrinksNEWAR.jpg?w=400&q=75",
    "ماء": f"{NINJA}/15148e27-5efe-4eb0-99b1-1e14303e8093_WaterARjp.jpg?w=400&q=75",
    "شاي": f"{NINJA}/aa7e1aaa-c232-47e4-9e5a-c6206d88f54a_213213red.png?w=400&q=75",
    "قهوة": f"{NINJA}/67c8984c-37ce-4403-9114-d12070c28290_COFFEENEWAR.jpg?w=400&q=75",
    "العصائر": f"{NINJA}/43ea62bd-1e9d-4d93-8aea-ca313c7ef99d_JuicesARFinal.jpg?w=400&q=75",
    "الشوكولاته والمعجنات": f"{NINJA}/ae24267e-e9f0-4f17-8ac5-02ba0590b439_ChocAr.png?w=400&q=75",
    "بسكويت، كراكرز وكيك": f"{NINJA}/a37c1f7a-60b2-4564-a930-f0298076a51b_BiscuitsAr.jpg?w=400&q=75",
    "شيبس ومقبلات": f"{NINJA}/328ed85a-b8ef-4b6e-a3b1-c38a953a8ec3_SNAAAAAACKSSSSSSAR.jpg?w=400&q=75",
    "المكسرات والتمور والفواكه المجففة": f"{NINJA}/aa9d0236-83b0-46f5-9d49-e5f50f603ca4_BAJAAR.jpg?w=400&q=75",
    "آيس كريم وحلويات": f"{NINJA}/3b6c747b-d03a-417d-89c5-43034d6361b5_828fa751-a849-428b-a9d1-3960e1ea2ddf_NEWAR(1).jpg?w=400&q=75",
    "منتجات عناية الشعر": f"{NINJA}/5cf18660-f72b-4c8f-a453-816ae9dd6378_Ninja-Banners-Hair-Care-ar.png?w=400&q=75",
    "مستحضرات عناية الوجه والجسم": f"{NINJA}/b5032f9d-e864-42bd-b702-7256f35424fd_1x1_SkinCare-03.png?w=400&q=75",
    "منتجات الصابون، الاستحمام وغيرها": f"{NINJA}/ff380c04-df35-42d5-89a5-17a3b0696db8_1231ecovered.png?w=400&q=75",
    "منتجات عناية الأسنان": f"{NINJA}/a77aaba7-e24c-485d-b8af-d2d64628a657_a013c0b8-5419-448f-a462-3ef312cabebe_33333ecovered-Recovered.png?w=400&q=75",
    "عطور وبارفان": f"{NINJA}/081ecedb-e2e5-44b0-8c41-9585b705cb2b_Perfumes-AR.png?w=400&q=75",
    "مستحضرات المكياج والأظافر": f"{NINJA}/3e66a876-7738-4d9e-ab01-4277dfa0b67d_21312red.png?w=400&q=75",
    "مساحيق غسيل وتنظيف": f"{NINJA}/453b5239-eb1c-4acb-ad43-c07a00940836_LAR.jpg?w=400&q=75",
    "مستلزمات التنظيف": f"{NINJA}/a58696f1-8bb4-49e4-8262-5685a654f7d3_Untitled.jpg?w=400&q=75",
    "مناديل": f"{NINJA}/ee3144d8-d60e-473c-9751-f289db4c3216_TiisuesandRolesAR.jpg?w=400&q=75",
    "ورق حمام ومطبخ": f"{NINJA}/ee3144d8-d60e-473c-9751-f289db4c3216_TiisuesandRolesAR.jpg?w=400&q=75",
    "منتجات الحليب والعصير": f"{NINJA}/072fc644-eae7-40f6-a0d7-a51144899c24_Baby-Milk-ar.png?w=400&q=75",
    "مستلزمات الاستحمام وغيرها": f"{NINJA}/f4dfe70d-901f-4bbb-9c60-135215c97891_Baby-Diapers-ar.png?w=400&q=75",
    "أطعمة الحيوانات الأليفة": f"{NINJA}/19bf746a-cb20-4c7f-aea2-e2e0cd1b3a97_CATSAR.png.png?w=400&q=75",
    "اكسسوارات الموبايل": f"{NINJA}/27ad7a9e-088f-4b0e-9be0-c571e5c9acc1_3213213d-Recovered.png?w=400&q=75",
    "ألعاب الفيديو": f"{NINJA}/d1f5f30c-37b0-4151-8ff6-e1ed93a9c1e4_VideogamesAR.jpg?w=400&q=75",
    "حقائب مدرسية و حافضات الأقلام": f"{NINJA}/427bdb1b-3885-4dd4-8cf7-3e4cafabbcd2_WhatsAppImage2025-08-03at11.24.50AM.jpeg?w=400&q=75",
    "مستلزمات الكتابة": f"{NINJA}/f8ee3cae-d758-4379-b6cd-d19883bc740f_WhatsAppImage2025-08-03at11.25.58AM.jpeg?w=400&q=75",
    "أدوات تلوين": f"{NINJA}/e7be261c-7606-4fea-91c4-394e40cb3170_WhatsAppImage2025-08-03at11.26.42AM(1).jpeg?w=400&q=75",
}

ICON_RULES = [
    ("خضروات", "🥬"), ("فاكهة", "🍎"), ("ألبان", "🥛"), ("بيض", "🥚"), ("لحوم", "🥩"),
    ("سمك", "🐟"), ("خبز", "🍞"), ("كرواسان", "🥐"), ("أرز", "🍚"), ("توابل", "🌶️"),
    ("معلبات", "🥫"), ("عسل", "🍯"), ("فطور", "🥣"), ("breakfast", "🥣"),
    ("شوكو", "🍫"), ("بسكويت", "🍪"), ("شيبس", "🥨"), ("مكسرات", "🥜"),
    ("آيس", "🍦"), ("مجمد", "🧊"), ("غازية", "🥤"), ("عصير", "🧃"), ("شاي", "🍵"),
    ("قهوة", "☕"), ("ماء", "💧"), ("شعر", "💇"), ("وجه", "🧴"), ("استحمام", "🚿"),
    ("أسنان", "🪥"), ("عطر", "🌸"), ("مكياج", "💄"), ("حلاقة", "🧔"), ("غسيل", "👕"),
    ("تنظيف", "🧹"), ("مناديل", "🧻"), ("مطبخ", "🍳"), ("طفل", "👶"), ("حليب", "🍼"),
    ("قطط", "🐱"), ("حيوانات", "🐾"), ("ألعاب", "🧸"), ("دمى", "👧"), ("قرطاس", "📎"),
    ("أقلام", "✏️"), ("حقائب", "🎒"), ("جوال", "📱"), ("سيارة", "🚗"), ("رياض", "💪"),
    ("إلكترون", "🔌"), ("عضوي", "🌿"), ("وجبات", "🍱"), ("ready", "🍱"),
]


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", str(text or "").strip())
    text = text.encode("ascii", "ignore").decode("ascii").lower()
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text[:60] or "cat"


def pick_icon(name_ar: str, name_en: str) -> str:
    blob = f"{name_ar} {name_en}".lower()
    for needle, icon in ICON_RULES:
        if needle.lower() in blob:
            return icon
    return "🛒"


def clean_text(value) -> str | None:
    if value is None or (isinstance(value, float) and pd.isna(value)):
        return None
    text = str(value).strip()
    return text or None


def barcode_text(value) -> str | None:
    text = clean_text(value)
    if not text:
        return None
    try:
        num = float(text)
        if num.is_integer():
            return str(int(num))
    except ValueError:
        pass
    return text


def ts_str(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def rest(method: str, path: str, body=None, prefer: str | None = None):
    url = f"{SUPABASE_URL}/rest/v1/{path}"
    headers = {
        "apikey": SERVICE_KEY,
        "Authorization": f"Bearer {SERVICE_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    if prefer:
        headers["Prefer"] = prefer
    data = None if body is None else json.dumps(body).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, context=ssl.create_default_context(), timeout=120) as resp:
            raw = resp.read().decode("utf-8")
            return json.loads(raw) if raw else None
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"{method} {path} -> {exc.code}: {detail[:800]}") from exc


def run_sql(query: str) -> None:
    if not ACCESS_TOKEN:
        raise RuntimeError("missing access token")
    url = f"https://api.supabase.com/v1/projects/{PROJECT_REF}/database/query"
    payload = json.dumps({"query": query}).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=payload,
        headers={
            "Authorization": f"Bearer {ACCESS_TOKEN}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, context=ssl.create_default_context(), timeout=180) as resp:
        resp.read()


def load_excel() -> pd.DataFrame:
    df = pd.read_excel(EXCEL)
    df.columns = [str(c).strip() for c in df.columns]
    return df


def build_catalog(df: pd.DataFrame):
    main_ar_col = "التصنيف الرئيسي (عربي)"
    main_en_col = "التصنيف الرئيسي (انجليزي)"
    sub_ar_col = "التصنيف الفرعي (عربي)"
    sub_en_col = "التصنيف الفرعي (انجليزي)"

    main_en_map = {}
    for _, row in df.iterrows():
        ar = clean_text(row.get(main_ar_col))
        en = clean_text(row.get(main_en_col))
        if ar and ar not in main_en_map and en:
            main_en_map[ar] = en

    used_slugs: set[str] = set()
    sections = []
    categories = []
    slug_by_key = {}
    sort_order = 0

    known = {ar: sid for ar, sid in SECTION_ORDER}
    ordered_mains = [ar for ar, _ in SECTION_ORDER if ar in set(df[main_ar_col].dropna().astype(str))]
    extra = [m for m in df[main_ar_col].dropna().astype(str).unique() if m not in known]
    ordered_mains.extend(sorted(extra))

    for main_ar in ordered_mains:
        section_id = known.get(main_ar) or slugify(main_en_map.get(main_ar, main_ar))
        main_en = main_en_map.get(main_ar, main_ar)
        sections.append({"id": section_id, "title": main_ar, "titleEn": main_en})

        subset = df[df[main_ar_col].astype(str) == main_ar]
        grouped = (
            subset.groupby([sub_ar_col, sub_en_col], dropna=False)
            .size()
            .reset_index(name="n")
            .sort_values("n", ascending=False)
        )
        for _, grow in grouped.iterrows():
            raw_ar = clean_text(grow[sub_ar_col]) or "متنوع"
            raw_en = clean_text(grow[sub_en_col]) or raw_ar
            if raw_ar in SLUG_DISPLAY:
                name_ar, name_en = SLUG_DISPLAY[raw_ar]
            elif re.fullmatch(r"[a-z0-9-]+", raw_ar):
                name_ar, name_en = SLUG_DISPLAY.get(raw_ar, (raw_ar.replace("-", " ").title(), raw_en.replace("-", " ").title()))
            else:
                name_ar, name_en = raw_ar, raw_en

            slug = slugify(name_en) or slugify(raw_en) or "category"
            base = slug
            i = 2
            while slug in used_slugs:
                slug = f"{base}-{i}"
                i += 1
            used_slugs.add(slug)

            image = NINJA_IMAGES.get(raw_ar) or NINJA_IMAGES.get(name_ar)
            if not image:
                with_img = subset[
                    (subset[sub_ar_col].astype(str) == str(grow[sub_ar_col]))
                    & subset["رابط صورة المنتج الرئيسية"].notna()
                ]
                if len(with_img):
                    pick = with_img.iloc[min(2, len(with_img) - 1)]
                    image = clean_text(pick["رابط صورة المنتج الرئيسية"])
            if not image:
                image = "/placeholder.png"

            sort_order += 1
            categories.append({
                "id": slug,
                "name": name_ar,
                "nameEn": name_en,
                "icon": pick_icon(name_ar, name_en),
                "image": image,
                "color": COLORS[sort_order % len(COLORS)],
                "section": section_id,
                "sort_order": sort_order,
                "raw_main": main_ar,
                "raw_sub": str(grow[sub_ar_col]),
            })
            slug_by_key[(main_ar, str(grow[sub_ar_col]))] = slug

    products = []
    skipped = 0
    for _, row in df.iterrows():
        name_ar = clean_text(row.get("اسم المنتج (عربي)"))
        name_en = clean_text(row.get("اسم المنتج (انجليزي)"))
        name = name_ar or name_en
        if not name:
            skipped += 1
            continue
        try:
            price = round(float(row["السعر"]), 2)
        except (TypeError, ValueError):
            skipped += 1
            continue
        main_ar = clean_text(row.get(main_ar_col)) or ""
        sub_raw = str(row.get(sub_ar_col))
        slug = slug_by_key.get((main_ar, sub_raw))
        if not slug:
            skipped += 1
            continue
        unit_raw = (clean_text(row.get("شكل المنتج")) or "piece").lower()
        products.append({
            "name": name,
            "name_en": name_en,
            "price": price,
            "image": clean_text(row.get("رابط صورة المنتج الرئيسية")),
            "unit": UNIT_AR.get(unit_raw, "قطعة"),
            "barcode": barcode_text(row.get("باركود")),
            "slug": slug,
        })
    return sections, categories, products, skipped


def write_store_data(sections, categories) -> None:
    lines = [
        "// بيانات المتجر - مستوردة من كتالوج السوبرماركت",
        "",
        "export interface Product {",
        "  id: string;",
        "  name: string;",
        "  nameEn: string;",
        "  price: number;",
        "  oldPrice?: number;",
        "  image: string;",
        "  categoryId: string;",
        "  unit: string;",
        "  description: string;",
        "  inStock: boolean;",
        "  isBestseller?: boolean;",
        "  badge?: string;",
        "}",
        "",
        "export interface Category {",
        "  id: string;",
        "  name: string;",
        "  nameEn: string;",
        "  icon: string;",
        "  image: string;",
        "  color: string;",
        "  section: string;",
        "}",
        "",
        "export interface CategorySection {",
        "  id: string;",
        "  title: string;",
        "  titleEn: string;",
        "}",
        "",
        "export const categorySections: CategorySection[] = [",
    ]
    for s in sections:
        lines.append(
            f'  {{ id: {ts_str(s["id"])}, title: {ts_str(s["title"])}, titleEn: {ts_str(s["titleEn"])} }},'
        )
    lines.append("];")
    lines.append("")
    lines.append("export const categories: Category[] = [")
    current = None
    for c in categories:
        if c["section"] != current:
            current = c["section"]
            title = next(s["title"] for s in sections if s["id"] == current)
            lines.append(f"  // {title}")
        lines.append(
            "  { "
            f'id: {ts_str(c["id"])}, name: {ts_str(c["name"])}, nameEn: {ts_str(c["nameEn"])}, '
            f'icon: {ts_str(c["icon"])}, image: {ts_str(c["image"])}, color: {ts_str(c["color"])}, '
            f'section: {ts_str(c["section"])} '
            "},"
        )
    lines.append("];")
    lines.append("")
    lines.append("export const products: Product[] = [];")
    lines.append("")
    STORE_DATA.write_text("\n".join(lines), encoding="utf-8")


def clear_catalog() -> None:
    try:
        run_sql("TRUNCATE TABLE public.products RESTART IDENTITY CASCADE; DELETE FROM public.categories;")
        print("cleared catalog via SQL")
        return
    except Exception as exc:
        print(f"SQL truncate failed ({exc}); falling back to REST delete")

    while True:
        rows = rest("GET", "products?select=id&limit=1000") or []
        if not rows:
            break
        ids = ",".join(r["id"] for r in rows)
        rest("DELETE", f"products?id=in.({ids})")
        print(f"deleted {len(rows)} products")
    while True:
        rows = rest("GET", "categories?select=id&limit=1000") or []
        if not rows:
            break
        ids = ",".join(r["id"] for r in rows)
        rest("DELETE", f"categories?id=in.({ids})")
        print(f"deleted {len(rows)} categories")


def insert_categories(categories) -> dict[str, str]:
    payload = [
        {
            "name": c["name"],
            "name_en": c["nameEn"],
            "slug": c["id"],
            "image": c["image"],
            "is_active": True,
            "sort_order": c["sort_order"],
        }
        for c in categories
    ]
    inserted = rest("POST", "categories", payload, prefer="return=representation") or []
    mapping = {row["slug"]: row["id"] for row in inserted}
    print(f"inserted {len(mapping)} categories")
    return mapping


def insert_products(products, slug_to_id: dict[str, str]) -> int:
    batch_size = 400
    total = 0
    by_slug_index: dict[str, int] = {}
    for i in range(0, len(products), batch_size):
        chunk = products[i : i + batch_size]
        rows = []
        for item in chunk:
            slug = item["slug"]
            by_slug_index[slug] = by_slug_index.get(slug, 0) + 1
            rows.append({
                "name": item["name"][:500],
                "name_en": item["name_en"],
                "price": item["price"],
                "original_price": None,
                "image": item["image"],
                "category_id": slug_to_id[slug],
                "unit": item["unit"],
                "description": None,
                "barcode": item["barcode"],
                "is_active": True,
                "is_featured": False,
                "sort_order": by_slug_index[slug],
            })
        for attempt in range(5):
            try:
                rest("POST", "products", rows, prefer="return=minimal")
                break
            except RuntimeError as exc:
                if attempt == 4:
                    raise
                wait = 2 ** attempt
                print(f"retry batch {i} after {wait}s: {exc}")
                time.sleep(wait)
        total += len(rows)
        print(f"products {total}/{len(products)}")
    return total


def main() -> None:
    print("reading excel...")
    df = load_excel()
    sections, categories, products, skipped = build_catalog(df)
    print(f"sections={len(sections)} categories={len(categories)} products={len(products)} skipped={skipped}")
    write_store_data(sections, categories)
    print(f"wrote {STORE_DATA}")
    clear_catalog()
    slug_to_id = insert_categories(categories)
    missing = {p["slug"] for p in products} - set(slug_to_id)
    if missing:
        raise RuntimeError(f"missing category ids for slugs: {sorted(missing)[:10]}")
    count = insert_products(products, slug_to_id)
    print(f"done. imported {count} products")


if __name__ == "__main__":
    main()
