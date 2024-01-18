import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1427984/pexels-photo-1427984.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1425248/pexels-photo-1425248.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Skirt",
      desc: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hat",
      desc: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            // onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$120</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
