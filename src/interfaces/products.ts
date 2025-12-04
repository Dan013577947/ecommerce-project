
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Reviews {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface Product {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: Dimensions;
  discountPercentage: number;
  id: number;
  images: string[]
  meta: Meta;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Reviews[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
}

export interface ProductsList {
  products:Product[];
  total:number;
  skip:number;
  limit:number;
}