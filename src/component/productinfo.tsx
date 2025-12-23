import type { MainProductItem } from "../types/banner"

interface ProductItemProps {
    v : MainProductItem;
}

export default function Productinfo({ v }:  ProductItemProps ) {

const discountRate = Math.round((1 - Number(v.price) / Number(v.original_price)) * 100);

  return (
    <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] md:flex md:flex-col">
       <img src={v.이미지} className='rounded-[20px] 
                col-span-4 sm:col-span-3 md:w-full md:col-span-15 object-cover'></img>
       <div className='flex flex-col gap-[12px] mt-[12px] font-kr 
                col-span-11 sm:col-span-12 md:w-full ps-[20px]'>
          <p className='text-xs text-[clamp(12px,2vw,15px) font-400 text-gray'>{v.brand}</p>
          <p className='mb-2 xl:text-small md:text-[clamp(16px,3vw,20px)] font-500'>{v.name}</p>
          <p className='flex gap-4 items-end font-600 md:mt-auto xl:text-small text-[clamp(18px,3vw,20px)]'>
          { discountRate > 0 && <span className='font-700 text-main font-en'> {discountRate}%</span> }
          <span>{Number(v.price).toLocaleString()}원</span>
          { v.price !== v.original_price && <span className='line-through opacity-60'> {Number(v.original_price).toLocaleString()}원</span> }
        </p>
     </div>
   </div>
  )
}
