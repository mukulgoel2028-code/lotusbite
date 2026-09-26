// export interface ProductVariant {
//   id: string;
//   label: string;
//   weight: string;
//   price: number;
//   originalPrice: number;
// }

// export interface Product {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   rating: number;
//   reviewsCount: number;
//   badge?: string;
//   discountPercentage?: number;
//   calories: string;
//   protein: string;
//   fat: string;
//   image: string;
//   variants: ProductVariant[];
// }

// export const PRODUCTS: Product[] = [
//   {
//     id: "makhana-salt-pepper",
//     title: "Pink Salt & Cracked Pepper",
//     subtitle: "Classic Roasted Superfood",
//     description: "Air-roasted foxnuts seasoned with organic Himalayan pink salt and freshly crushed black pepper.",
//     rating: 4.9,
//     reviewsCount: 142,
//     badge: "Best Seller",
//     discountPercentage: 15,
//     calories: "110 Cal",
//     protein: "6g Protein",
//     fat: "0g Trans Fat",
//     image: "/products/product_1.webp",
//     variants: [
//       { id: "v1-3p", label: "Pack of 3", weight: "300g total", price: 14.99, originalPrice: 17.99 },
//       { id: "v1-6p", label: "Pack of 6", weight: "600g total", price: 26.99, originalPrice: 35.99 },
//     ],
//   },
//   {
//     id: "makhana-peri-peri",
//     title: "Smokey Peri Peri Crunch",
//     subtitle: "Spicy & Tangy Roasted Makhana",
//     description: "A fiery blend of red chilies, citrus peel, and garlic spices slow-infused into crisp foxnuts.",
//     rating: 4.8,
//     reviewsCount: 98,
//     badge: "Trending",
//     discountPercentage: 20,
//     calories: "115 Cal",
//     protein: "5g Protein",
//     fat: "0g Trans Fat",
//     image: "/products/product_2.webp",
//     variants: [
//       { id: "v2-3p", label: "Pack of 3", weight: "300g total", price: 15.49, originalPrice: 18.99 },
//       { id: "v2-6p", label: "Pack of 6", weight: "600g total", price: 27.99, originalPrice: 36.99 },
//     ],
//   },
//   {
//     id: "makhana-herb-cheese",
//     title: "Aged Cheddar & Italian Herbs",
//     subtitle: "Gourmet Savory Snack",
//     description: "Rich, real cheddar cheese dust blended with oregano and thyme for a guilt-free indulgence.",
//     rating: 4.9,
//     reviewsCount: 116,
//     badge: "Fan Favorite",
//     discountPercentage: 10,
//     calories: "120 Cal",
//     protein: "6g Protein",
//     fat: "0g Trans Fat",
//     image: "/products/product_2.webp",
//     variants: [
//       { id: "v3-3p", label: "Pack of 3", weight: "300g total", price: 15.99, originalPrice: 17.99 },
//       { id: "v3-6p", label: "Pack of 6", weight: "600g total", price: 28.99, originalPrice: 34.99 },
//     ],
//   },
//   {
//     id: "makhana-truffle-garlic",
//     title: "Black Truffle & Roasted Garlic",
//     subtitle: "Artisan Limited Edition",
//     description: "Infused with natural black truffle extract and caramelized garlic for a premium flavor profile.",
//     rating: 5.0,
//     reviewsCount: 64,
//     badge: "Limited Edition",
//     discountPercentage: 12,
//     calories: "112 Cal",
//     protein: "5g Protein",
//     fat: "0g Trans Fat",
//     image: "/products/product_3.webp",
//     variants: [
//       { id: "v4-3p", label: "Pack of 3", weight: "300g total", price: 17.99, originalPrice: 19.99 },
//       { id: "v4-6p", label: "Pack of 6", weight: "600g total", price: 31.99, originalPrice: 38.99 },
//     ],
//   },
//   {
//     id: "makhana-truffle-garli",
//     title: "Black Truffle & Roasted Garlic",
//     subtitle: "Artisan Limited Edition",
//     description: "Infused with natural black truffle extract and caramelized garlic for a premium flavor profile.",
//     rating: 5.0,
//     reviewsCount: 64,
//     badge: "Limited Edition",
//     discountPercentage: 12,
//     calories: "112 Cal",
//     protein: "5g Protein",
//     fat: "0g Trans Fat",
//     image: "/products/product_3.webp",
//     variants: [
//       { id: "v4-3p", label: "Pack of 3", weight: "300g total", price: 17.99, originalPrice: 19.99 },
//       { id: "v4-6p", label: "Pack of 6", weight: "600g total", price: 31.99, originalPrice: 38.99 },
//     ],
//   },
// ];

export interface Product {
  id: string;
  name: string;
  price: number; // Price in Rupees (₹)
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Pink Salt & Cracked Pepper",
    price: 199,
    image: "/products/product_1.webp",
  },
  {
    id: "2",
    name: "Smokey Peri Peri Crunch",
    price: 219,
    image: "/products/product_2.webp",
  },
  {
    id: "3",
    name: "Aged Cheddar & Herbs",
    price: 229,
    image: "/products/product_3.webp",
  },
  {
    id: "4",
    name: "Black Truffle & Garlic",
    price: 249,
    image: "/products/product_4.webp",
  },
  {
    id: "5",
    name: "Tangy Chili Lime",
    price: 199,
    image: "/products/product_5.webp",
  },
];