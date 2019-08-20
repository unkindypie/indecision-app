import React from 'react'
import reactDOM from 'react-dom'
import IndecisionApp from "./components/IndecisionApp";
//'reset' - штука, которая сносит дефолтные стили браузера, которые у всех браузеров разные
import 'normalize.css/normalize.css'
//гружу стили, а вебпак знает, что с ними делать, т.к. я ему это сказал в конфиге, а конфигу я все сказал в конфиге конфига, которому я.....
import './styles/styles.scss'

const Layout = (props) => {
    return (
      <div>
          <p>Header</p>
          {props.children}
          <p>Footer</p>
      </div>
    );
}

const template = (
  <div>
      <h1>Page Title</h1>
      <p>This is my page</p>
  </div>
);

// reactDOM.render((
//     <Layout>
//         {//jsx внутри вызова компонента попадает props.children компонента
//         }
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div>
//     </Layout>
// ), document.getElementById('app'))

reactDOM.render(<IndecisionApp/>, document.getElementById('app'))