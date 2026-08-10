# تطبيق أسواق تجريبي (TASWEEQ APP DEMO)

قالب متجر بقالة جاهز لإعادة البيع (ويب + تطبيق Capacitor).

## مصدر الحقيقة: GitHub فقط

المستودع الرسمي: https://github.com/aboda5422/aswaq-tajribi

**قاعدة العمل:**
1. كل تعديل يُحفظ بـ `git commit` ثم `git push origin main`
2. النشر إلى Cloudflare يتم **بعد** الرفع إلى GitHub (من نفس الكود المحفوظ)
3. لا تعتمد على تعديلات محلية غير مرفوعة — وإلا ستضيع عند الاستعادة

```bash
git add .
git commit -m "وصف واضح للتغيير"
git push origin main
npm run build
npx wrangler pages deploy dist --project-name=aswaq-tajribi
```

## التخصيص للعميل الجديد

1. عدّل `src/config/branding.ts`
2. راجع `CLIENT_PLACEHOLDERS.md` وابحث عن `[[CLIENT_`
3. غيّر الألوان في `src/index.css` عند الحاجة
4. حدّث الشعار: `src/assets/logo.png` والأيقونة: `src/assets/logo-icon.png`

## حسابات التجربة

كلمة المرور للكل: `Demo@123456`

| الدور | البريد |
|--------|--------|
| عميل | `customer@tasweeo.demo` |
| مندوب | `driver@tasweeo.demo` |
| أدمن | `admin@tasweeo.demo` |

تظهر بطاقة تعبئة تلقائية في صفحات الدخول.

## المعرفات

- الاسم: تطبيق أسواق تجريبي / TASWEEQ APP DEMO
- Package ID: `com.aswaq.tajribi`
- npm name: `aswaq-tajribi`

## التشغيل

```bash
npm install
npm run dev
```
