export interface Product {
  id: string
  price: number
  image: string
  hasTag: boolean
  photo: boolean
}

export const products: Product[] = [
  {
    id: 'overcoat',
    price: 389,
    image: 'images/product-coat.png',
    hasTag: true,
    photo: true,
  },
  {
    id: 'shirt',
    price: 129,
    image: 'images/fabric-cream.jpg',
    hasTag: true,
    photo: false,
  },
  {
    id: 'trouser',
    price: 165,
    image: 'images/fabric-charcoal.jpg',
    hasTag: false,
    photo: false,
  },
  {
    id: 'knit',
    price: 210,
    image: 'images/fabric-camel.jpg',
    hasTag: true,
    photo: false,
  },
]
