import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from './reducer';
import {useStateValue} from './StateProvider'

function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
    <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({cart.length} items):
                    <strong>{value}</strong>
                </p>
                <div className="subtotal_gift">
                    <input type="checkbox"/>
                    <small>
                        This order contains a gift
                    </small>
                </div>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal