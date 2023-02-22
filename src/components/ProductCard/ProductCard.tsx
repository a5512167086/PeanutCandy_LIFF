import { Col, Row } from 'react-bootstrap';
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
        <Row>
          <Col className="col-5">
            <Card.Text>${cardPrice}</Card.Text>
          </Col>
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                handleClick(cardTitle, cardPrice);
              }}
            >
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
