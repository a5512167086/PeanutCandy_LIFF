export type ProductCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardPrice: number;
  cardSrc: string;
  buttonText: string;
  handleClick: (productName: string, productPrice: number) => void;
};
