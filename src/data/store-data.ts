// بيانات المتجر - مستوردة من كتالوج السوبرماركت

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  oldPrice?: number;
  image: string;
  categoryId: string;
  unit: string;
  description: string;
  inStock: boolean;
  isBestseller?: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  image: string;
  color: string;
  section: string;
}

export interface CategorySection {
  id: string;
  title: string;
  titleEn: string;
}

export const categorySections: CategorySection[] = [
  { id: "fresh", title: "الأغذية الطازجة", titleEn: "Fresh Food" },
  { id: "bakery", title: "المخبوزات", titleEn: "Bakery" },
  { id: "pantry", title: "البقالة", titleEn: "Food Cupboard" },
  { id: "frozen", title: "المجمدات", titleEn: "Frozen Food" },
  { id: "drinks", title: "المشروبات", titleEn: "Beverages" },
  { id: "organic", title: "عضوي وخالٍ من", titleEn: "Organic & Free From" },
  { id: "beauty", title: "العناية والجمال", titleEn: "Beauty & Personal Care" },
  { id: "cleaning", title: "التنظيف والمنزل", titleEn: "Cleaning & Household" },
  { id: "home", title: "المنزل والحديقة", titleEn: "Home & Garden" },
  { id: "baby", title: "منتجات الأطفال", titleEn: "Baby Products" },
  { id: "pets", title: "الحيوانات الأليفة", titleEn: "Pets" },
  { id: "stationery", title: "القرطاسية والمدرسة", titleEn: "Stationery & School" },
  { id: "toys", title: "الألعاب", titleEn: "Toys" },
  { id: "health", title: "الرياضة والصحة", titleEn: "Sports & Health" },
  { id: "electronics", title: "الإلكترونيات والأجهزة", titleEn: "Electronics & Appliances" },
  { id: "mobiles", title: "الجوالات والإكسسوارات", titleEn: "Mobiles & Wearables" },
  { id: "auto", title: "السيارات", titleEn: "Automotive" },
  { id: "fashion", title: "الأزياء والإكسسوارات", titleEn: "Fashion & Accessories" },
  { id: "nonfood", title: "غير غذائي", titleEn: "Non-Food" },
  { id: "misc", title: "متفرقات", titleEn: "Miscellaneous" },
];

