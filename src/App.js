const Pet = (props) => {
    return (
        React.createElement("div", { className: "pet" }, [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed)
        ])
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            //Header
            React.createElement("h1", { id: "brand" }, "Adopt Me!"),
            //Pets
            React.createElement(Pet, {
                name: "Taven",
                animal: "Dog",
                breed: "Pitbull"
            }),
            React.createElement(Pet, {
                name: "Marley",
                animal: "Cat",
                breed: "Tabby"
            }),
            React.createElement(Pet, {
                name: "Cooper",
                animal: "Dog",
                breed: "Yorkie"
            }),
        ],

    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root")
);