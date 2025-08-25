//create element through js
// const header1=document.createElement('h1');
// header1.innerText="Hello Coder army";
// header1.style.backgroundColor="pink";
// header1.style.fontSize='30px';
// header1.style.color="white";

// //naya header 

// const header2=document.createElement('h1');
// header2.innerText="Kaise ho aap log ";
// header2.style.backgroundColor="blue";
// header2.style.fontSize='40px';
// header2.style.color="white";

//attaching with dom
// const root=document.getElementById('root');
// root.append(header1);
// root.append(header2);
 
const React = {
    createElement: function(tag, styles, children) {
        const element = document.createElement(tag);

        if (Array.isArray(children)) {
            for (let val of children) {
                element.append(val);
            }
        } else {
            element.innerText = children;
        }

        for (let key in styles) {
            element.style[key] = styles[key];
        }
        return element;
    }
};

const reactdom = {
    render: function(element, root) {
        root.append(element);
    }
};

const header1 = React.createElement('h1', {fontSize: "30px", backgroundColor: "blue", color: "white"}, "Hello Coder Army");
const header2 = React.createElement('h2', {fontSize: "25px", backgroundColor: "pink", color: "white"}, "Kaise ho aap sb log");

const li1 = React.createElement('li', {}, "HTML");
const li2 = React.createElement('li', {}, "CSS");
const li3 = React.createElement('li', {}, "JavaScript");

const ull = React.createElement('ul', {fontSize: "20px", backgroundColor: "lightgray", color: "black"}, [li1, li2, li3]);

reactdom.render(header1, document.getElementById('root'));
reactdom.render(header2, document.getElementById('root'));
reactdom.render(ull, document.getElementById('root'));
