
//Part 111
/*
        
        //react code
        const heading=React.createElement('h1',
            {
            className:'heading', xyz:'abc'
            }
        ,'Hello World! from React');


        

        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
*/


/*
root.creatElement() function is used to create a new element  JAVASCRIPT OBJECT 
        React.createElement() returns a new React element.
        this function takes three parameters:
        1. the type of element we want to create
        2. an object containing the attributes of the element
        3. the children of the element

        important things if i ask you what is heading in it,
        here 'heading' is an object with properties like className, xyz, and children
        className is used to add class to the element
        xyz is used to add an attribute to the element
        children is used to add text to the element
        Here is one concept children and props to elements
        props are used to pass data from parent to child component
        like in this case, we are adding class and attribute 'xyz' to the h1 element
        children is used to add text to the element
        xyz is used to add an attribute to the element
        xyz is a custom attribute and it can be used in any element in react
        you can add any attribute to an element in react by adding them as key-value pair in the object passed to the element.
        

    IMP THINGS WHAT IS PROPS 
    { }=== props
        //props are used to pass data from parent to child component
       ********* props: {className: 'heading', xyz: 'abc' children: 'Hello World! from React' },

        console.log(heading); //<h1 class="heading" xyz="abc">Hello World! from React</h1>
*/











//Part222

/*
<div id="parent">

      <div id="child">            

            <h1>Hello World from React </h1>    

      </div>

</div>

how we create nested elements in react.


const parent=React.createElement('div',{
    id:'parent'
},React.createElement('div',{
    id:'child'
    },React.createElement('h1',null,'Hello World! from React')));

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//go and inspect it in browser to see the nested elements.

*/







//part333
//we want to create sibling more child elements in react.
//then we will create an array of child elements and pass it to parent component.

/*
<div id="parent">

      <div id="child">            

            <h1>Hello World from React </h1>
            <h2>Another Heading</h2>    

      </div>

</div>

how we create nested elements in react.


const parent=React.createElement('div',{
    id:'parent'
},React.createElement('div',{
    id:'child'
    },
    [React.createElement('h1',null,'Hello World! from React'),
    React.createElement('h2',null,'Another Heading')])); //we create an array of child elements and pass it to parent component.


console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

*/



//part4444



/*
<div id="parent">

      <div id="child">            

            <h1>Hello World from React </h1>
            <h2>Another Heading</h2>    

      </div>

      <div id="child">            

            <h1>Hello World from React </h1>
            <h2>Another Heading</h2>    

      </div>

</div>

how we create nested elements in react. how we create it more complex nested elements in react.

*/

const parent=React.createElement('div',{
    id:'parent'
},[React.createElement('div',{
    id:'child1'
    },
    [React.createElement('h1',{},'Hello World! from React'),
    React.createElement('h2',{},'Another Heading')]),
    React.createElement('div',{
    id:'child2'
    },
    [React.createElement('h1',{},'Hello World! from React'),
    React.createElement('h2',{},'Another Heading')])]); //we create an array of child elements and pass it to parent component.
    console.log(parent);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);

    //inspect it in browser to see the nested elements.
    //making more complex to write and we have seen that it will make our code more readable and maintainable.
    //but it make our code more complex and harder to understand.
    //we improve this by using JSX which is a syntax extension to JavaScript and it allows us to write HTML in JavaScript.


    //JSX stands for JavaScript XML.
    //jsx is a syntax extension to JavaScript, not a new language.