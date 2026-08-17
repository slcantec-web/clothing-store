export interface Product {
  id: string
  name: string
  detail: string
  price: number
  image: string
  tag?: string
  photo: boolean
}

export const products: Product[] = [
  {
    id: 'overcoat',
    name: 'The Sculpted Overcoat',
    detail: 'Double-faced camel wool · Made in Italy',
    price: 389,
    image: 'images/product-coat.png',
    tag: 'New Season',
    photo: true,
  },
  {
    id: 'shirt',
    name: 'Resort Linen Shirt',
    detail: 'Stone-washed European flax · Ivory',
    price: 129,
    image: 'images/fabric-cream.jpg',
    tag: 'Back in Stock',
    photo: false,
  },
  {
    id: 'trouser',
    name: 'Pleated Wool Trouser',
    detail: 'High-rise · Charcoal merino twill',
    price: 165,
    image: 'images/fabric-charcoal.jpg',
    photo: false,
  },
  {
    id: 'knit',
    name: 'Ribbed Cashmere Knit',
    detail: 'Grade-A Mongolian cashmere · Dune',
    price: 210,
    image: 'images/fabric-camel.jpg',
    tag: 'Limited',
    photo: false,
  },
]
