import React, { useState} from 'react';

const CartItem = ({cartitems}) =>
{
    let { prmkey,qty_ord, table_id, item_id, item_name, item_price} = cartitems;
    const [qto,Setqto]= useState(qty_ord);

    const handleDecrement = () =>
    {
    
        if(qto===1)

        {
            fetch(`http://localhost:8080/cart/delete/${prmkey}`,
  
            {
        
                method:`DELETE`
        
            }).then((response )=>{
                //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
                    //console.log(response)
        
            })
        }
        else
        {
            Setqto(qto-1);
            qty_ord=qto;
            var obj = {prmkey, qty_ord, table_id, item_id, item_name, item_price};

            fetch(`http://localhost:8080/cart/update/${prmkey}`,
    
                {
            
                    method:`PUT`,
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(obj)
            
                }).then((response )=>{
                    //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
                        //console.log(response)
            
                })
        }
    }

    const handleIncrement = () =>
    {
    
        Setqto(qto+1);
        qty_ord=qto;
        var objs = {prmkey, qty_ord, table_id, item_id, item_name, item_price};
        // console.log("primary key : "+prmkey);
        fetch(`http://localhost:8080/cart/update/${prmkey}`,
  
            {
        
                method:`PUT`,
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(objs)
        
            }).then((response )=>{
                //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
                    //console.log(response)
        
            })
        
    }

    return(
        <div>
            <table>
                <thead></thead>
<tbody>
           
            <div className="cart-items"><td width="300px"> {item_name}</td>
            <td width="300px">
                            <button className="dec-button" onClick={handleDecrement}>-</button>
                            <span>{qto}</span>
                            <button className="inc-button" onClick={handleIncrement}>+</button>
                            </td>
                            </div>
                            </tbody>
            </table>
        </div>
    );
}

export default CartItem;