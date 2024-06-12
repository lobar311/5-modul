import { Products, Category } from "./type";

export const categories: Category[] = [
  {
    id: 1,
    name: "Un mahsulotlari",
    image:
      "https://daryo.uz/cache/2022/05/photo_2021-11-22_12-41-32-1280x853.jpg",
  },
  {
    id: 2,
    name: "Ichimliklar",
    image:
      "https://storage.kun.uz/source/4/7HCigwIhV3M9B8GGLoEh83b4RaVNBrt5.jpg",
  },
  {
    id: 3,
    name: "Sabzavotlar",
    image:
      "https://i0.wp.com/medall.uz/wp-content/uploads/2023/02/IMG_20230227_103850_093.jpg?fit=600%2C435&ssl=1",
  },
  {
    id: 4,
    name: "Mevalar",
    image: "https://daryo.uz/static/2021/03/tmb_16420_6866.jpg",
  },
];

export const products: Products = [
  {
    id: 1,
    categoryId: 1,
    status: "Active",
    name: "Birinchi navli un",
    price: 4000,
    image:
      "https://api.cabinet.smart-market.uz/uploads/images/ff808181eb253f52192ca568",
  },
  {
    id: 2,
    categoryId: 1,
    status: "Active",
    name: "Birinchi navli un (Vitaminga boy)",
    price: 4600,
    image:
      "https://api.cabinet.smart-market.uz/uploads/images/ff808181b460e76d191cff62",
  },
  {
    id: 3,
    categoryId: 2,
    status: "Active",
    name: "Dinay",
    price: 12000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoOzQXMIifDMB448sybzS8AwoLysshsMqlKNqzTQigxFTIuJrcjcNCRe8Bgtph7ggFY4&usqp=CAU",
  },
  {
    id: 4,
    categoryId: 2,
    status: "Active",
    name: "Dena",
    price: 13000,
    image: "https://marwin.uz/uploads/Q80QjrF6IQ.png",
  },
  {
    id: 5,
    categoryId: 3,
    status: "Active",
    name: "Kartoshka",
    price: 2000,
    image:
      "https://odam.uz/upload/media/entries/2019-12/27/2320-entry-5-1577471814.jpg",
  },
  {
    id: 6,
    categoryId: 3,
    status: "Active",
    name: "Sabzi",
    price: 1500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAfBtqA7GekF1EZ0IsW_NSp_RiRZn_7H4Dw&s",
  },
  {
    id: 7,
    categoryId: 3,
    status: "Active",
    name: "Piyoz",
    price: 1800,
    image: "https://www.jizzaxstat.uz/images/13092022-2.jpg",
  },
  {
    id: 8,
    categoryId: 3,
    status: "Active",
    name: "Pamidor",
    price: 3000,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
  },
  {
    id: 9,
    categoryId: 4,
    status: "Active",
    name: "Olma",
    price: 5000,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
  },
  {
    id: 10,
    categoryId: 4,
    status: "Active",
    name: "Banan",
    price: 8000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  },
  {
    id: 11,
    categoryId: 4,
    status: "Active",
    name: "Uzum",
    price: 7000,
    image:
      "https://dostavo4ka.uz/upload-file/2021/05/05/2015/b387db2b-fa91-4a3a-8f19-50ab5d2c2e9e.jpg",
  },
  {
    id: 12,
    categoryId: 4,
    status: "Active",
    name: "Anor",
    price: 6000,
    image: "https://gardencells.com/files/original/products/68.jpg",
  },
  {
    id: 13,
    categoryId: 1,
    status: "Active",
    name: "Ikkinchi navli un",
    price: 3500,
    image: "https://img02.flagma.uz/photo/premium-un-1935225_big.jpg",
  },
  {
    id: 14,
    categoryId: 1,
    status: "Active",
    name: "Guruch",
    price: 5000,
    image: "https://xalq-tabobati.uz/wp-content/uploads/2020/07/riso.jpg",
  },
  {
    id: 15,
    categoryId: 2,
    status: "Active",
    name: "Pepsi",
    price: 9000,
    image: "https://images.uzum.uz/cia47ib6edfostihhq40/original.jpg",
  },
  {
    id: 16,
    categoryId: 2,
    status: "Inactive",
    name: "Fanta",
    price: 8500,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Fanta-logo.jpg",
  },
  {
    id: 17,
    categoryId: 3,
    status: "Active",
    name: "Qovoq",
    price: 2500,
    image: "https://daryo.uz/static/2023/09/medium-650d61df752f1.jpg",
  },
  {
    id: 18,
    categoryId: 4,
    status: "Inactive",
    name: "Shaftoli",
    price: 7500,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Peach_2.jpg",
  },
  {
    id: 19,
    categoryId: 4,
    status: "Inactive",
    name: "Nok",
    price: 6500,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Pear_close-up.jpg",
  },
  {
    id: 20,
    categoryId: 4,
    status: "Active",
    name: "Gilos",
    price: 9000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg",
  },
];
