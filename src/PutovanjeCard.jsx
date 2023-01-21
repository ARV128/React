import { useState } from "react";

import { AiOutlineShoppingCart } from 'react-icons/ai';
function PutovanjeCard({putovanje,dodaj}) {
  
    return (
       
        <div id="container">	
            
            <div className="product-details">
                
            <h1>{putovanje.destinacija}</h1>
 
                
                    <p className="information">{putovanje.opis}</p>

                
                
        <div className="control">
            
            <button className="btn" onClick={()=>dodaj(putovanje.id)}>
            <span className="price">{putovanje.cena} EUR</span>
        <span className="shopping-cart"><AiOutlineShoppingCart></AiOutlineShoppingCart></span>
        <span className="buy">Get now</span>
        </button>
            
        </div>
                    
        </div>
            
        <div className="product-image">
            
            <img src=  {putovanje.slika} alt=""/>
            

        <div className="info">
            <h2> OPIS</h2>
            <ul>
                <li><strong>Broj dana : </strong>{putovanje.broj_dana} </li>
                <li><strong>Vreme polaska : </strong>{putovanje.vreme}</li>
 
                
            </ul>
        </div>
        </div>

        </div>
                 
           
      
      
    );
  }
  
  export default PutovanjeCard;
  