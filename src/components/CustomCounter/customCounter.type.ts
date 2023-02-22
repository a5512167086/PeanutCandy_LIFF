export type CustomCounterProps = {
  value: number;
  min: number;
  max: number;
  price?: number;
  handleClick: (addOn: number) => void;
};
