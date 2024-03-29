import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51OYnICFyC9pe9a4DHTIVKp8TI272GOWqoGUTmLYFsE8KPndIbFeB6gK0916CWd1JibGdtl9lQCDEOo31FsUj7gRP00aI1KjNxb"
  );
  const handlePayment = async () => {
    try {
      console.log("Starting payment process...");

      const stripe = await stripePromise;

      console.log("Sending request to create order...");

      const res = await makeRequest.post("/orders", {
        products,
      });

      console.log("Order creation response:", res.data);

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

      console.log("Redirecting to checkout...");
    } catch (err) {
      console.error("Error during payment process:", err);

      // Log the Axios error response for further investigation
      if (err.response) {
        console.error("Axios error response:", err.response.data);
      }
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
