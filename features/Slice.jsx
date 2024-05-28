import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Apple iPhone 15 (128 GB) - Pink",
      description: "Capture life's moments in style with the sleek and vibrant Apple iPhone 15 in Pink.",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SX522_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71v2jVh6nIL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/516IO6TPGIL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/712CBkmhLhL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/61f4dTush1L._SX522_.jpg"
      ],
      quantity: 1
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra 5G",
      description: "Experience the future in the palm of your hand with the Samsung Galaxy S24.",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/71CXhVhpM0L._SX679_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71CXhVhpM0L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71JLhofuYJL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71E-ptCgHcL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71ZdFihN4YL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71RaUP4g7KL._SX679_.jpg"
      ],
      quantity: 1
    },
    {
      id: 3,
      title: "Samsung Galaxy Z Fold3 5G (Phantom Silver, 12GB RAM, 256GB Storage)",
      description: "Unfold infinite possibilities with the Samsung Galaxy Z Fold3.",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:"https://m.media-amazon.com/images/I/71UmO2UOiBL._SX679_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71UmO2UOiBL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61eAyZCxMIL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71+6YKpnE4L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71dL4mqSl4L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81cOgwmMsxL._SX679_.jpg"
      ],
      quantity: 1
    },
    {
      id: 4,
      title: "OnePlus 12 (Flowy Emerald, 16GB RAM, 512GB Storage)",
      description: "Experience the enchantment of the OnePlus 12 in Flowy Emerald.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OnePlus",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/61BAuSC0UnL._SX522_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/61BAuSC0UnL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/61CEiTA5WWL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/51ui6USIv7L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61AplC-qoML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61fVA2RaThL._SX679_.jpg"
      ],
      quantity: 1
    },
    {
      id: 5,
      title: "iQOO 12 5G (Alpha, 12GB RAM, 256GB Storage)",
      description: "Unleash the power of speed with the iQOO 12.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Vivo",
      category: "smartphones",
      thumbnail:"https://m.media-amazon.com/images/I/61JUyx1-SbL._SX679_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/61JUyx1-SbL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71P0B0AkteL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/6196XvphsML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71Mxrqy7rEL._SX679_.jpg"
      ],
      quantity: 1
    }
  ]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product && product.quantity > 1) product.quantity--;
    },
    handleRemove: (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
    }
  }
});

export const { incrementQuantity, decrementQuantity ,handleRemove } = cartSlice.actions;
export default cartSlice.reducer;
