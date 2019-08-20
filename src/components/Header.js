import React from 'react'

//function-based stateless component
const Header = (props)=>(
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
);

//если в тег не передадут аргументы, то будут использованы эти значения
Header.defaultProps = {
    title: "Indecision App"
};


export default Header