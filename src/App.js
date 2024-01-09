import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "./redux/orderSlice";
import { addProduct } from "./redux/productSlice";
import Charts from "./components/Charts";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://mocki.io/v1/0f4acef6-fda1-4119-8bcc-4468f24837a8")
        .then((data) => data.json())
        .then((response) => {
          dispatch(addOrder(response));
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://mocki.io/v1/97e82829-960b-4d8f-9bb1-46d4ba9936d7")
        .then((data) => data.json())
        .then((response) => {
          dispatch(addProduct(response));
        });
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-50">
      <Header />
      <Charts />
    </div>
  );
}

export default App;
