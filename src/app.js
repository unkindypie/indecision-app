import React from 'react'
import reactDOM from 'react-dom'
import IndecisionApp from "./components/IndecisionApp";

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