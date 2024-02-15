"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SideNav() {
  const [active, setActive] = useState("");
  const handleClick1 = () => {
    setActive("home");
  };
  const handleClick2 = () => {
    setActive("invoices");
  };
  const handleClick3 = () => {
    setActive("customers");
  };
  return (
    <>
      <div className="w-full h-2/6 bg-blue-500 rounded-md">
        <div className="p-3 flex relative top-2/3">
          <Image
            src="/globe.png"
            width={33}
            height={33}
            alt="globe"
            className="inline"
          />
          <h3 className="text-white text-3xl inline ml-2">Acme</h3>
        </div>
      </div>
      <div className="flex-col bg-slate-200 h-full pt-2">
        {active == "home" ? (
          <div className="flex p-2 bg-blue-200" onClick={handleClick1}>
            <Image src="/home-blue.png" width={22} height={18} alt="#" />
            <p className="ml-3 text-blue-600">Home</p>
          </div>
        ) : (
          <div className="flex p-2" onClick={handleClick1}>
            <Image src="/home.png" width={22} height={18} alt="#" />
            <p className="ml-3 hover:text-blue-600">Home</p>
          </div>
        )}
        {active == "invoices" ? (
          <div className="flex p-2 bg-blue-200" onClick={handleClick2}>
            <Image src="/copy-blue.png" width={22} height={18} alt="#" />
            <p className="ml-3 text-blue-600">Invoices</p>
          </div>
        ) : (
          <div className="flex p-2" onClick={handleClick2}>
            <Image src="/copy.png" width={22} height={18} alt="#" />
            <p className="ml-3 hover:text-blue-600">Invoices</p>
          </div>
        )}
        {active == "customers" ? (
          <div className="flex p-2 bg-blue-200" onClick={handleClick3}>
            <Image src="/costumer-blue.png" width={22} height={18} alt="#" />
            <p className="ml-3 text-blue-600">Customers</p>
          </div>
        ) : (
          <div className="flex p-2" onClick={handleClick3}>
            <Image src="/costumer.png" width={22} height={18} alt="#" />
            <p className="ml-3 hover:text-blue-600">Customers</p>
          </div>
        )}
      </div>
    </>
  );
}
