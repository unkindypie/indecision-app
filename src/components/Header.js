import React from 'react'

//function-based stateless component
const Header = (props)=>(
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
        </div>
    </div>
);

//если в тег не передадут аргументы, то будут использованы эти значения
Header.defaultProps = {
    title: "Indecision App"
};


export default Header