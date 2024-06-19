import General from "@/components/Cards/General";
import Calendar from "@/components/Cards/Calendar";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-2 gap-8">
        <General />
        <div className="grid gap-8">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card className="h-[300px]"></Card>
        <Card className="h-[300px]"></Card>
        <Card className="h-[300px]"></Card>
      </div>
    </div>
  );
}
