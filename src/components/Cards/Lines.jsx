"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => {
  return (
    <ResponsiveLine
      data={data}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  );
};

export default function Lines() {
  const data = [
    {
      id: "japan",
      color: "hsl(138, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 68,
        },
        {
          x: "helicopter",
          y: 13,
        },
        {
          x: "boat",
          y: 159,
        },
        {
          x: "train",
          y: 49,
        },
        {
          x: "subway",
          y: 161,
        },
        {
          x: "bus",
          y: 59,
        },
        {
          x: "car",
          y: 173,
        },
        {
          x: "moto",
          y: 118,
        },
        {
          x: "bicycle",
          y: 278,
        },
        {
          x: "horse",
          y: 82,
        },
        {
          x: "skateboard",
          y: 168,
        },
        {
          x: "others",
          y: 296,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(324, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 12,
        },
        {
          x: "helicopter",
          y: 13,
        },
        {
          x: "boat",
          y: 11,
        },
        {
          x: "train",
          y: 208,
        },
        {
          x: "subway",
          y: 216,
        },
        {
          x: "bus",
          y: 250,
        },
        {
          x: "car",
          y: 50,
        },
        {
          x: "moto",
          y: 167,
        },
        {
          x: "bicycle",
          y: 79,
        },
        {
          x: "horse",
          y: 167,
        },
        {
          x: "skateboard",
          y: 113,
        },
        {
          x: "others",
          y: 97,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(72, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 153,
        },
        {
          x: "helicopter",
          y: 283,
        },
        {
          x: "boat",
          y: 17,
        },
        {
          x: "train",
          y: 56,
        },
        {
          x: "subway",
          y: 175,
        },
        {
          x: "bus",
          y: 73,
        },
        {
          x: "car",
          y: 284,
        },
        {
          x: "moto",
          y: 137,
        },
        {
          x: "bicycle",
          y: 201,
        },
        {
          x: "horse",
          y: 130,
        },
        {
          x: "skateboard",
          y: 232,
        },
        {
          x: "others",
          y: 24,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(162, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 175,
        },
        {
          x: "helicopter",
          y: 156,
        },
        {
          x: "boat",
          y: 226,
        },
        {
          x: "train",
          y: 26,
        },
        {
          x: "subway",
          y: 174,
        },
        {
          x: "bus",
          y: 256,
        },
        {
          x: "car",
          y: 48,
        },
        {
          x: "moto",
          y: 284,
        },
        {
          x: "bicycle",
          y: 298,
        },
        {
          x: "horse",
          y: 232,
        },
        {
          x: "skateboard",
          y: 232,
        },
        {
          x: "others",
          y: 261,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(240, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 284,
        },
        {
          x: "helicopter",
          y: 189,
        },
        {
          x: "boat",
          y: 1,
        },
        {
          x: "train",
          y: 39,
        },
        {
          x: "subway",
          y: 105,
        },
        {
          x: "bus",
          y: 230,
        },
        {
          x: "car",
          y: 54,
        },
        {
          x: "moto",
          y: 50,
        },
        {
          x: "bicycle",
          y: 276,
        },
        {
          x: "horse",
          y: 202,
        },
        {
          x: "skateboard",
          y: 182,
        },
        {
          x: "others",
          y: 283,
        },
      ],
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
        style={{ height: "264px" }}
      >
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
}
