
import mainData from '../json/data.json';
import type { MainProductSection } from '../types/banner';



export default function Productset() {
  const products = mainData.mainProduct as MainProductSection;
  return (

    <section className='max-w-1550 mx-auto py-[100px]'>
         <h2 className='text-title font-600 mb-[30px]'> 
           { products.section_title }
         </h2>
           <ul className='flex gap-[16px] '>
           {
  products.products.filter((v)=> v.노출 && v.price !== v.original_price ).slice(0,6).map((v, i) => (
      <li key={i} className='flex-1'>
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
