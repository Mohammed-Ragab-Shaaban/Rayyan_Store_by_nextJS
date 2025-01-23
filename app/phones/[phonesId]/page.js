import React from "react";

import { AddToCartSinglePage, ButtonSinglePage } from "@/app/components/addToCartSinglePage";
import SliderForSinglePhones from "./sliderForSinglePhones";

export default async function SinglePhonesPage({ params }) {
  const SinglePhonesData = await fetch(
    `http://localhost:1337/api/phones/${params.phonesId}?populate=*`
  );
  const SinglePhonesDataInJSON = await SinglePhonesData.json();
  const SinglePhones = SinglePhonesDataInJSON.data;

  console.log(SinglePhones);

  return (
    <div>
      <div className="manualContainer">
        {/* start product image and details */}
        <div className="grid grid-cols-12 py-20">
          <div className=" col-span-12 md:col-span-5 min-h-96">
            <SliderForSinglePhones SinglePhones={SinglePhones} />
          </div>

          <div className=" p-3 col-span-12 md:col-span-7">
            <h1 className="text-2xl font-bold">{SinglePhones.name}</h1>
            <hr className="h-1 my-2 w-1/4 bg-neutral-200"/>
            <div className="flex gap-3">
              <h3 className="font-bold text-lg" style={SinglePhones.offer_status ? {display:"block"} : {display:"none"}}>{SinglePhones.offered_price} L.E</h3>
              <h3 className="font-bold text-lg" style={SinglePhones.offer_status ? {textDecoration:"line-through",color:"gray"} : null }>{SinglePhones.price} L.E</h3>
            </div>
            <p className="p-3 text-neutral-500">{SinglePhones.description}</p>
            <div className="flex gap-5"><ButtonSinglePage product={SinglePhones} />  <AddToCartSinglePage product={SinglePhones} /> </div>
            <hr className="my-3" />
            <p>Categories: <span className="text-neutral-500">{SinglePhones.category}</span></p>
            <p>Evaluation: {SinglePhones.evaluation}% </p>
          </div>
        </div>
        {/* end product image and details */}

      </div>
    </div>
  );
}
