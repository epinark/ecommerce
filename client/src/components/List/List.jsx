import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/4393685/pexels-photo-4393685.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/10802672/pexels-photo-10802672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/2146344/pexels-photo-2146344.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1427984/pexels-photo-1427984.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1425248/pexels-photo-1425248.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
