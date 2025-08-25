const element = React.createElement("h1",{id:"first" , classname:"rahul" , style:{backgroundcolor:"blue" , fontsize:"30px" , color:"pink"}} ,"Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root'));

const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(element);

//CDN stands for content delivery network