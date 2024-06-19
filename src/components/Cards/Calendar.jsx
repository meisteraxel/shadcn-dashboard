"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveTimeRange } from "@nivo/calendar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTimeRange = ({ data }) => {
  return (
    <ResponsiveTimeRange
      data={data}
      from="2018-01-01"
      to="2018-12-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
    />
  );
};

function Calendar() {
  const dataArray = [
    {
      value: 27,
      day: "2018-04-03",
    },
    {
      value: 108,
      day: "2018-06-17",
    },
    {
      value: 41,
      day: "2018-04-22",
    },
    {
      value: 154,
      day: "2018-04-05",
    },
    {
      value: 286,
      day: "2018-07-07",
    },
    {
      value: 86,
      day: "2018-07-09",
    },
    {
      value: 335,
      day: "2018-05-05",
    },
    {
      value: 364,
      day: "2018-07-23",
    },
    {
      value: 357,
      day: "2018-07-08",
    },
    {
      value: 72,
      day: "2018-05-29",
    },
    {
      value: 11,
      day: "2018-07-01",
    },
    {
      value: 210,
      day: "2018-04-09",
    },
    {
      value: 210,
      day: "2018-05-23",
    },
    {
      value: 383,
      day: "2018-06-19",
    },
    {
      value: 375,
      day: "2018-08-08",
    },
    {
      value: 8,
      day: "2018-05-25",
    },
    {
      value: 320,
      day: "2018-06-03",
    },
    {
      value: 129,
      day: "2018-05-26",
    },
    {
      value: 315,
      day: "2018-04-15",
    },
    {
      value: 204,
      day: "2018-07-14",
    },
    {
      value: 248,
      day: "2018-04-17",
    },
    {
      value: 189,
      day: "2018-06-27",
    },
    {
      value: 71,
      day: "2018-05-03",
    },
    {
      value: 296,
      day: "2018-04-04",
    },
    {
      value: 129,
      day: "2018-05-11",
    },
    {
      value: 23,
      day: "2018-06-26",
    },
    {
      value: 169,
      day: "2018-08-05",
    },
    {
      value: 53,
      day: "2018-04-24",
    },
    {
      value: 308,
      day: "2018-04-26",
    },
    {
      value: 226,
      day: "2018-07-03",
    },
    {
      value: 355,
      day: "2018-07-21",
    },
    {
      value: 48,
      day: "2018-07-15",
    },
    {
      value: 136,
      day: "2018-05-31",
    },
    {
      value: 349,
      day: "2018-05-08",
    },
    {
      value: 66,
      day: "2018-05-12",
    },
    {
      value: 16,
      day: "2018-08-01",
    },
    {
      value: 58,
      day: "2018-06-05",
    },
    {
      value: 250,
      day: "2018-07-18",
    },
    {
      value: 99,
      day: "2018-05-10",
    },
    {
      value: 191,
      day: "2018-05-24",
    },
    {
      value: 395,
      day: "2018-07-13",
    },
    {
      value: 396,
      day: "2018-05-07",
    },
    {
      value: 390,
      day: "2018-07-12",
    },
    {
      value: 80,
      day: "2018-06-11",
    },
    {
      value: 384,
      day: "2018-07-25",
    },
    {
      value: 330,
      day: "2018-04-01",
    },
    {
      value: 103,
      day: "2018-06-18",
    },
    {
      value: 383,
      day: "2018-05-21",
    },
    {
      value: 352,
      day: "2018-05-28",
    },
    {
      value: 363,
      day: "2018-07-27",
    },
    {
      value: 189,
      day: "2018-06-30",
    },
    {
      value: 91,
      day: "2018-07-24",
    },
    {
      value: 223,
      day: "2018-07-06",
    },
    {
      value: 392,
      day: "2018-04-06",
    },
    {
      value: 348,
      day: "2018-04-20",
    },
    {
      value: 288,
      day: "2018-05-20",
    },
    {
      value: 282,
      day: "2018-04-19",
    },
    {
      value: 210,
      day: "2018-05-06",
    },
    {
      value: 56,
      day: "2018-05-13",
    },
    {
      value: 68,
      day: "2018-04-02",
    },
    {
      value: 153,
      day: "2018-04-13",
    },
    {
      value: 334,
      day: "2018-04-28",
    },
    {
      value: 380,
      day: "2018-05-27",
    },
    {
      value: 159,
      day: "2018-04-08",
    },
    {
      value: 27,
      day: "2018-07-26",
    },
    {
      value: 289,
      day: "2018-04-21",
    },
    {
      value: 252,
      day: "2018-04-14",
    },
    {
      value: 76,
      day: "2018-05-04",
    },
    {
      value: 21,
      day: "2018-05-19",
    },
    {
      value: 139,
      day: "2018-08-11",
    },
    {
      value: 344,
      day: "2018-04-16",
    },
    {
      value: 310,
      day: "2018-08-07",
    },
    {
      value: 216,
      day: "2018-04-23",
    },
    {
      value: 235,
      day: "2018-08-03",
    },
    {
      value: 298,
      day: "2018-08-02",
    },
    {
      value: 284,
      day: "2018-05-09",
    },
    {
      value: 164,
      day: "2018-06-12",
    },
    {
      value: 73,
      day: "2018-08-10",
    },
    {
      value: 372,
      day: "2018-08-06",
    },
    {
      value: 188,
      day: "2018-06-29",
    },
    {
      value: 151,
      day: "2018-07-10",
    },
    {
      value: 160,
      day: "2018-05-30",
    },
    {
      value: 390,
      day: "2018-05-18",
    },
    {
      value: 38,
      day: "2018-07-19",
    },
    {
      value: 50,
      day: "2018-07-28",
    },
    {
      value: 43,
      day: "2018-04-10",
    },
    {
      value: 141,
      day: "2018-05-22",
    },
    {
      value: 30,
      day: "2018-06-02",
    },
    {
      value: 94,
      day: "2018-06-10",
    },
    {
      value: 238,
      day: "2018-06-28",
    },
    {
      value: 228,
      day: "2018-04-07",
    },
    {
      value: 285,
      day: "2018-07-17",
    },
    {
      value: 335,
      day: "2018-06-04",
    },
    {
      value: 253,
      day: "2018-07-22",
    },
    {
      value: 271,
      day: "2018-06-20",
    },
    {
      value: 325,
      day: "2018-06-08",
    },
    {
      value: 284,
      day: "2018-08-09",
    },
    {
      value: 130,
      day: "2018-06-16",
    },
    {
      value: 77,
      day: "2018-07-05",
    },
    {
      value: 382,
      day: "2018-04-18",
    },
    {
      value: 90,
      day: "2018-06-14",
    },
    {
      value: 229,
      day: "2018-07-11",
    },
    {
      value: 165,
      day: "2018-06-01",
    },
    {
      value: 104,
      day: "2018-07-20",
    },
    {
      value: 4,
      day: "2018-05-15",
    },
    {
      value: 236,
      day: "2018-06-25",
    },
    {
      value: 106,
      day: "2018-05-14",
    },
    {
      value: 150,
      day: "2018-06-24",
    },
    {
      value: 110,
      day: "2018-04-30",
    },
    {
      value: 182,
      day: "2018-07-16",
    },
    {
      value: 359,
      day: "2018-07-04",
    },
    {
      value: 5,
      day: "2018-04-12",
    },
    {
      value: 325,
      day: "2018-06-07",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the numbers of this year.</CardDescription>
      </CardHeader>
      <CardContent
        className="flex items-center w-full"
        style={{ height: "100px" }}
      >
        <MyResponsiveTimeRange data={dataArray} />
      </CardContent>
    </Card>
  );
}

export default Calendar;
