import cakes from "./cakes.json";

const categoryInfo = [
  {
    label: "Special Cakes",
    path: "special-cakes",
  },
  {
    label: "Cupcakes",
    path: "cupcakes",
  },
  {
    label: "Piece of Cake",
    path: "piece-of-cake",
  },
  {
    label: "Macarons",
    path: "macarons",
  },
  {
    label: "Custom Cakes",
    path: "custom-cakes",
  },
];

const categories = categoryInfo.map((category) => {
  const cake = cakes.find((cake) => cake.category === category.path);

  return {
    ...category,
    image: cake?.image,
  };
});

export default categories;
