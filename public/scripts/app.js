"use strict";

console.log('App.js is running');

var app = {
    title: "Indecision App",
    subtitle: " -the best app ever, Google(c)",
    options: []
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    //получаю значение инпута по его тегу name
    var option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        app.options && app.options.length > 0 ? React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Here are yours options"
            ),
            React.createElement(
                "p",
                null,
                app.options.length
            ),
            React.createElement(
                "ol",
                null,
                React.createElement(
                    "li",
                    null,
                    "first item"
                ),
                React.createElement(
                    "li",
                    null,
                    "second item"
                )
            )
        ) : React.createElement(
            "p",
            null,
            "No options"
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();

//JSX - JavaScrip XML


////count example
// let count = 0;
//
// const addOne = ()=>{
//     count++
//     renderCounterApp()
// }
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = ()=>{
//     const templateTwo = (<div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={()=>{
//                 count--;
//                 renderCounterApp()
//             }}>-1</button>
//             <button onClick={()=>{
//                 count = 0;
//                 renderCounterApp()
//             }}>reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateTwo, appRoot);
// }
//
// renderCounterApp();
