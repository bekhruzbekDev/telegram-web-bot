import { useEffect, useState } from "react";
import { Card } from "./components/Card/Card";
import { Cart } from "./components/Cart/Cart";
import { getData } from "./constants/db";
const dataList = getData();
const telegram =window.Telegram.Webapp
import "./style/main.css";
export const App = () => {
  const [cartItems, setCartItems] = useState([]);
// useEffect(()=>{
//   telegram.ready()
// })

  const onAddItem = (item) => {
    const existItem = cartItems.find((c) => c.id == item.id);

    if (existItem) {
      const newData = cartItems.map((c) =>
        c.id == item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c
      );
      setCartItems(newData);
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(newData);
    }
  };
  const onRemoveItem = (item) => {
    const existItem = cartItems.find((c) => c.id == item.id);
    if (existItem.quantity == 1) {
      const newData = cartItems.filter((c) => c.id !== item.id);
      setCartItems(newData);
    } else {
      const newData = cartItems.map((c) =>
        c.id == existItem.id
          ? { ...existItem, quantity: existItem.quantity - 1 }
          : c
      );
      setCartItems(newData);
    }
  };
  const onCheckout =()=>{
    telegram.MainButton.text ="sotib olish"
    telegram.MainButton.show()
  }
  return (
    <div>
      <h1 className="heading">Hello web bot</h1>
      <Cart  cartItems ={cartItems} onCheckout={onCheckout}/>
      <div className="container">
        {dataList.map((item) => {
          return <Card key={item.id} data={item} onAddItem={onAddItem} onRemoveItem ={onRemoveItem}/>;
        })}
      </div>
    </div>
  );
};
