
import mainData from '../json/data.json';
import type { MainProductSection } from '../types/banner';

export default function Productset() {
  const products =  (mainData.mainProduct as any) as MainProductSection;

  let count = 0;

  return (

    <section className='max-w-1550 mx-auto py-[100px]'>
         <h2 className='text-title font-600 mb-[30px]'> 
           { products.section_title.split("|")[0] }
         </h2>
           <ul className='grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-3'>
           {
  products.products.map((v, i)=> (
   
      v.노출 && v.original_price !== v.price && count < 6 && ++count && <li key={i} className='border pb-5 px-5'>
        <img src={v.이미지} />

        <div className='flex flex-col gap-[8px]'>
          <p>{v.brand}</p>
          <p className='mb-2'>{v.name}</p>

          <p className='flex gap-4 items-end'>
            <span className='font-500 text-main'>
              {Math.round(
                (1 - Number(v.price) / Number(v.original_price)) * 100
              )}%
            </span>
            <span>{Number(v.price).toLocaleString()}원</span>
            <span className='line-through opacity-60'>
              {Number(v.original_price).toLocaleString()}원
            </span>
          </p>
        </div>
      </li>
    ))
}

           </ul>
       </section>
  )
}
