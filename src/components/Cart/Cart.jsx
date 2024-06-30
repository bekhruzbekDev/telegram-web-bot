import { TotalPrice } from "../../units/prise"
import { Button } from "../Button/Button"
import PropTypes from "prop-types";
import "./cart.css"
export const Cart =({cartItems,onCheckout})=>{
    console.log(cartItems);
    return(
        <div className="cart_container">
            <p>Umumiy narx:${TotalPrice(cartItems)}</p>
            <Button type={"checkout"} title ={cartItems.length==0? "buyurtma":"to'lov"} disabled={cartItems.length ==0?true:false} onClick={onCheckout}/>
        </div>
    )
}
Cart.propTypes = {
cartItems: PropTypes.array,
   
  };