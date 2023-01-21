import { useState } from "react";
import PutovanjeCard from "./PutovanjeCard";

 
function Korpa({putovanja}) {
 
    return (
        <>
             
            <div className="svaPutovanja">
                    {
                  
                    
                        putovanja                   
                        .map((p)=><p key ={p.id}>{p.destinacija} | {p.cena} EUR</p>)
                   
                
                
                }
            </div>
                 
           
      
        </>
    );
  }
  
  export default Korpa;
  