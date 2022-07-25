import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
// import { cart.css } from "./cart.css";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img
              src="https://www.technewsworld.com/wp-content/uploads/sites/3/2021/12/xl-2017-ecommerce-growth-1.jpg"
              alt="ecommerce"
              className="arrow-icon"
            />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            style={{ width: "150px", height: "40px" }}
            src="https://www.technewsworld.com/wp-content/uploads/sites/3/2021/12/xl-2017-ecommerce-growth-1.jpg"
            alt="arrow"
            className="arrow-icon"
          />
          <h3 style={{ fontSize: "30px" }}>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img
            src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
            alt="cart"
          />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p style={{ color: "orange" }} className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart:
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
