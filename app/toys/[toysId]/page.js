import React from "react";
import SliderForSingleToys from "./sliderForSingleToys";
import { AddToCartSinglePage, ButtonSinglePage } from "@/app/components/addToCartSinglePage";

export default async function SingleToysPage({ params }) {
  const SingleToyData = await fetch(
    `http://localhost:1337/api/toys/${params.toysId}?populate=*`
  );
  const SingleToyDataInJSON = await SingleToyData.json();
  const SingleToy = SingleToyDataInJSON.data;

  console.log(SingleToy);

  return (
    <div>
      <div className="manualContainer">
        {/* start product image and details */}
        <div className="grid grid-cols-12 py-20">
          <div className=" col-span-12 md:col-span-5 min-h-96">
            <SliderForSingleToys SingleToy={SingleToy} />
          </div>

          <div className=" p-3 col-span-12 md:col-span-7">
            <h1 className="text-2xl font-bold">{SingleToy.name}</h1>
            <hr className="h-1 my-2 w-1/4 bg-neutral-200"/>
            <div className="flex gap-3">
              <h3 className="font-bold text-lg" style={SingleToy.offer_status ? {display:"block"} : {display:"none"}}>{SingleToy.offered_price} L.E</h3>
              <h3 className="font-bold text-lg" style={SingleToy.offer_status ? {textDecoration:"line-through",color:"gray"} : null }>{SingleToy.price} L.E</h3>
            </div>
            <p className="p-3 text-neutral-500">{SingleToy.description}</p>
            <div className="flex gap-5"><ButtonSinglePage product={SingleToy} />  <AddToCartSinglePage product={SingleToy} /> </div>
            <hr className="my-3" />
            <p>Categories: <span className="text-neutral-500">{SingleToy.category}</span></p>
            <p>Evaluation </p>
          </div>
        </div>
        {/* end product image and details */}

      </div>
    </div>
  );
}
