"use client";
import React from "react";
import BreadcrumbNav from "../components/Shared/BreadCrumbNav/BreadCrumbNav";
import CheckoutForm from "../components/Shared/CheckoutForm/CheckoutForm";
import OrderSummary from "../components/Shared/OrderSummary/OrderSummary";
import Newsletter from "../components/Shared/Newsletter/Newsletter";

function Checkout() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <BreadcrumbNav />
      <section className="self-center mt-8 w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[67%] max-md:ml-0 max-md:w-full">
            <CheckoutForm />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <OrderSummary />
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  );
}

export default Checkout;