export const categories: Category[] = [
  // الأغذية الطازجة
  { id: "dairy-eggs", name: "منتجات الألبان والبيض", nameEn: "Dairy & Eggs", icon: "🥛", image: "https://img.ananinja.com/media/ninja-catalog-42/b1ba9c84-8f44-436a-a75c-d5c2c018f54d_3def7b74-0c4f-432a-944d-7b8f5df0fb57_Ninja-Banners-Dairy-Egg-Ar.png?w=400&q=75", color: "bg-yellow-50", section: "fresh" },
  { id: "fruits", name: "الفاكهة", nameEn: "Fruits", icon: "🍎", image: "https://img.ananinja.com/media/ninja-catalog-42/5e8acb97-45c8-4cd3-aeed-92c766c0ff2f_Fruits-Ar1.png?w=400&q=75", color: "bg-orange-50", section: "fresh" },
  { id: "meat-poultry", name: "اللحوم والدواجن", nameEn: "Meat & Poultry", icon: "🥩", image: "https://img.ananinja.com/media/ninja-catalog-42/02cfd749-5c2b-479c-b4ef-8d7ea1699475_Ar.jpeg?w=400&q=75", color: "bg-red-50", section: "fresh" },
  { id: "vegetables", name: "خضروات", nameEn: "Vegetables", icon: "🥬", image: "https://img.ananinja.com/media/ninja-catalog-42/5e8acb97-45c8-4cd3-aeed-92c766c0ff2f_Fruits-Ar1.png?w=400&q=75", color: "bg-blue-50", section: "fresh" },
  { id: "chilled-food-counter", name: "الأطعمة المبردة", nameEn: "Chilled Food Counter", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/8a7ff62d06b6cfef5780364880398786e8cfe12fe666851570350f592781ac45.webp", color: "bg-amber-50", section: "fresh" },
  { id: "fish-seafood", name: "السمك والأطعمة البحرية", nameEn: "Fish & Seafood", icon: "🐟", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/9e1b3ca20c5419124b2ccf5be7f99d6fb1d1d6ba6a068ec7a3425eb4a2e1dc61.webp", color: "bg-pink-50", section: "fresh" },
  { id: "food-to-go", name: "مأكولات جاهزة", nameEn: "Food To Go", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/ad3cdf64bf2b6eeba99b3a168050d9506630cac7ac24580ef58c7b4dd7cefb31.webp", color: "bg-purple-50", section: "fresh" },
  // المخبوزات
  { id: "croissants-pastries-cakes", name: "كرواسان، باستري وكيك", nameEn: "Croissants, Pastries & Cakes", icon: "🥐", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/cad0fb1dfbb6f95776e9a5a31d06c9eb5602f5a082732c5bac5d36aa232dba9f.webp", color: "bg-teal-50", section: "bakery" },
  { id: "bread-rolls", name: "خبز وغيره", nameEn: "Bread & Rolls", icon: "🍞", image: "https://img.ananinja.com/media/ninja-catalog-42/9532ad87-bf7a-47a0-a6fd-8861c2f1765d_10.png?w=400&q=75", color: "bg-cyan-50", section: "bakery" },
  { id: "arabic-bread-wraps-flatbreads", name: "خبز عربي، راب وغيرها", nameEn: "Arabic Bread, Wraps & Flatbreads", icon: "🍞", image: "https://img.ananinja.com/media/ninja-catalog-42/9532ad87-bf7a-47a0-a6fd-8861c2f1765d_10.png?w=400&q=75", color: "bg-rose-50", section: "bakery" },
  { id: "sweets", name: "حلويات", nameEn: "Sweets", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/8aed99015f6aa3ed9589bfed7b773e1f4019bbefcb96c4db5fd4ed5313e9efe2.webp", color: "bg-gray-50", section: "bakery" },
  { id: "donuts-cookies-muffins", name: "حلوى الدونات، الكوكي والمافن", nameEn: "Donuts, Cookies & Muffins", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/23bc40da9abd68f641486445f8a3e67e283269dc3c37c301dd1dec3703db220d.webp", color: "bg-green-50", section: "bakery" },
  // البقالة
  { id: "chocolate-confectionery", name: "الشوكولاته والمعجنات", nameEn: "Chocolate & Confectionery", icon: "🍫", image: "https://img.ananinja.com/media/ninja-catalog-42/ae24267e-e9f0-4f17-8ac5-02ba0590b439_ChocAr.png?w=400&q=75", color: "bg-yellow-50", section: "pantry" },
  { id: "cooking-ingredients", name: "مكونات الطبخ", nameEn: "Cooking Ingredients", icon: "🛒", image: "https://img.ananinja.com/media/ninja-catalog-42/ef189fc5-fb1f-4a00-8b1a-f3901a84f27e_2-CookingNeeds-AR(2).jpg?w=400&q=75", color: "bg-orange-50", section: "pantry" },
  { id: "biscuits-crackers-cakes", name: "بسكويت، كراكرز وكيك", nameEn: "Biscuits, Crackers & Cakes", icon: "🍪", image: "https://img.ananinja.com/media/ninja-catalog-42/a37c1f7a-60b2-4564-a930-f0298076a51b_BiscuitsAr.jpg?w=400&q=75", color: "bg-red-50", section: "pantry" },
  { id: "tins-jars-packets", name: "معلبات ومرطبانات وغيرها", nameEn: "Tins, Jars & Packets", icon: "🥫", image: "https://img.ananinja.com/media/ninja-catalog-42/db12f8d8-a49b-4d1b-89a4-b9afc1679108_4-CannedFood-AR(1).jpg?w=400&q=75", color: "bg-blue-50", section: "pantry" },
  { id: "sugar-home-baking", name: "السكر والخبز المنزلي", nameEn: "Sugar & Home Baking", icon: "🍞", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/1ef0ee8bc486b900d1fb529cc974fb064936ed8311f4f2788b7e0bb390ffedc0.webp", color: "bg-amber-50", section: "pantry" },
  { id: "rice-pasta-pulses", name: "الأرز والمعكرونة والبقوليات", nameEn: "Rice, Pasta & Pulses", icon: "🍚", image: "https://img.ananinja.com/media/ninja-catalog-42/c33c4523-0166-4934-95b1-4e1499c11366_1-Pasta,Rice-AR(2).jpg?w=400&q=75", color: "bg-pink-50", section: "pantry" },
  { id: "chips-dips-snacks", name: "شيبس ومقبلات", nameEn: "Chips, Dips & Snacks", icon: "🥨", image: "https://img.ananinja.com/media/ninja-catalog-42/328ed85a-b8ef-4b6e-a3b1-c38a953a8ec3_SNAAAAAACKSSSSSSAR.jpg?w=400&q=75", color: "bg-purple-50", section: "pantry" },
  { id: "condiments-dressings-marinades", name: "توابل، صلصات ومخللات", nameEn: "Condiments, Dressings & Marinades", icon: "🌶️", image: "https://img.ananinja.com/media/ninja-catalog-42/2c6bf22a-22e0-4881-b384-fd671128da02_5-Spices-Seasoning-AR(1).jpg?w=400&q=75", color: "bg-teal-50", section: "pantry" },
  { id: "dairy-eggs-2", name: "ألبان وبيض", nameEn: "Dairy & Eggs", icon: "🥛", image: "https://img.ananinja.com/media/ninja-catalog-42/b1ba9c84-8f44-436a-a75c-d5c2c018f54d_3def7b74-0c4f-432a-944d-7b8f5df0fb57_Ninja-Banners-Dairy-Egg-Ar.png?w=400&q=75", color: "bg-cyan-50", section: "pantry" },
  { id: "breakfast", name: "منتجات الإفطار", nameEn: "Breakfast", icon: "🥣", image: "https://img.ananinja.com/media/ninja-catalog-42/ee12680d-7190-45c0-b9e8-c822a5fe949d_10.jpg?w=400&q=75", color: "bg-rose-50", section: "pantry" },
  { id: "jams-honey-spreads", name: "المربيات ، العسل وغيرها", nameEn: "Jams, Honey & Spreads", icon: "🍯", image: "https://img.ananinja.com/media/ninja-catalog-42/b5527955-267f-4732-8675-991ca341092e_222ecovered-Recovered.png?w=400&q=75", color: "bg-gray-50", section: "pantry" },
  { id: "nuts-dates-dried-fruits", name: "المكسرات والتمور والفواكه المجففة", nameEn: "Nuts, Dates & Dried Fruits", icon: "🥜", image: "https://img.ananinja.com/media/ninja-catalog-42/aa9d0236-83b0-46f5-9d49-e5f50f603ca4_BAJAAR.jpg?w=400&q=75", color: "bg-green-50", section: "pantry" },
  { id: "world-specialities", name: "منتجات من كل أنحاء العالم", nameEn: "World Specialities", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/9da92c4abd8e72e79485b7c18115203ef836f0b590997a716166aed1621a3562.webp", color: "bg-yellow-50", section: "pantry" },
  { id: "fruits-vegetables", name: "خضار وفواكه", nameEn: "Fruits & Vegetables", icon: "🛒", image: "https://img.ananinja.com/media/ninja-catalog-42/5e8acb97-45c8-4cd3-aeed-92c766c0ff2f_Fruits-Ar1.png?w=400&q=75", color: "bg-orange-50", section: "pantry" },
  { id: "breakfast-cereals-bars", name: "منتجات الفطور الغذائية", nameEn: "Breakfast Cereals & Bars", icon: "🥣", image: "https://img.ananinja.com/media/ninja-catalog-42/ee12680d-7190-45c0-b9e8-c822a5fe949d_10.jpg?w=400&q=75", color: "bg-red-50", section: "pantry" },
  { id: "ready-to-eat", name: "وجبات جاهزة", nameEn: "Ready to Eat", icon: "🍱", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/ninja/7527d6793d3d2c8f169828951361b55d13522eccbcecc4b3ff0b729aaf8d536e.webp", color: "bg-blue-50", section: "pantry" },
  // المجمدات
  { id: "ready-meals-appetizers", name: "الوجبات الجاهزة والمقبلات", nameEn: "Ready Meals & Appetizers", icon: "🍱", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/12ff0f01d6f68ebca3548917ee09b1fbcbc5c65bb006c7548cf046f0343b60eb.webp", color: "bg-amber-50", section: "frozen" },
  { id: "frozen-fruits-vegetables", name: "فواكه وخضروات مجمدة", nameEn: "Frozen Fruits & Vegetables", icon: "🥬", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/fcc7337b41912c9a53e87c58062c6784a806f509a908d337eeef7d26c59b0ecb.webp", color: "bg-pink-50", section: "frozen" },
  { id: "frozen-meat-poultry", name: "لحوم ودواجن مجمدة", nameEn: "Frozen Meat & Poultry", icon: "🥩", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/7e6e31d2d78b3aafe48787d84ebabe31bee5ac01829ebc2e824f0f6f61234aea.webp", color: "bg-purple-50", section: "frozen" },
  { id: "ice-cream-desserts", name: "آيس كريم وحلويات", nameEn: "Ice Cream & Desserts", icon: "🍦", image: "https://img.ananinja.com/media/ninja-catalog-42/3b6c747b-d03a-417d-89c5-43034d6361b5_828fa751-a849-428b-a9d1-3960e1ea2ddf_NEWAR(1).jpg?w=400&q=75", color: "bg-teal-50", section: "frozen" },
  { id: "frozen-fish-seafood", name: "سمك ومأكولات بحرية", nameEn: "Frozen Fish & Seafood", icon: "🐟", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/1b4a647a56a144e31c24cc3b52245478e7a26609be8ebc7a014de6c541a64536.webp", color: "bg-cyan-50", section: "frozen" },
  { id: "ice", name: "ثلج", nameEn: "Ice", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/226c8ba0f592ea7ed14e794c61b53edc7ef4aa2daf05c2883431635b3ff1c72e.webp", color: "bg-rose-50", section: "frozen" },
  // المشروبات
  { id: "soft-drinks", name: "مشروبات غازية", nameEn: "Soft Drinks", icon: "🥤", image: "https://img.ananinja.com/media/ninja-catalog-42/a3aac811-db28-4d6b-8f04-2e7da5f671e9_SoftDrinksNEWAR.jpg?w=400&q=75", color: "bg-gray-50", section: "drinks" },
  { id: "juices", name: "العصائر", nameEn: "Juices", icon: "🛒", image: "https://img.ananinja.com/media/ninja-catalog-42/43ea62bd-1e9d-4d93-8aea-ca313c7ef99d_JuicesARFinal.jpg?w=400&q=75", color: "bg-green-50", section: "drinks" },
  { id: "tea", name: "شاي", nameEn: "Tea", icon: "🍵", image: "https://img.ananinja.com/media/ninja-catalog-42/aa7e1aaa-c232-47e4-9e5a-c6206d88f54a_213213red.png?w=400&q=75", color: "bg-yellow-50", section: "drinks" },
  { id: "coffee", name: "قهوة", nameEn: "Coffee", icon: "☕", image: "https://img.ananinja.com/media/ninja-catalog-42/67c8984c-37ce-4403-9114-d12070c28290_COFFEENEWAR.jpg?w=400&q=75", color: "bg-orange-50", section: "drinks" },
  { id: "kids-drinks", name: "مشروبات الأطفال", nameEn: "Kids Drinks", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/d4487902fdd3df976ad9546ef6721e26426726d1546d13d94c6fdc2fdc6c84aa.webp", color: "bg-red-50", section: "drinks" },
  { id: "powdered-drinks", name: "مشروبات بودرة", nameEn: "Powdered Drinks", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/89bfbc3dc19e80b6dc073a5063249389b914387311f22a99ce4bb8321c7d0526.webp", color: "bg-blue-50", section: "drinks" },
  { id: "water", name: "ماء", nameEn: "Water", icon: "💧", image: "https://img.ananinja.com/media/ninja-catalog-42/15148e27-5efe-4eb0-99b1-1e14303e8093_WaterARjp.jpg?w=400&q=75", color: "bg-amber-50", section: "drinks" },
  // عضوي وخالٍ من
  { id: "organic-food-cupboard", name: "السوبر ماركت", nameEn: "Organic Food Cupboard", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/d13ecac7645b1fa30a8e09db572db895f4f99a83f86221e6d2726c1a3a08f648.webp", color: "bg-pink-50", section: "organic" },
  { id: "free-from", name: "منتجات خالية من", nameEn: "Free From", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/1cdbbf4b2fe6352266b6fa3ae5f694d7f7d9e8609165d1b0ca05d146d503c397.webp", color: "bg-purple-50", section: "organic" },
  { id: "organic-drinks", name: "مشروبات عضوية", nameEn: "Organic Drinks", icon: "🌿", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/6922ca542722cfe9476bf0c289531534619157929932cd2f116187ad87dabd22.webp", color: "bg-teal-50", section: "organic" },
  { id: "organic-dairy-products", name: "منتجات يومية عضوية", nameEn: "Organic Dairy Products", icon: "🌿", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/a9d55a3ea3425c39400807472054da0392432fff2dcf4de49954626eaeed5e84.webp", color: "bg-cyan-50", section: "organic" },
  { id: "organic-baby-food", name: "أغذية أطفال عضوية", nameEn: "Organic Baby Food", icon: "🌿", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/63c8bee1bef5a9484037c57651599629b23aeb715d7e6d531c375e5a5454444c.webp", color: "bg-rose-50", section: "organic" },
  { id: "organic-fruits-vegetables", name: "خضار وفواكه عضوية", nameEn: "Organic Fruits & Vegetables", icon: "🌿", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/7da9dd2eaeed598082ccdc920d09b7c9fbf7c354b9a563ade4e69d8ce7fc64a3.webp", color: "bg-gray-50", section: "organic" },
  { id: "organic-bakery", name: "مخبوزات عضوية", nameEn: "Organic Bakery", icon: "🌿", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/b2a40ab2d051dc4e4bd36e5a9f56b491f6e16c53dec420d083cd7570a776c2be.webp", color: "bg-green-50", section: "organic" },
  // العناية والجمال
  { id: "hair-care", name: "منتجات عناية الشعر", nameEn: "Hair Care", icon: "💇", image: "https://img.ananinja.com/media/ninja-catalog-42/5cf18660-f72b-4c8f-a453-816ae9dd6378_Ninja-Banners-Hair-Care-ar.png?w=400&q=75", color: "bg-yellow-50", section: "beauty" },
  { id: "face-body-skin-care", name: "مستحضرات عناية الوجه والجسم", nameEn: "Face & Body Skin Care", icon: "🧴", image: "https://img.ananinja.com/media/ninja-catalog-42/b5032f9d-e864-42bd-b702-7256f35424fd_1x1_SkinCare-03.png?w=400&q=75", color: "bg-orange-50", section: "beauty" },
  { id: "shower-bath-soap", name: "منتجات الصابون، الاستحمام وغيرها", nameEn: "Shower, Bath & Soap", icon: "🚿", image: "https://img.ananinja.com/media/ninja-catalog-42/ff380c04-df35-42d5-89a5-17a3b0696db8_1231ecovered.png?w=400&q=75", color: "bg-red-50", section: "beauty" },
  { id: "dental-care", name: "منتجات عناية الأسنان", nameEn: "Dental Care", icon: "🪥", image: "https://img.ananinja.com/media/ninja-catalog-42/a77aaba7-e24c-485d-b8af-d2d64628a657_a013c0b8-5419-448f-a462-3ef312cabebe_33333ecovered-Recovered.png?w=400&q=75", color: "bg-blue-50", section: "beauty" },
  { id: "men-s-grooming", name: "مستلزمات حلاقة الرجال", nameEn: "Men's Grooming", icon: "🧔", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/a5f56f3cdd7b3f0cb0a768288f77c2d0e1f9ce16e5d845843982b881fe7c62dd.webp", color: "bg-amber-50", section: "beauty" },
  { id: "toiletries-perfumes", name: "عطور وبارفان", nameEn: "Toiletries & Perfumes", icon: "🛒", image: "https://img.ananinja.com/media/ninja-catalog-42/081ecedb-e2e5-44b0-8c41-9585b705cb2b_Perfumes-AR.png?w=400&q=75", color: "bg-pink-50", section: "beauty" },
  { id: "personal-care-wellbeing", name: "منتجات العناية الشخصية والرفاهية", nameEn: "Personal Care & Wellbeing", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/ff2bc6c10fa00d4a7870fbef6e3eb7f99596d043f6151460f2a494be5d33b995.webp", color: "bg-purple-50", section: "beauty" },
  { id: "natural-personal-care", name: "العناية الشخصية الطبيعية", nameEn: "Natural Personal Care", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/68ef1347017a036f3cf7b3f26ac04bcfae4f73ea939fa778d5f40a5d0a4e9124.webp", color: "bg-teal-50", section: "beauty" },
  { id: "makeup-nails", name: "مستحضرات المكياج والأظافر", nameEn: "Makeup & Nails", icon: "💄", image: "https://img.ananinja.com/media/ninja-catalog-42/3e66a876-7738-4d9e-ab01-4277dfa0b67d_21312red.png?w=400&q=75", color: "bg-cyan-50", section: "beauty" },
  { id: "ladies-hair-removal", name: "مستحضرات إزالة الشعر", nameEn: "Ladies Hair Removal", icon: "💇", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/74816b3c9a99a33d90ae5e667c9e7eeecbca221b685eb2b787ede52e9b884e52.webp", color: "bg-rose-50", section: "beauty" },
  { id: "makeup-accessoreis", name: "اكسسوارت المكياج", nameEn: "Makeup Accessoreis", icon: "💄", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/ae299fa40595d0eaef09a128a8607e5b2254482b1ae005047d358b6882a16785.webp", color: "bg-gray-50", section: "beauty" },
  { id: "suncare-travel-size", name: "الحماية من الشمس", nameEn: "Suncare & Travel Size", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/462bd0bc581f4bf391b5398453fa9e7a1f0dea4704b2b72b64f3ead15aff5431.webp", color: "bg-green-50", section: "beauty" },
  // التنظيف والمنزل
  { id: "cleaning-supplies", name: "مستلزمات التنظيف", nameEn: "Cleaning Supplies", icon: "🧹", image: "https://img.ananinja.com/media/ninja-catalog-42/a58696f1-8bb4-49e4-8262-5685a654f7d3_Untitled.jpg?w=400&q=75", color: "bg-yellow-50", section: "cleaning" },
  { id: "laundry-detergents", name: "مساحيق غسيل وتنظيف", nameEn: "Laundry & Detergents", icon: "👕", image: "https://img.ananinja.com/media/ninja-catalog-42/453b5239-eb1c-4acb-ad43-c07a00940836_LAR.jpg?w=400&q=75", color: "bg-orange-50", section: "cleaning" },
  { id: "food-storage-foil-cling-film", name: "تخزين الطعام، ورق معدني وبلاستيكي للتغليف", nameEn: "Food Storage, Foil & Cling film", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/7b2a7137d40573e4ede090fb79cad0b79408110b038383bd4951526a93d3b608.webp", color: "bg-red-50", section: "cleaning" },
  { id: "disposables-tableware-napkins", name: "مناديل ومواد للاستخدام لمرة واحدة", nameEn: "Disposables Tableware & Napkins", icon: "🧻", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/2dcfe5a24a8a9adde914f85d48658e0f9b243d9aacfd2528c6c1eac7461e33c5.webp", color: "bg-blue-50", section: "cleaning" },
  { id: "candles-air-fresheners", name: "الشموع ومعطرات الجو", nameEn: "Candles & Air Fresheners", icon: "🌸", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/f91645789cd503d324b9693e01c0f3e14384dca1421eedb6e76cafe97fc4336d.webp", color: "bg-amber-50", section: "cleaning" },
  { id: "garbage-bags", name: "أكياس قمامة", nameEn: "Garbage Bags", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/0921c904a592673d9ea01dc26274c28db46998f97ee0e0e5a9cdd109ac8f4904.webp", color: "bg-pink-50", section: "cleaning" },
  { id: "tissues", name: "مناديل", nameEn: "Tissues", icon: "🧻", image: "https://img.ananinja.com/media/ninja-catalog-42/ee3144d8-d60e-473c-9751-f289db4c3216_TiisuesandRolesAR.jpg?w=400&q=75", color: "bg-purple-50", section: "cleaning" },
  { id: "insect-pest-control", name: "مكافحة الحشرات", nameEn: "Insect & Pest Control", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/a6ea1ea1fa74bf42e466e0456f216627e09d59f27fe563eeb4dd7db295a2642a.webp", color: "bg-teal-50", section: "cleaning" },
  // المنزل والحديقة
  { id: "kitchen-dining", name: "المطبخ وطاولة الطعام", nameEn: "Kitchen & Dining", icon: "🍳", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/407266ecb2d497022dd9007463eb027092937d3f2ae944e3b5e96a8705dd9df1.webp", color: "bg-cyan-50", section: "home" },
  { id: "diy-electricals", name: "الكهربائيات وأدوات افعلها بنفسك (DIY)", nameEn: "DIY & Electricals", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/c1336a9b3b7b28a24bd9d55a1a4f148dbfb48446298cad24f87cd9744b92c303.webp", color: "bg-rose-50", section: "home" },
  { id: "camping-barbeques-grills", name: "التخييم، الشواء وغيرها", nameEn: "Camping, Barbeques & Grills", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/336fd7b42ee9505a27b50ceac7edf0d40264d9ec65d5213814673ac849396016.webp", color: "bg-gray-50", section: "home" },
  { id: "party-supplies", name: "لوازم الحفلات", nameEn: "Party Supplies", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/8f1a5974a8b80d329b8c1c6d70453ad116c640b9cd8076ff39aef7254022c51d.webp", color: "bg-green-50", section: "home" },
  { id: "bathroom-laundry", name: "الحمام والغسيل", nameEn: "Bathroom & Laundry", icon: "👕", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/3e15bf890aa2895a9ec49b0482f30f062e12cd32cd0f2d2df5fc6a29688150b5.webp", color: "bg-yellow-50", section: "home" },
  { id: "laundry-steaming-ironing", name: "الحمام والغسيل", nameEn: "Laundry, Steaming & Ironing", icon: "👕", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/3e15bf890aa2895a9ec49b0482f30f062e12cd32cd0f2d2df5fc6a29688150b5.webp", color: "bg-orange-50", section: "home" },
  { id: "gardening-equipment", name: "معدات الحدائق", nameEn: "Gardening Equipment", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/66f1b96427e60a57ff86d40602a633d9cc412ced20b7807c10b618f466b51089.webp", color: "bg-red-50", section: "home" },
  { id: "garden-furniture-decor", name: "ديكور أثاث الحديقة", nameEn: "Garden Furniture & Decor", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/88abdd0ca59450353ed76e1252f400dee59adc0d73a81b2fe0bc67937af3dcdc.webp", color: "bg-blue-50", section: "home" },
  { id: "bedroom", name: "غرفة النوم", nameEn: "Bedroom", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/3e1d1ff21156117598b0986e7e416ab45c416365db20ea889819418ac1048595.webp", color: "bg-amber-50", section: "home" },
  { id: "home-storage", name: "مستلزمات التخزين المنزلية", nameEn: "Home Storage", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/338a3c9ec16706510407bc524162f48450140a6c2513a2f7def550c1aa83ac4e.webp", color: "bg-pink-50", section: "home" },
  // منتجات الأطفال
  { id: "changing-bathing", name: "مستلزمات الاستحمام وغيرها", nameEn: "Changing & Bathing", icon: "🚿", image: "https://img.ananinja.com/media/ninja-catalog-42/f4dfe70d-901f-4bbb-9c60-135215c97891_Baby-Diapers-ar.png?w=400&q=75", color: "bg-purple-50", section: "baby" },
  { id: "milk-food-juices", name: "منتجات الحليب والعصير", nameEn: "Milk, Food & Juices", icon: "🧃", image: "https://img.ananinja.com/media/ninja-catalog-42/072fc644-eae7-40f6-a0d7-a51144899c24_Baby-Milk-ar.png?w=400&q=75", color: "bg-teal-50", section: "baby" },
  { id: "baby-healthcare", name: "منتجات عناية الطفل", nameEn: "Baby Healthcare", icon: "👶", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/96edf9f9e9c3996cb779cd7e3e9a8036a2634dd96b5c1c9c66ca3385762cbbf3.webp", color: "bg-cyan-50", section: "baby" },
  { id: "feeding-accessories", name: "مستلزمات الإرضاع", nameEn: "Feeding Accessories", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/a1960ec9fdc315524282d48c4173a703b52fe562a96e5a35fe3205c233651f94.webp", color: "bg-rose-50", section: "baby" },
  { id: "nursery-safety", name: "مستلزمات الحضانة", nameEn: "Nursery & Safety", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/f4b9cecf741109b7dbc44e6badef7d3ec04ff2827422af3be5481350cdd1b5c8.webp", color: "bg-gray-50", section: "baby" },
  { id: "baby-travelling", name: "مستلزمات سفر الأطفال", nameEn: "Baby Travelling", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/3aa2d080a7e2062cc0bcb030f8bd16c3c107b58fb942b8c70289b52988415dd1.webp", color: "bg-green-50", section: "baby" },
  // الحيوانات الأليفة
  { id: "pets-food", name: "أطعمة الحيوانات الأليفة", nameEn: "Pets Food", icon: "🐾", image: "https://img.ananinja.com/media/ninja-catalog-42/19bf746a-cb20-4c7f-aea2-e2e0cd1b3a97_CATSAR.png.png?w=400&q=75", color: "bg-yellow-50", section: "pets" },
  { id: "pet-care", name: "عناية الحيوانات الأليفة", nameEn: "Pet Care", icon: "🐾", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/1215ac851587cd030e9d7d2a1606d37b828bb3f0b9ca0502c74afc9333904fde.webp", color: "bg-orange-50", section: "pets" },
  { id: "pet-accessories-toys", name: "ألعاب ومستلزمات الحيوانات الأليفة", nameEn: "Pet Accessories & Toys", icon: "🐾", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/8566c557c71da909e597fc8ccddc18ac0eb9b21819ae6558b0c717410896a21a.webp", color: "bg-red-50", section: "pets" },
  // القرطاسية والمدرسة
  { id: "writing-supplies", name: "مستلزمات الكتابة", nameEn: "Writing Supplies", icon: "🛒", image: "https://img.ananinja.com/media/ninja-catalog-42/f8ee3cae-d758-4379-b6cd-d19883bc740f_WhatsAppImage2025-08-03at11.25.58AM.jpeg?w=400&q=75", color: "bg-blue-50", section: "stationery" },
  { id: "school-bags-pencil-cases", name: "حقائب مدرسية و حافضات الأقلام", nameEn: "School Bags & Pencil Cases", icon: "✏️", image: "https://img.ananinja.com/media/ninja-catalog-42/427bdb1b-3885-4dd4-8cf7-3e4cafabbcd2_WhatsAppImage2025-08-03at11.24.50AM.jpeg?w=400&q=75", color: "bg-amber-50", section: "stationery" },
  { id: "paper-supplies", name: "مستلزمات الورق", nameEn: "Paper Supplies", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/6c2bc13a584b46df4ece2d72ac6f30e1bee9dafafcd1e85e83487e4cda06c098.webp", color: "bg-pink-50", section: "stationery" },
  { id: "stationery-drawer", name: "القرطاسية", nameEn: "Stationery Drawer", icon: "📎", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/0594ea89623b1d740c33b86ae168aa3050b402a43bf5cba0f1657514065ff35f.webp", color: "bg-purple-50", section: "stationery" },
  { id: "gifting-party-supplies", name: "مستلزمات الحفلة والهدايا", nameEn: "Gifting & Party Supplies", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/6ee4a914ab9f69f28775806cc3e9df6bc848c8f3c9bbd3dbe806b8374d13987b.webp", color: "bg-teal-50", section: "stationery" },
  { id: "coloring-materials", name: "أدوات تلوين", nameEn: "Coloring Materials", icon: "🛒", image: "https://img.ananinja.com/media/ninja-catalog-42/e7be261c-7606-4fea-91c4-394e40cb3170_WhatsAppImage2025-08-03at11.26.42AM(1).jpeg?w=400&q=75", color: "bg-cyan-50", section: "stationery" },
  { id: "filing-materials", name: "أدوات حشو", nameEn: "Filing Materials", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/0ff91276c952abc45db65433d079e668fa8d040bc62fde6bfd581bbd6e2a8f4e.webp", color: "bg-rose-50", section: "stationery" },
  { id: "calculators-dictionaries", name: "ألات حاسبة وقواميس", nameEn: "Calculators & Dictionaries", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/241c9079318da5b2c7a1a850460daac55415df44605bfa3253604b6208ed5112.webp", color: "bg-gray-50", section: "stationery" },
  { id: "glue-adhesive-roll", name: "غراء ولاصق وغيرها", nameEn: "Glue & Adhesive Roll", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/dfa3f005a09ff3df8705b4aacf6f7f6a0c48f79315a223b5266cc2332e8d0af2.webp", color: "bg-green-50", section: "stationery" },
  // الألعاب
  { id: "vehicles-remote-control-play", name: "مركبات تحكم عن بعد وغيرها", nameEn: "Vehicles & Remote Control Play", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/efd88f0a031db7b5d55fd3a3c706f166d4c73276a1c6996e3b742e9062ee74d4.webp", color: "bg-yellow-50", section: "toys" },
  { id: "action-figures-playsets", name: "مجسمات وأطقم ألعاب", nameEn: "Action Figures & Playsets", icon: "🧸", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/396fa746c2dc463bb972f4552187d43f8ae47fbc8f15dcf04479f4281d2c9d80.webp", color: "bg-orange-50", section: "toys" },
  { id: "outdoor-activities", name: "النشاطات الخارجية", nameEn: "Outdoor Activities", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/79dfc9ade4a942d601f6d3a7cfa9b405d888f2d7fdb164ff2b1cadb4f10368ab.webp", color: "bg-red-50", section: "toys" },
  { id: "arts-crafts-music", name: "فنون، الموسيقا وغيرها", nameEn: "Arts, Crafts & Music", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/1573d34131536b2cf85eb0e6a247a28cf71ba65dd567c506e54bd03e2044cd5e.webp", color: "bg-blue-50", section: "toys" },
  { id: "dolls-accessories", name: "الدمى ومستلزماتها", nameEn: "Dolls & Accessories", icon: "👧", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/e438060207e5b37a9ec0ce641994024a38ee2a951e095d29b2c1945e239b3c35.webp", color: "bg-amber-50", section: "toys" },
  { id: "board-games-cards-puzzles", name: "ألعاب ورقية وغيرها", nameEn: "Board Games, Cards & Puzzles", icon: "🧸", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/ef9f9adece218267a259454b28219abdef5143bb2595bf7c10f6504301bc0463.webp", color: "bg-pink-50", section: "toys" },
  { id: "pretend-play-costumes", name: "ملابس تنكرية", nameEn: "Pretend Play & Costumes", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/3b8eceac17baecc70cb59ed78ca446f9dfcd7b83b29042e2c2d578ab1f43ea05.webp", color: "bg-purple-50", section: "toys" },
  { id: "bicycles-scooters-ride-ons", name: "دراجات هوائية، سكوتر وغيرها", nameEn: "Bicycles, Scooters, Ride Ons", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/a62a281133882ff74cb55261819cbfed42c69c1820070f39a829dafe93488a6d.webp", color: "bg-teal-50", section: "toys" },
  { id: "baby-toys", name: "ألعاب الأطفال", nameEn: "Baby Toys", icon: "🧸", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/7478915523b8a77c7a573398e6637a24cb56d19b3d809947d11c8f1619c97775.webp", color: "bg-cyan-50", section: "toys" },
  { id: "construction-building-toys", name: "ألعاب بناء وغيرها", nameEn: "Construction & Building Toys", icon: "🧸", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/96b07b2c6864105c690180b7360c33be1ef230b9a1225bc5c87c963535abf406.webp", color: "bg-rose-50", section: "toys" },
  { id: "books-educational-games", name: "ألعاب تعليمية وكتب", nameEn: "Books & Educational Games", icon: "🧸", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/101c72bb228f83228b17acd46a8f99e068f237ac98741453eb3e59d49fed1af7.webp", color: "bg-gray-50", section: "toys" },
  // الرياضة والصحة
  { id: "healthcare-nutrition", name: "الحمية الغذائية والصحية", nameEn: "Healthcare & Nutrition", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/d9b74ee253040b6f26ce8f05f84ca3374690bffb83d0789a32a6b12e2f893ca2.webp", color: "bg-green-50", section: "health" },
  { id: "health-fitness-devices", name: "منتجات الرياضة و اللياقة البدنية", nameEn: "Health & Fitness Devices", icon: "💪", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/646c987750e22bdfb6467004ad9dd1dd678db1bcb447c5ce7b92ca244d2bc743.webp", color: "bg-yellow-50", section: "health" },
  // الإلكترونيات والأجهزة
  { id: "small-appliances", name: "أجهزة منزلية صغيرة", nameEn: "Small Appliances", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/105ecd3831f56ffd3ceb898364011de044aa38e0f9c1b1de4aa9a1e2db1d8e69.webp", color: "bg-orange-50", section: "electronics" },
  { id: "laptops-pcs", name: "أجهزة الكمبيوتر المحمولة وأجهزة الكمبيوتر", nameEn: "Laptops, PCs", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/268ff57a94f095bb8f0a840a74c0796cb439b6d536420634c2114cedafe193e7.webp", color: "bg-red-50", section: "electronics" },
  { id: "batteries-power", name: "البطاريات ومولدات الطاقة", nameEn: "Batteries & Power", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/d4c7a2c919ccf5a8e437b24b64b6a0142f975f38a31deefb0d0cb45b73a81eb3.webp", color: "bg-blue-50", section: "electronics" },
  { id: "home-cinema-audio", name: "أحهزة السنيما المنزلية المرئية والسمعية", nameEn: "Home Cinema & Audio", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/6b56208615146fa2a184ef571f8594c914a591362bdf3b5e625dcc2134555c38.webp", color: "bg-amber-50", section: "electronics" },
  { id: "tvs-projectors", name: "أجهزة التلفاز وأجهزة العرض", nameEn: "TVs & Projectors", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/a5d77464b1aec09935765dadf87b08bf774c022be0fe20e02fd00582aaf14c35.webp", color: "bg-pink-50", section: "electronics" },
  { id: "video-games-consoles", name: "ألعاب الفيديو", nameEn: "Video Games & Consoles", icon: "🧸", image: "https://img.ananinja.com/media/ninja-catalog-42/d1f5f30c-37b0-4151-8ff6-e1ed93a9c1e4_VideogamesAR.jpg?w=400&q=75", color: "bg-purple-50", section: "electronics" },
  { id: "home-phones", name: "هواتف منزلية", nameEn: "Home Phones", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/97139cae6679662df9f8935b659e5f9beec8dec33c268edad4f7105c6b307280.webp", color: "bg-teal-50", section: "electronics" },
  // الجوالات والإكسسوارات
  { id: "mobile-accessories", name: "اكسسوارات الموبايل", nameEn: "Mobile Accessories", icon: "🛒", image: "https://img.ananinja.com/media/ninja-catalog-42/27ad7a9e-088f-4b0e-9be0-c571e5c9acc1_3213213d-Recovered.png?w=400&q=75", color: "bg-cyan-50", section: "mobiles" },
  { id: "smartphones-wearables", name: "الهواتف المحمولة وأجهزة اليد الذكية", nameEn: "Smartphones & Wearables", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/063217b1f7066226669e081596f9884442b48b77e7f5f14ec2e1568204fc352d.webp", color: "bg-rose-50", section: "mobiles" },
  { id: "tablets-e-readers", name: "التابلت والقوارئ الرقمية", nameEn: "Tablets & E-Readers", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/f2ebe141976e7c009b9a723a63b7019af41696be0c04342b64b98356735db9c5.webp", color: "bg-gray-50", section: "mobiles" },
  // السيارات
  { id: "car-accessories-cleaning", name: "مستلزمات واكسسوارات السيارات", nameEn: "Car Accessories & Cleaning", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/a75cc1a820bc794c4630a86b603ba15a9a0cd721e13b8e4dd7b8b2af4a18daa0.webp", color: "bg-green-50", section: "auto" },
  // الأزياء والإكسسوارات
  { id: "luggage-travel", name: "حقائب السفر", nameEn: "Luggage & Travel", icon: "🎒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/bf8449964de49cddeb692fc55500216ea6baeccfe44f8f9df7190d7f256bba1f.webp", color: "bg-yellow-50", section: "fashion" },
  { id: "women", name: "نسائي", nameEn: "Women", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/a9af4bcdb706ce1a159f655e5a4f8f7e24368625becdbbb8bfc5b78d963a37e1.webp", color: "bg-orange-50", section: "fashion" },
  { id: "men", name: "الرجال", nameEn: "Men", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/b01f3763cc4df177e23940c677f4ca80023f3f2400ff33fd6f7ebe88c7b9c0b6.webp", color: "bg-red-50", section: "fashion" },
  { id: "baby-wear", name: "لباس رضيع", nameEn: "Baby Wear", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/ad57b831dcb5d0170e2f45c360bda8c1115854691c5361fd16a968a04e57a4eb.webp", color: "bg-blue-50", section: "fashion" },
  // غير غذائي
  { id: "living-room-home-decor", name: "ديكور المنزل وغرفة المعيشة", nameEn: "Living Room & Home Decor", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/6cf78f5804f01b2ca7b3b187dac1e88f10b81956091230b6a40e93e4bf28badb.webp", color: "bg-amber-50", section: "nonfood" },
  { id: "kitchen-toilet-rolls", name: "ورق حمام ومطبخ", nameEn: "Kitchen & Toilet Rolls", icon: "🍳", image: "https://img.ananinja.com/media/ninja-catalog-42/ee3144d8-d60e-473c-9751-f289db4c3216_TiisuesandRolesAR.jpg?w=400&q=75", color: "bg-pink-50", section: "nonfood" },
  { id: "cleaning-household", name: "تنظيف المنزل", nameEn: "Cleaning & Household", icon: "🧹", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/2f967c019c4b7e36be1cf6254aa9503acfc8afeb84217a3d77b9ffc42bc41adc.webp", color: "bg-purple-50", section: "nonfood" },
  // متفرقات
  { id: "flowers-plants", name: "نباتات وأزهار", nameEn: "Flowers & Plants", icon: "🛒", image: "https://pub-424a70e731134c5ea35a180514df542e.r2.dev/products/carrefour/e4b00e46d756f14d9ef48eacd20b24941dc69cdb281642e3294c3fad52f16ac8.webp", color: "bg-teal-50", section: "misc" },
];

export const products: Product[] = [];
