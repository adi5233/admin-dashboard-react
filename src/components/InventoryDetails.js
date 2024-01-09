import React from "react";
import { useSelector } from "react-redux";

const InventoryDetails = () => {
  const orders = useSelector((store) => store.orders.value);
  const products = useSelector((store) => store.products.value);
  const totalOrders = orders.length;
  const totalProducts = products.length;

  return (
    <div className="flex flex-col md:flex-row w-full justify-center md:items-center gap-2 lg:gap-20">
      <div className="w-full md:w-1/3 bg-white p-8 mb-4 shadow-md ">
        <h2 className="">Total Products: {totalOrders}</h2>
      </div>
      <div className="w-full md:w-1/3 bg-white p-8 mb-4 shadow-md ">
        <h2 className="">Total Orders: {totalProducts}</h2>
      </div>
    </div>
  );
};

export default InventoryDetails;
