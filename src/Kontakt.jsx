import { useState } from "react";

 
function Kontakt() {
    function posaljiPoruku(){
        alert("poruka sacuvana")
    }
    return (
       
        <div className="container">
        <form >
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    
        
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
        
            <button type="submit"  onClick={posaljiPoruku}>Submit</button>

        </form>
      </div>
                 
           
      
      
    );
  }
  
  export default Kontakt;
  