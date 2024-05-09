const parent = React.createElement("div", { id: "parent" }, [ 
  React.createElement("div", {id:'child1'}, [
    React.createElement("h1", {id:'h1'}, "I m an h1"),
    React.createElement("h1", {id:'h2'}, "I m an h2")
]),
React.createElement("div", {id:'child2'},[
    React.createElement("h1", {id:'h3'}, "I m an h2"),
    React.createElement("h1", {id:'h4'}, "I m an h2")
])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);