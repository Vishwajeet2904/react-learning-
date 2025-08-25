import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1",{id:"first" , classname:"rahul" , style:{backgroundcolor:"blue" , fontsize:"30px" , color:"pink"}} ,"Hello Coder Army");
const element2 = React.createElement("h2",{id:"second" , classname:"rahul" , style:{backgroundcolor:"blue" , fontsize:"30px" , color:"blue"}} ,"hello bacho kya hal chal");

// ReactDOM.render(element,document.getElementById('root'));
const div1=React.createElement('div', {} , [element , element2]);
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(div1);

