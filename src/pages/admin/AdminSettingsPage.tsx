import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Settings, Store, Bell, Shield, Truck, Save, Loader2, MapPin, Users } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import AdminUsersSection from "@/components/admin/AdminUsersSection";

// [[CLIENT_CITY_EN]] postal codes
const KHAMIS_POSTAL_CODES = [
  { code: "61961", area: "[[CLIENT_CITY_AR]] - المركز" },
  { code: "61962", area: "[[CLIENT_CITY_AR]] - الراقي" },
  { code: "61963", area: "[[CLIENT_CITY_AR]] - الموسى" },
  { code: "61964", area: "[[CLIENT_CITY_AR]] - المنتزه" },
  { code: "61965", area: "[[CLIENT_CITY_AR]] - الضيافة" },
  { code: "61966", area: "[[CLIENT_CITY_AR]] - الشرفية" },
  { code: "61967", area: "[[CLIENT_CITY_AR]] - النسيم" },
  { code: "61968", area: "[[CLIENT_CITY_AR]] - الحزام" },
  { code: "61969", area: "[[CLIENT_CITY_AR]] - العزيزية" },
  { code: "61971", area: "[[CLIENT_CITY_AR]] - الجامعة" },
  { code: "61972", area: "[[CLIENT_CITY_AR]] - المطار" },
  { code: "61973", area: "[[CLIENT_CITY_AR]] - الخالدية" },
  { code: "61974", area: "[[CLIENT_CITY_AR]] - الريان" },
  { code: "61975", area: "[[CLIENT_CITY_AR]] - التحلية" },
  { code: "61976", area: "[[CLIENT_CITY_AR]] - الورود" },
  { code: "61977", area: "[[CLIENT_CITY_AR]] - الرصراص" },
  { code: "61978", area: "[[CLIENT_CITY_AR]] - الجرف" },
  { code: "62461", area: "[[CLIENT_CITY_AR]] - تندحة" },
  { code: "62462", area: "[[CLIENT_CITY_AR]] - الواديين" },
];

type SettingsMap = Record<string, any>;

const useSetting = (key: string, defaultValue: any) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["store-settings", key],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("store_settings")
        .select("value")
        .eq("key", key)
        .maybeSingle();
      if (error) throw error;
      return data?.value ?? defaultValue;
    },
  });

  const mutation = useMutation({
    mutationFn: async (value: any) => {
      const { error } = await supabase
        .from("store_settings")
        .upsert({ key, value }, { onConflict: "key" });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["store-settings", key] });
      toast.success("تم الحفظ بنجاح");
    },
    onError: () => toast.error("حدث خطأ أثناء الحفظ"),
  });

  return { data: data ?? defaultValue, isLoading, save: mutation.mutate, saving: mutation.isPending };
};

// ─── Store Info Section ───
const StoreInfoSection = () => {
  const { data, isLoading, save, saving } = useSetting("store_info", {
    name: "تطبيق اسواق تجريبي",
    phone: "[[CLIENT_PHONE]]",
    email: "[[CLIENT_EMAIL]]",
    address: "[[CLIENT_ADDRESS_AR]]",
    cr_number: "[[CLIENT_CR_NUMBER]]",
    description: "",
  });
  const [form, setForm] = useState<any>(null);
  const d = form ?? data;

  if (isLoading) return <Loader2 className="h-6 w-6 animate-spin mx-auto" />;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div><Label>اسم المتجر</Label><Input value={d.name} onChange={e => setForm({ ...d, name: e.target.value })} /></div>
        <div><Label>رقم الجوال</Label><Input value={d.phone} onChange={e => setForm({ ...d, phone: e.target.value })} dir="ltr" /></div>
        <div><Label>البريد الإلكتروني</Label><Input value={d.email} onChange={e => setForm({ ...d, email: e.target.value })} dir="ltr" /></div>
        <div><Label>العنوان</Label><Input value={d.address} onChange={e => setForm({ ...d, address: e.target.value })} /></div>
        <div><Label>رقم السجل التجاري</Label><Input value={d.cr_number} onChange={e => setForm({ ...d, cr_number: e.target.value })} dir="ltr" /></div>
      </div>
      <div><Label>وصف المتجر</Label><Textarea value={d.description} onChange={e => setForm({ ...d, description: e.target.value })} rows={3} /></div>
      <Button onClick={() => save(form ?? d)} disabled={saving}>
        {saving ? <Loader2 className="h-4 w-4 animate-spin ml-2" /> : <Save className="h-4 w-4 ml-2" />}
        حفظ
      </Button>
    </div>
  );
};

