import { Legend, RadialBar, RadialBarChart, Tooltip, Treemap } from "recharts";

function Statistics() {
  const data = [
    {
      name: "Assignment 1",
      mark: 57,
      pv: 2400,
      fill: "#8884d8",
    },
    {
      name: "Assignment 2",
      mark: 59,
      pv: 4567,
      fill: "#83a6ed",
    },
    {
      name: "Assignment 3",
      mark: 57,
      pv: 1398,
      fill: "#8dd1e1",
    },
    {
      name: "Assignment 4",
      mark: 52,
      pv: 9800,
      fill: "#82ca9d",
    },
    {
      name: "Assignment 5",
      mark: 43,
      pv: 3908,
      fill: "#a4de6c",
    },
    {
      name: "Assignment 6",
      mark: 60,
      pv: 4800,
      fill: "#d0ed57",
    },
    {
      name: "Assignment 7",
      mark: 55,
      pv: 4800,
      fill: "#ffc658",
    },
  ];

  return (
    <div className="container mx-auto px-16 pt-4 pb-10">
      <div className="bg-slate-100 py-16 rounded-lg">
        <h1 className="text-2xl font-semibold text-slate-800 text-center py-16">
          Statistics
        </h1>
      </div>
      <div className="my-10">
        <div className="flex items-center justify-center">
          <RadialBarChart
            width={600}
            height={300}
            innerRadius="20%"
            outerRadius="100%"
            data={data}
            startAngle={360}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#666", position: "insideStart" }}
              background
              clockWise={true}
              dataKey="mark"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="horizontal"
              verticalAlign="middle"
              align="left"
            />
            <Tooltip />
          </RadialBarChart>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
