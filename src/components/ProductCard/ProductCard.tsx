import Button from 'react-bootstrap/Button';
import Card, { CardProps } from 'react-bootstrap/Card';
import { ProductCardProps } from './productCard.type';

function ProductCard({
  cardTitle,
  cardDescription,
  cardPrice,
  cardSrc,
  buttonText,
  handleClick,
  ...props
}: ProductCardProps & CardProps) {
  return (
    <Card {...props}>
      <Card.Img variant="top" src={cardSrc} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardDescription}</Card.Text>
        <Card.Text>${cardPrice}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            handleClick(cardTitle, cardPrice);
          }}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
