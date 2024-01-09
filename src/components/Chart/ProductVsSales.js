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

export const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Product Sold Vs Product Price",
    },
  },
};

export default function ProductVsSales() {
  const orders = useSelector((store) => store.orders.value);

  let countryTotalUSD = [];
  orders.forEach((order) => {
    const category = order.category;
    const totalUSD = parseFloat(order.order_total_usd);
    const existingProduct = countryTotalUSD.find(
      (item) => item.category === category
    );

    if (existingProduct) {
      existingProduct.total_usd += totalUSD;
    } else {
      countryTotalUSD.push({
        category,
        total_usd: totalUSD,
      });
    }
  });

  const products = countryTotalUSD.map((c) => c.category);
  const usds = countryTotalUSD.map((c) => c.total_usd);

  const data = {
    labels: products,
    datasets: [
      {
        label: "Product Sold Vs Product Price",
        data: usds,
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
      <Bar options={options} data={data} />
    </div>
  );
}
