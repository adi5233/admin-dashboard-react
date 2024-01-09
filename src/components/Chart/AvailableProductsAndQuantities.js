import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Available Products And Quantities",
    },
  },
};

export default function AvailableProductsAndQuantities() {
  const products = useSelector((store) => store.products.value);

  let categoryScale = [];
  products.forEach((product) => {
    const category = product.category;
    const quantity = product.quantity;
    const existingCountry = categoryScale.find(
      (item) => item.category === category
    );

    if (existingCountry) {
      existingCountry.quantity += quantity;
    } else {
      categoryScale.push({ category, quantity });
    }
  });

  const categories = categoryScale.map((c) => c.category);
  const quantities = categoryScale.map((c) => c.quantity);

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Available Products And Quantities",
        data: quantities,
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
    <div className="flex justify-center mx-auto h-72 lg:96">
      <Pie options={options} data={data} />;
    </div>
  );
}
