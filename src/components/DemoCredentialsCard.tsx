import { DEMO_ACCOUNTS } from "@/config/demo-accounts";

type DemoKey = keyof typeof DEMO_ACCOUNTS;

interface DemoCredentialsCardProps {
  account: DemoKey;
  onFill: (email: string, password: string) => void;
}

/** Shows demo login credentials and one-click fill for client trials. */
export const DemoCredentialsCard = ({ account, onFill }: DemoCredentialsCardProps) => {
  const demo = DEMO_ACCOUNTS[account];

  return (
    <div className="mt-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-3 text-sm" dir="rtl">
      <p className="font-semibold text-primary mb-2">حساب تجريبي للمعاينة</p>
      <div className="space-y-1 text-muted-foreground" dir="ltr">
        <p>
          <span className="text-foreground/70">Email:</span> {demo.email}
        </p>
        <p>
          <span className="text-foreground/70">Password:</span> {demo.password}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onFill(demo.email, demo.password)}
        className="mt-3 w-full rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold py-2 transition-colors"
      >
        تعبئة البيانات تلقائياً
      </button>
    </div>
  );
};
