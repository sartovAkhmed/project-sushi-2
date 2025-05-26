import { SushiItem, Category } from "../types";

export const categories: { id: Category; name: string }[] = [
  { id: "rolls", name: "Роллы" },
  { id: "sets", name: "Сеты" },
  { id: "sushi", name: "Суши" },
  { id: "drinks", name: "Напитки" },
];

export const sushiData: SushiItem[] = [
  {
    id: 1,
    name: "Филадельфия классическая",
    description:
      "Классический ролл с нежным сливочным сыром, свежим лососем и авокадо",
    price: 399,
    weight: 280,
    imageUrl:
      "https://eurasia56.ru/wp-content/uploads/2017/11/filadelfiya-klassik-1.png",
    category: "rolls",
    ingredients: ["Рис", "Лосось", "Сливочный сыр", "Авокадо", "Нори"],
    isNew: true,
  },
  {
    id: 2,
    name: "Калифорния с крабом",
    description:
      "Популярный ролл с крабовым мясом, огурцом и авокадо, обсыпанный икрой тобико",
    price: 349,
    weight: 260,
    imageUrl:
      "https://sushicoin.ru/assets/images/products/148/1kaliforniya-s-krabom.jpg",
    category: "rolls",
    ingredients: [
      "Рис",
      "Крабовое мясо",
      "Огурец",
      "Авокадо",
      "Нори",
      "Икра тобико",
    ],
  },
  {
    id: 3,
    name: 'Сет "Филадельфия Mix"',
    description: "Большой сет для компании из четырех видов роллов с лососем",
    price: 1299,
    weight: 1050,
    imageUrl:
      "https://sushi-fishka.com.ua/files/originals/set-filadelfiya-mix.jpg",
    category: "sets",
    ingredients: [
      "Филадельфия",
      "Филадельфия лайт",
      "Аляска",
      "Лосось в кунжуте",
    ],
    discount: 15,
  },
  {
    id: 4,
    name: "Острый тунец",
    description: "Пикантный ролл с тунцом и острым соусом спайси",
    price: 329,
    weight: 250,
    imageUrl:
      "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "rolls",
    ingredients: ["Рис", "Тунец", "Огурец", "Спайси соус", "Нори"],
    isSpicy: true,
  },
  {
    id: 5,
    name: "Нигири с лососем",
    description: "Традиционные суши с кусочком свежего лосося на рисе",
    price: 99,
    weight: 40,
    imageUrl:
      "https://online-sushi.com.ua/image/cache/catalog/nigiri/nigiri-losos-810x450.png",
    category: "sushi",
    ingredients: ["Рис", "Лосось"],
  },
  {
    id: 6,
    name: 'Сет "Драконы"',
    description: "Потрясающий сет из трех видов роллов-драконов",
    price: 1399,
    weight: 950,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTkbk6yNzUdUo4h1mTjynBwF75XAc7AybjA&s",
    category: "sets",
    ingredients: ["Черный дракон", "Зеленый дракон", "Красный дракон"],
  },
  {
    id: 7,
    name: "Вегетарианский ролл",
    description: "Легкий овощной ролл с авокадо, огурцом и болгарским перцем",
    price: 249,
    weight: 220,
    imageUrl:
      "https://imperya-sushi.ru/storage/blog-post-content-images/07d8b7b037cfa3d0b671b5f8c80d4249.jpeg",
    category: "rolls",
    ingredients: ["Рис", "Авокадо", "Огурец", "Болгарский перец", "Нори"],
    isVegetarian: true,
  },
  {
    id: 8,
    name: "Матча Латте",
    description:
      "Традиционный японский напиток из зеленого чая матча с молоком",
    price: 179,
    weight: 300,
    imageUrl:
      "https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "drinks",
    ingredients: ["Зеленый чай матча", "Молоко", "Сахар"],
    isVegetarian: true,
  },
  {
    id: 9,
    name: "Гункан с икрой лосося",
    description: "Традиционные суши в форме корабля с красной икрой",
    price: 149,
    weight: 50,
    imageUrl:
      "https://glavsushi.ru/wp-content/uploads/2019/02/sushi-s-ikroj-lososya_corr.jpg",
    category: "sushi",
    ingredients: ["Рис", "Нори", "Икра лосося"],
  },
  {
    id: 10,
    name: "Темпура ролл с креветкой",
    description: "Жареный ролл в хрустящей темпуре с креветкой и авокадо",
    price: 369,
    weight: 290,
    imageUrl:
      "https://higasi.ru/image/cache/catalog/minitempuraskrevetkami-700x562.jpg",
    category: "rolls",
    ingredients: [
      "Рис",
      "Креветка",
      "Авокадо",
      "Нори",
      "Соус спайси",
      "Темпура",
    ],
    isNew: true,
  },
  {
    id: 11,
    name: 'Сет "Запеченный"',
    description: "Ассорти из запеченных роллов под сырным соусом",
    price: 1099,
    weight: 950,
    imageUrl: "https://sushifast.ru/wp-content/uploads/2016/11/zap2.jpg",
    category: "sets",
    ingredients: [
      "Запеченный с лососем",
      "Запеченный с угрем",
      "Запеченный с креветкой",
    ],
  },
  {
    id: 12,
    name: "Японский лимонад",
    description: "Освежающий лимонад с цитрусом юзу и мятой",
    price: 149,
    weight: 350,
    imageUrl: "https://ir-3.ozone.ru/s3/multimedia-o/c1000/6067729416.jpg",
    category: "drinks",
    ingredients: ["Вода", "Юзу", "Мята", "Сахар"],
    isVegetarian: true,
  },
];

export const getDiscountedPrice = (item: SushiItem): number => {
  if (item.discount) {
    return Math.round(item.price * (1 - item.discount / 100));
  }
  return item.price;
};
