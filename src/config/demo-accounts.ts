/**
 * Demo accounts for client trial — visible on login screens.
 * Passwords are intentional demo credentials for the template.
 */
export const DEMO_ACCOUNTS = {
  customer: {
    email: "customer@tasweeo.demo",
    password: "Demo@123456",
    labelAr: "عميل",
    labelEn: "Customer",
    portalPath: "/auth",
  },
  driver: {
    email: "driver@tasweeo.demo",
    password: "Demo@123456",
    labelAr: "مندوب",
    labelEn: "Driver",
    portalPath: "/driver/login",
  },
  admin: {
    email: "admin@tasweeo.demo",
    password: "Demo@123456",
    labelAr: "لوحة التحكم",
    labelEn: "Admin",
    portalPath: "/admin/login",
  },
} as const;
