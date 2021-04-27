import React from "react";
import data from "../../data";
import ClientsList from "../clients/ClientsList";
import ProductsList from "../products/ProductsList";


const Main = () => {
  return (
    <main>
      <ProductsList products={data.products} />
      <ClientsList clients={data.clients} />
    </main>
  );
};

export default Main;
