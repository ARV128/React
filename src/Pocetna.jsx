import { useState } from "react";
import PutovanjeCard from "./PutovanjeCard";

 
function Pocetna({putovanja,dodaj}) {
    const [sort, setSort] = useState(true);
    function sortAsc(){
    
        setSort(true);
      }
      function sortDesc(){
        
        setSort(false);
      }
    return (
        <>
            <div className="buttons">
                <button className="btn primary" onClick={sortAsc}>Sortiraj rastuće</button>
                <button className="btn primary" onClick={sortDesc}>Sortiraj opadajuće</button>
            </div>
            <div className="svaPutovanja">
                    {
                     sort === true ? 
                    
                        putovanja
                        .sort((a, b) => a.cena < b.cena ? -1 : 1)
                        .map((p)=><PutovanjeCard putovanje={p} key={p.id} dodaj={dodaj}></PutovanjeCard>)
                    :
                        putovanja
                        .sort((a, b) => a.cena > b.cena ? -1 : 1)
                        .map((p)=><PutovanjeCard putovanje={p} key={p.id} dodaj={dodaj}></PutovanjeCard>)
                
                
                }
            </div>
                 
           
      
        </>
    );
  }
  
  export default Pocetna;
  