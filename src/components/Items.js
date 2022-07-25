import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="price">
          <h2>{title}</h2>
          <h3>{price}₹</h3>
        </div>

        <div className="add-minus-quantity">
          {/* <i className="fas fa-minus minus" onClick={() => decrement(id)}></i> */}
          <img
            alt="decrease"
            style={{ width: "30px", height: "30px" }}
            onClick={() => decrement(id)}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
          ></img>
          <input type="text" placeholder={quantity} disabled />
          {/* <i className="fas fa-plus add" onClick={() => increment(id)}></i> */}

          <img
            alt="increase"
            style={{ width: "30px", height: "30px" }}
            onClick={() => increment(id)}
            src="https://cdn-icons.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1658647704~hmac=a5a9233890052c868e8733537799105e"
          ></img>
        </div>

        <div className="title">
          <p style={{ fontSize: "13px", color: "black" }}>{description}</p>
        </div>

        <div className="remove-item">
          {/* <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          ></i> */}

          <img
            alt="delete"
            style={{ width: "30px", height: "30px" }}
            onClick={() => removeItem(id)}
            src="https://as1.ftcdn.net/v2/jpg/02/76/19/96/1000_F_276199650_Hs5K3QnXm9ZMBLd3DT44YcdWUIf8GHxO.jpg"
          ></img>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
