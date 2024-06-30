import { useState } from "react";
import { Button } from "../Button/Button";
import "./card.css";
import PropTypes from "prop-types";
export const Card = ({ data,onAddItem,onRemoveItem}) => {
  const [count,setCount] =useState(0)
  const addItem =()=>{
    setCount(p=>p+1)
    onAddItem(data)
  }
  const removeItem =()=>{
    setCount(p=>p-1)
    onRemoveItem(data)
  }
  return (
    <div className="card">
      <span className={`${count!==0?"card_badge":"hidden"}`}>{count}</span>
      <div className="img_container">
        <img src={data.Image} alt="" width={"100%"} height={"230px"} />
      </div>
      <div className="card_body">
        <h2 className="card_title">{data.title}</h2>
        <p className="card_price">${data.price}</p>
      </div>
      <div className="hr"></div>
      <div className="btn-container">
        <Button type={"add"} title ={"+"} onClick={addItem}/>
        {count !==0&&(
          <Button type={"remove"} title ={"-"} onClick={removeItem} />
        )}
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.object,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
};
