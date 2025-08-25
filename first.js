import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello coder Army</h1>

const Root=ReactDOM.createRoot(document.getElementById("root"));
// Root.render(element1);

//result produce hona chahiye string,array,number 
function Greet(props) {
    return <h2>Ram Ram bhaiya ji{props.name} {props.age} </h2>
}
const element2=<Greet name="Rohit Negi" age="23"/>

// <Greet/> kya hai simple function call hai ye self made tag hai greet jaise h1,h2 ye sb hota hai waise hi 

const element3= <h1 id="first" className="second"></h1>
//ye jo element 3 hai same 

Root.render(element2);







//props kya hai simple ek argument hai jo sare argument ko object ke form me rkhega 
// props={
      //name="rohit negi";
      //age="23"
//}
//ye object ke form me argument ko bhejega 

//aur jo Greet bnai hai log apna attribute usse kya hoga wo hmlog ka atribute hai isme bhi sb same hota haim
//<h1 id="first" className="second"></h1>
//same Greet me bhi ho jaiga isme bhi hmlog <Greet name="rohit negi" age="23"/>