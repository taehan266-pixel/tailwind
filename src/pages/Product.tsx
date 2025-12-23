import Title from "../ui/Title";

export default function Product() {
  interface Product {
  name: string;
  price: number;
  img :string;
}

const products: Product[] = [
  { name: "무선 이어폰", price: 89000, img : "1.jpg"},
  { name: "게이밍 마우스", price: 45000, img : "2.jpg" },
  { name: "프리미엄 키보드", price: 129000, img : "3.jpg" },
  { name: "스마트 워치", price: 159000, img : "4.jpg" },
  { name: "블루투스 스피커", price: 69000, img : "5.jpg" },
  { name: "휴대용 보조배터리", price: 29000, img : "6.jpg" },
  { name: "모니터 27인치", price: 239000, img : "7.jpg" },
  { name: "웹캠 FHD", price: 59000, img : "8.jpg" },
  { name: "외장 SSD 1TB", price: 129000, img : "9.jpg" },
  { name: "기계식 키패드", price: 49000, img : "10.jpg" }
];
  return (
    <section>
      <Title bigtitle="제품소개" subtitle="26년 업체 최초 인증제품을 소개합니다."></Title>
      <ul className="grid lg:grid-cols-3 gap-[clamp(15px,3vw,30px)] grid-cols-2 max-w-[1024px] w-full mx-auto mt-[clamp(2.5rem,3.8vw,10rem)]">
          {
           //  products.map(()=>())
           //  products.map(()=>{return()})
            products.map((v)=>(
            <li className="bg-white">
              <div>
                <img src={`/product/${v.img}`} className="rounded-[20px]"></img>
              </div>
              <div className="flex justify-between py-4">
                 <p>{v.name}</p>
                 <p className="price text-[#ff5722]">
                  {v.price}
                  <span className="text-[#555]">원</span>
                 </p>
              </div>
            </li>))
   }
          
          </ul>
    </section>
  )
}
