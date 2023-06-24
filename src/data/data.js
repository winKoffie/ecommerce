const slideItems = [
  {
    id: 1,
    img: "/Images/Slider/men.jpeg",
    title: "AFRICAN SALE",
    desc: "DON`T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    bg: "#F5FAFD"
  },
  {
    id: 2,
    img: "/Images/Slider/lady-3.jpeg",
    title: "AFRICAN SALE",
    desc: "DON`T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    bg: "#FCF1ED"
  },
  {
    id: 3,
    img: "/Images/Slider/children.jpeg",
    title: "AFRICAN SALE",
    desc: "DON`T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    bg: "#FBF0F4"
  }
];

export function sliderItems() {
  return slideItems;
}

const category = [
  {
    id: 1,
    img: "/Images/Product/Men-wear/men-Arican-wear-1.jpeg",
    title: "Men's Clothing",
    cat: { id: 1, gender: "men" }
  },
  {
    id: 2,
    img: "/Images/Product/Women-wear/lady-african-dress.jpeg",
    title: "Women's Clothing",
    cat: { id: 2, gender: "women" }
  },
  {
    id: 3,
    img: "/Images/Product/Children-wear/Children-african-wear-1.jpeg",
    title: "Child's Clothing",
    cat: { id: 3, gender: "children" }
  }
];
export function categories() {
  return category;
}

const product = [
  { id: 1, img: "/Images/Product/Men-wear/men-1.jpeg", cat: "men" },
  { id: 2, img: "/Images/Product/Men-wear/men-2.jpeg", cat: "men" },
  { id: 3, img: "/Images/Product/Men-wear/men-3.jpeg", cat: "men" },
  { id: 4, img: "/Images/Product/Men-wear/men-4.jpeg", cat: "men" },
  { id: 5, img: "/Images/Product/Men-wear/men-5.jpeg", cat: "men" },
  { id: 6, img: "/Images/Product/Men-wear/men-6.jpeg", cat: "men" },
  { id: 7, img: "/Images/Product/Men-wear/men-7.jpeg", cat: "men" },
  { id: 10, img: "/Images/Product/Women-wear/women-1.jpeg", cat: "men" },
  { id: 11, img: "/Images/Product/Women-wear/women-2.jpeg", cat: "men" },
  { id: 12, img: "/Images/Product/Women-wear/women-3.jpeg", cat: "men" },
  { id: 13, img: "/Images/Product/Women-wear/women-4.jpeg", cat: "men" },
  { id: 14, img: "/Images/Product/Women-wear/women-5.jpeg", cat: "men" },
  { id: 15, img: "/Images/Product/Women-wear/women-6.jpeg", cat: "men" },
  { id: 16, img: "/Images/Product/Women-wear/women-7.jpeg", cat: "men" }
];

export function products() {
  return product;
}
