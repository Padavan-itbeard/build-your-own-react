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

console.log(element);
const container = document.getElementById("root");

ReactDOM.render(element, container);
