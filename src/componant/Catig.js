import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import { prod } from "./models/CatigData";

function Prod() {
  return (
    <>
      {prod.map((item, index) => (
        <MyCard
          key={item.id}
          title={item.title}
          inStock={item.inStock}
          img={item.imgSrc}
          desc={item.desc}
          price={item.price}
          index={index}
        />
      ))}
    </>
  );
}

function MyCard({ title, price, img, desc, inStock, index }) {
  const getCategoryLink = (index) => {
    if (index === 0) {
      return "/Weman";
    } else if (index === 1) {
      return "/Men";
    } else if (index === 2) {
      return "/Kids";
    } else {
      return "/";
    }
  };

  return (
    <Col xs={6} sm={7} md={4} lg={4} className="p-2">
      <Card className="bg-light text-dark">
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "22rem" }}
          className="rounded"
        />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Link to={getCategoryLink(index)}>
            <Button variant="outline-dark bg-danger">Shop Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Prod;