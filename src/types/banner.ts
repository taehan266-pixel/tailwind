export interface MainBannerItem {
  imgurl: string
  title: string
  subtitle: string
}

export interface MainBannerJson {
  mainBanner: MainBannerItem[];
}

// Main Banner
export interface MainBanner {
  // 현재 비어 있음 (추후 확장 대비)
}

// Product
export interface MainProductItem {
  productid :number
  brand?: string
  name: string
  price: number
  original_price: number
  delivery: string
  이미지 : string
  노출: boolean
  등록날짜: string
}

// Main Product Section
export interface MainProductSection {
  section_title: string
  products: MainProductItem[]
}

export interface MainPageData {
  mainBanner: any[]
  mainProduct: MainProductSection;
}
