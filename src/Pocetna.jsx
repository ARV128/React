import { useState } from "react";
import PutovanjeCard from "./PutovanjeCard";

 
function Pocetna({putovanja}) {
  
    return (
       
        <div className="svaPutovanja">
                {putovanja.map((p)=><PutovanjeCard putovanje={p} key={p.id}></PutovanjeCard>)}
        </div>
                 
           
      
      
    );
  }
  
  export default Pocetna;
  