// ─── Notifications Section ───
const NotificationsSection = () => {
  const { data, isLoading, save, saving } = useSetting("notifications", {
    order_new: true,
    order_status: true,
    driver_assigned: true,
    low_stock: true,
    new_complaint: true,
    sound_enabled: true,
  });
  const [form, setForm] = useState<any>(null);
  const d = form ?? data;

  if (isLoading) return <Loader2 className="h-6 w-6 animate-spin mx-auto" />;

  const items = [
    { key: "order_new", label: "طلب جديد" },
    { key: "order_status", label: "تغيير حالة الطلب" },
    { key: "driver_assigned", label: "تعيين مندوب" },
    { key: "low_stock", label: "نفاد المخزون" },
    { key: "new_complaint", label: "شكوى جديدة" },
    { key: "sound_enabled", label: "تفعيل الصوت" },
  ];

  return (
    <div className="space-y-4">
      {items.map(item => (
        <div key={item.key} className="flex items-center justify-between py-2 border-b last:border-0">
          <span className="text-sm">{item.label}</span>
          <Switch checked={d[item.key]} onCheckedChange={v => setForm({ ...d, [item.key]: v })} />
        </div>
      ))}
      <Button onClick={() => save(form ?? d)} disabled={saving}>
        {saving ? <Loader2 className="h-4 w-4 animate-spin ml-2" /> : <Save className="h-4 w-4 ml-2" />}
        حفظ
      </Button>
    </div>
  );
};

// ─── Security Section ───
const SecuritySection = () => {
  const { data, isLoading, save, saving } = useSetting("security", {
    require_email_verification: true,
    max_login_attempts: 5,
    session_timeout_hours: 24,
    allow_guest_checkout: false,
  });
  const [form, setForm] = useState<any>(null);
  const d = form ?? data;

  if (isLoading) return <Loader2 className="h-6 w-6 animate-spin mx-auto" />;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between py-2 border-b">
        <span className="text-sm">تأكيد البريد الإلكتروني عند التسجيل</span>
        <Switch checked={d.require_email_verification} onCheckedChange={v => setForm({ ...d, require_email_verification: v })} />
      </div>
      <div className="flex items-center justify-between py-2 border-b">
        <span className="text-sm">السماح بالشراء بدون حساب</span>
        <Switch checked={d.allow_guest_checkout} onCheckedChange={v => setForm({ ...d, allow_guest_checkout: v })} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div><Label>عدد محاولات الدخول القصوى</Label><Input type="number" value={d.max_login_attempts} onChange={e => setForm({ ...d, max_login_attempts: Number(e.target.value) })} /></div>
        <div><Label>مدة الجلسة (ساعات)</Label><Input type="number" value={d.session_timeout_hours} onChange={e => setForm({ ...d, session_timeout_hours: Number(e.target.value) })} /></div>
      </div>
      <Button onClick={() => save(form ?? d)} disabled={saving}>
        {saving ? <Loader2 className="h-4 w-4 animate-spin ml-2" /> : <Save className="h-4 w-4 ml-2" />}
        حفظ
      </Button>
    </div>
  );
};

