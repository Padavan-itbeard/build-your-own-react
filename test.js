<h1 title="foo">Hello!</h1> // JSX

const container = document.getElementById("root");

const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello!"
    }
}

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
