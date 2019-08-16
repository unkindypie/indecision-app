console.log('App.js is running');

const app = {
    title: "Indecision App",
    subtitle: " -the best app ever, Google(c)",
    options:[]
}

const onFormSubmit = (event)=>{
    event.preventDefault();

    //получаю значение инпута по его тегу name
    const option = event.target.elements.option.value;

    if(option){
        app.options.push(option)
        event.target.elements.option.value = ''
        renderApp()
    }
}

const removeAll = ()=>{
    app.options = []
    renderApp()
}

const appRoot = document.getElementById('app');

const renderApp = ()=>{
    const template = (<div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button onClick={removeAll}>Remove All</button>
            {app.options && app.options.length > 0? <div><p>Here are yours options</p>
                <p>{app.options.length}</p>
                <ol>
                    <li>first item</li>
                    <li>second item</li>
                </ol>
            </div> : <p>No options</p>
            }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp()

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