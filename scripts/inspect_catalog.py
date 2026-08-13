# -*- coding: utf-8 -*-
import json
from pathlib import Path

import pandas as pd

path = Path(r"c:\Users\aboda5422\Desktop\مجلد جديد\19,000 supermarket products.xlsx")
df = pd.read_excel(path)
df.columns = [str(c).strip() for c in df.columns]

main_ar = "التصنيف الرئيسي (عربي)"
main_en = "التصنيف الرئيسي (انجليزي)"
sub_ar = "التصنيف الفرعي (عربي)"
sub_en = "التصنيف الفرعي (انجليزي)"

out = Path(__file__).resolve().parent / "catalog_inspect.json"

mains = (
    df.groupby([main_ar, main_en], dropna=False)
    .size()
    .reset_index(name="n")
    .sort_values("n", ascending=False)
)
subs = (
    df.groupby([main_ar, main_en, sub_ar, sub_en], dropna=False)
    .size()
    .reset_index(name="n")
    .sort_values(["n"], ascending=False)
)

# pick a sample image per subcategory
sample_images = {}
for _, row in df.iterrows():
    key = (str(row[main_ar]), str(row[sub_ar]))
    img = row.get("رابط صورة المنتج الرئيسية")
    if key not in sample_images and pd.notna(img) and str(img).startswith("http"):
        sample_images[key] = str(img)

payload = {
    "rows": int(len(df)),
    "columns": list(df.columns),
    "price_null": int(df["السعر"].isna().sum()),
    "image_null": int(df["رابط صورة المنتج الرئيسية"].isna().sum()),
    "name_ar_null": int(df["اسم المنتج (عربي)"].isna().sum()),
    "barcode_null": int(df["باركود"].isna().sum()),
    "unique_barcodes": int(df["باركود"].nunique(dropna=True)),
    "units": {str(k): int(v) for k, v in df["شكل المنتج"].value_counts(dropna=False).items()},
    "mains": [
        {"n": int(r["n"]), "ar": None if pd.isna(r[main_ar]) else str(r[main_ar]), "en": None if pd.isna(r[main_en]) else str(r[main_en])}
        for _, r in mains.iterrows()
    ],
    "subs": [
        {
            "n": int(r["n"]),
            "main_ar": None if pd.isna(r[main_ar]) else str(r[main_ar]),
            "main_en": None if pd.isna(r[main_en]) else str(r[main_en]),
            "sub_ar": None if pd.isna(r[sub_ar]) else str(r[sub_ar]),
            "sub_en": None if pd.isna(r[sub_en]) else str(r[sub_en]),
            "image": sample_images.get((str(r[main_ar]), str(r[sub_ar]))),
        }
        for _, r in subs.iterrows()
    ],
}

out.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"wrote {out}")
