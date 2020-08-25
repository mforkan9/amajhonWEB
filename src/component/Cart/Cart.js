import React from 'react';

const Cart = (props) => {
    const cart = props.cart
     // const total = cart.reduce( (total,prd) => total + prd.price,0)
     let total = 0;
     for(let i =0;i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
        
     }
     let shipping = 0;
     if(total > 15){
         shipping = 4;
     }
     else if(total > 0){
         shipping = 12;
     }
     const tax =Math.round(total / 10);
    return (
        <div>
          <h1>Order Summary</h1>
    <h3>Iteams Order:{cart.length}</h3> 
    <p>Total price:{total}</p>
    <p>shipping:{shipping}</p>
    <p>Tax:{tax}</p>
    <p>Total price:{total + shipping}</p> 
        </div>
    );
};

export default Cart;