// ─── Delivery Section ───
const DeliverySection = () => {
  const { data, isLoading, save, saving } = useSetting("delivery", {
    delivery_fee: 10,
    free_delivery_threshold: 100,
    min_order: 20,
    work_start: "08:00",
    work_end: "23:00",
    active_postal_codes: KHAMIS_POSTAL_CODES.map(p => p.code),
  });
  const [form, setForm] = useState<any>(null);
  const d = form ?? data;

  if (isLoading) return <Loader2 className="h-6 w-6 animate-spin mx-auto" />;

  const togglePostalCode = (code: string) => {
    const current: string[] = d.active_postal_codes || [];
    const updated = current.includes(code)
      ? current.filter((c: string) => c !== code)
      : [...current, code];
    setForm({ ...d, active_postal_codes: updated });
  };

  const allActive = (d.active_postal_codes || []).length === KHAMIS_POSTAL_CODES.length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <div><Label>رسوم التوصيل (ر.س)</Label><Input type="number" value={d.delivery_fee} onChange={e => setForm({ ...d, delivery_fee: Number(e.target.value) })} /></div>
        <div><Label>توصيل مجاني فوق (ر.س)</Label><Input type="number" value={d.free_delivery_threshold} onChange={e => setForm({ ...d, free_delivery_threshold: Number(e.target.value) })} /></div>
        <div><Label>أقل طلب (ر.س)</Label><Input type="number" value={d.min_order} onChange={e => setForm({ ...d, min_order: Number(e.target.value) })} /></div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div><Label>بداية الدوام</Label><Input type="time" value={d.work_start} onChange={e => setForm({ ...d, work_start: e.target.value })} dir="ltr" /></div>
        <div><Label>نهاية الدوام</Label><Input type="time" value={d.work_end} onChange={e => setForm({ ...d, work_end: e.target.value })} dir="ltr" /></div>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <Label className="text-base font-semibold">نطاق الخدمة - الرموز البريدية</Label>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setForm({ ...d, active_postal_codes: allActive ? [] : KHAMIS_POSTAL_CODES.map(p => p.code) })}
          >
            {allActive ? "إلغاء الكل" : "تفعيل الكل"}
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-80 overflow-y-auto">
          {KHAMIS_POSTAL_CODES.map(pc => {
            const active = (d.active_postal_codes || []).includes(pc.code);
            return (
              <div
                key={pc.code}
                onClick={() => togglePostalCode(pc.code)}
                className={`flex items-center justify-between rounded-lg border p-2.5 cursor-pointer transition-colors ${
                  active ? "bg-primary/10 border-primary" : "bg-muted/30 border-transparent opacity-60"
                }`}
              >
                <div>
                  <p className="text-sm font-medium">{pc.area}</p>
                  <p className="text-xs text-muted-foreground" dir="ltr">{pc.code}</p>
                </div>
                <Switch checked={active} onCheckedChange={() => togglePostalCode(pc.code)} />
              </div>
            );
          })}
        </div>
      </div>

      <Button onClick={() => save(form ?? d)} disabled={saving}>
        {saving ? <Loader2 className="h-4 w-4 animate-spin ml-2" /> : <Save className="h-4 w-4 ml-2" />}
        حفظ
      </Button>
    </div>
  );
};

// ─── Main Page ───
const AdminSettingsPage = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    { key: "store", icon: Store, title: "بيانات المتجر", desc: "اسم المتجر، الشعار، بيانات التواصل", component: StoreInfoSection },
    { key: "users", icon: Users, title: "المشرفين والصلاحيات", desc: "إضافة مشرفين وإدارة صلاحياتهم", component: AdminUsersSection },
    { key: "notifications", icon: Bell, title: "الإشعارات", desc: "إعدادات التنبيهات والإشعارات الفورية", component: NotificationsSection },
    { key: "security", icon: Shield, title: "الأمان", desc: "إدارة الصلاحيات والمستخدمين", component: SecuritySection },
    { key: "delivery", icon: Truck, title: "إعدادات التوصيل", desc: "رسوم التوصيل، نطاق الخدمة، أوقات العمل", component: DeliverySection },
  ];

  return (
    <AdminLayout title="الإعدادات">
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map(s => (
          <Card
            key={s.key}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setOpenSection(s.key)}
          >
            <CardHeader className="flex flex-row items-center gap-3">
              <s.icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {sections.map(s => (
        <Dialog key={s.key} open={openSection === s.key} onOpenChange={open => !open && setOpenSection(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto" dir="rtl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <s.icon className="h-5 w-5 text-primary" />
                {s.title}
              </DialogTitle>
            </DialogHeader>
            <s.component />
          </DialogContent>
        </Dialog>
      ))}
    </AdminLayout>
  );
};

export default AdminSettingsPage;
