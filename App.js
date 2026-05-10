const heading = React.createElement("h1", {
    id: "heading" , xyz: "123"
}, "Hello world from react inside it");

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
