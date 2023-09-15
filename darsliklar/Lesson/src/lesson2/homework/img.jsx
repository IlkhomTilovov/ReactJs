import React from "react";
import Card from "./card.jsx";
import "./imgStyle.css";

class Img extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Card
            title="Apple"
            src="https://gcccrops.com/wp-content/uploads/2022/08/pomme-dalinette-large.jpg"
          />
          <Card
            title="Apple"
            src="https://gcccrops.com/wp-content/uploads/2022/08/pomme-dalinette-large.jpg"
          />
          <Card
            title="Apple"
            src="https://gcccrops.com/wp-content/uploads/2022/08/pomme-dalinette-large.jpg"
          />
          <Card
            title="Apple"
            src="https://gcccrops.com/wp-content/uploads/2022/08/pomme-dalinette-large.jpg"
          />
        </div>
        <div className="wrapper">
          <Card
            title="Banana"
            src="https://i5.walmartimages.com/asr/3bbb1151-d69a-43fb-b132-47e0bc066307.1f28c1acf3df725a6a39ba4c8738e025.jpeg"
          />
          <Card
            title="Banana"
            src="https://i5.walmartimages.com/asr/3bbb1151-d69a-43fb-b132-47e0bc066307.1f28c1acf3df725a6a39ba4c8738e025.jpeg"
          />
          <Card
            title="Banana"
            src="https://i5.walmartimages.com/asr/3bbb1151-d69a-43fb-b132-47e0bc066307.1f28c1acf3df725a6a39ba4c8738e025.jpeg"
          />
          <Card
            title="Banana"
            src="https://i5.walmartimages.com/asr/3bbb1151-d69a-43fb-b132-47e0bc066307.1f28c1acf3df725a6a39ba4c8738e025.jpeg"
          />
        </div>
        <div className="wrapper">
          <Card
            title="Kiwi"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRUyWr-YPgbKa6nrv9Go8T-GQbGhyPYGtVw&usqp=CAU"
          />
          <Card
            title="Kiwi"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRUyWr-YPgbKa6nrv9Go8T-GQbGhyPYGtVw&usqp=CAU"
          />
          <Card
            title="Kiwi"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRUyWr-YPgbKa6nrv9Go8T-GQbGhyPYGtVw&usqp=CAU"
          />
          <Card
            title="Kiwi"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRUyWr-YPgbKa6nrv9Go8T-GQbGhyPYGtVw&usqp=CAU"
          />
        </div>
        <div className="wrapper">
          <Card
            title="Orange"
            src="https://fruit-time.ua/images/cache/products/05/apelsin-imp-500x500.jpeg"
          />
          <Card
            title="Orange"
            src="https://fruit-time.ua/images/cache/products/05/apelsin-imp-500x500.jpeg"
          />
          <Card
            title="Orange"
            src="https://fruit-time.ua/images/cache/products/05/apelsin-imp-500x500.jpeg"
          />
          <Card
            title="Orange"
            src="https://fruit-time.ua/images/cache/products/05/apelsin-imp-500x500.jpeg"
          />
        </div>
      </div>
    );
  }
}

export default Img;
