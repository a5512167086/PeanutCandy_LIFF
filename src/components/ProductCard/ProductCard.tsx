import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ProductCardProps } from './productCard.type';

function ProductCard({ cardTitle, cardDescription, cardSrc, buttonText }: ProductCardProps) {
  return (
    <Card>
      <Card.Img variant="top" src={cardSrc} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardDescription}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
