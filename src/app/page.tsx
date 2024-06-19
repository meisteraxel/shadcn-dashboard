import General from "@/components/Cards/General";
import Calendar from "@/components/Cards/Calendar";
import Lines from "@/components/Cards/Lines";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TableDemo } from "@/components/Cards/Table";

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
      <div className="grid grid-cols-3 gap-8 h-[300px] overflow-hidden">
        <Lines />
        <Card className="p-8 overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>Orders of this month</CardDescription>
          </CardHeader>
          <TableDemo />
        </Card>
        <Card className=""></Card>
      </div>
    </div>
  );
}
