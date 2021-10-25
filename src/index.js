import React from "react";
import ReactDOM from "react-dom";

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }
}

function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => typeof child === "object" ? child : createTextElement(child)),
        }
    }
}

const Didact = {
    createElement,
}
/* @jsx Didact.createElement */
const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
)

// const element = Didact.createElement(
//     "div",
//     { id: "foo"},
//     createElement("a", null, "bar"),
//     createElement("b"),
// );

const container = document.getElementById("root");

// ReactDOM.render(element, container);

function render(element, container) {
    const {type, props} = element;
    const dom = type === "TEXT_ELEMENT" 
        ? document.createTextNode("")
        : document.createElement(type);
    
    const isProperty = key => key !== "children";

    Object.keys(props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = props[name];
        });

    const elementChildren = props.children || [];
    elementChildren.forEach(child => render(child, dom));

    container.appendChild(dom);
}

render(element, container);