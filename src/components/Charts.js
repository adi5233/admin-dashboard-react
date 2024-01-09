import React from "react";
import ContriesVsSales from "./Chart/ContriesVsSales";
import MonthlyProductSold from "./Chart/MonthlyProductSold";
import AvailableProductsAndQuantities from "./Chart/AvailableProductsAndQuantities";
import ProductVsSales from "./Chart/ProductVsSales";
import InventoryDetails from "./InventoryDetails";

const Charts = () => {
  return (
    <div className="flex m-5 flex-col gap-5 p-5">
      <div>
        <InventoryDetails />
      </div>
      <div className="bg-white p-2 md:p-5 lg:p-10 shadow-md">
        <ContriesVsSales />
      </div>
      <div className="bg-white p-2 md:p-5 lg:p-10 shadow-md">
        <MonthlyProductSold />
      </div>
      <div className="bg-white p-2 md:p-5 lg:p-10 shadow-md">
        <AvailableProductsAndQuantities />
      </div>
      <div className="bg-white p-2 md:p-5 lg:p-10 shadow-md">
        <ProductVsSales />
      </div>
    </div>
  );
};

export default Charts;
