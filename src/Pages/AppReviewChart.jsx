import React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppReviewChart = ({ findApp }) => {
  const { ratings } = findApp;

  return (
    <div className="mx-auto border-b border-gray-300 pb-10 mt-10">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          layout="vertical"
          data={ratings}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" barSize={32} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppReviewChart;
