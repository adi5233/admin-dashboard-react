import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Product Sold",
    },
  },
};

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthlyProductSold() {
  const orders = useSelector((store) => store.orders.value);
  const monthlyTotalUSD = {};
  orders.forEach((order) => {
    const orderDate = new Date(order.order_date);
    const month = orderDate.toLocaleString("en-US", { month: "long" }); // Get month name

    if (monthlyTotalUSD[month]) {
      monthlyTotalUSD[month] += parseFloat(order.order_total_usd);
    } else {
      monthlyTotalUSD[month] = parseFloat(order.order_total_usd);
    }
  });
  const resultArray = Object.keys(monthlyTotalUSD).map((month) =>
    monthlyTotalUSD[month].toFixed(2)
  );

  const data = {
    labels: allMonths,
    datasets: [
      {
        label: "Monthly Product Sold",
        data: resultArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center mx-auto h-60 lg:h-96">
      <Line options={options} data={data} />
    </div>
  );
}
