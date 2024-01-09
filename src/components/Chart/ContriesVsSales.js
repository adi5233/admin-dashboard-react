import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales by Countries",
    },
  },
};

export default function BarChart() {
  const orders = useSelector((store) => store.orders.value);

  let countryTotalUSD = [];
  orders.forEach((order) => {
    const country = order.country;
    const totalUSD = parseFloat(order.order_total_usd);

    const existingCountry = countryTotalUSD.find(
      (item) => item.country === country
    );

    if (existingCountry) {
      existingCountry.total_usd += totalUSD;
    } else {
      countryTotalUSD.push({
        country,
        total_usd: totalUSD,
      });
    }
  });

  const countries = countryTotalUSD.map((c) => c.country);
  const usds = countryTotalUSD.map((c) => c.total_usd);

  const data = {
    labels: countries,
    datasets: [
      {
        label: "Sales by Countries",
        data: usds,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
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
          "rgba(201, 203, 207, 0.2)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex justify-center mx-auto h-60 lg:h-96">
      <Bar options={options} data={data} />
    </div>
  );
}
