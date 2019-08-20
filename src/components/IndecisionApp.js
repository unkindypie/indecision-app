import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from "./OptionModal";

//class-based component
export default class IndecisionApp extends React.Component {
    //свойства, за которыми следит реакт, и в случае их изменения через
    //setState, реакт перерендерит страницу
    state = {
        options: [],
        selectedOption: undefined
    };

    // constructor(props){
    //     super(props);
    //
    //     this.state = {
    //         options: []
    //     };
    //     //биндю констекст объекта класса к методу этого же класса, т.к.
    //     //видети ли У МЕТОДОВ КЛАССА НЕТ ССЫЛКИ НА СВОЙ ЖЕ ОБЪЕКТ КЛАССА!!!!!!!
    //     //УЪУЪУЪУЪУЪУЪУУУЪУЪУЪЪУЪ!!!!!!!!!
    //     //самое ущербное ООП ever
    //     //UPD: у методов класса, объявленных через methodName(){}, а не arrow и только в es6
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // }
    handlePick = () => {
        this.setState(()=>({
            selectedOption: this.state.options[(Math.random() * this.state.options.length) ^ 0]
        }));
    };

    handleCloseSelectedOptionModal = ()=>{
        this.setState((prevState)=>({
            selectedOption: !prevState.selectedOption
        }))
    };

    handleDeleteOption = (option) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((o) => o !== option)
        }))
    };
    handleDeleteOptions = () => {
        //setState неявно вызывает рендер
        //а рендер умный, и перерисовывает только то, что изменилось
        this.setState(()=>({options: []}))
    };

    handleAddOption = (option) => {
        if(!option){
            return 'You have to provide an option!'
        }
        if(this.state.options.indexOf(option) !== -1){
            return 'This options already exists!'
        }

        this.setState((prevState)=>({ options: prevState.options.concat(option) }))
    };

    //----lifecycle methods
    //перегружаю метод, который вызывается после первой отрисовки(сам)
    componentDidMount(){
        console.log('mounted!')
        //загружаю options из localStorage
        try{
            const options = localStorage.getItem('options');
            if(options){
                this.setState(()=>({options: JSON.parse(options)}))
            }
        }catch (e) {
            //если JSON.parse кинет эксепшен,то ничего не загружаю.
        }
    };

    //вызывается после перерисовки, которая вызывается после изменения state(сам, это дефолтный метод)
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            //localStorage - браузерный глобальный объект для сохранения строк на время сеанса браузера для конкретной
            //страницы
            //сохраняю options в localStorage
            localStorage.setItem('options', JSON.stringify(this.state.options));
            console.log('updated!');
        }

    };

    //перед удалением компонентов
    componentWillUnmount(){
        console.log('unmounted!')
    };
    //-------

    render(){
        const title = 'Indecision App'
        const subtitle = '" — the best app ever", Google'

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseSelectedOptionModal={this.handleCloseSelectedOptionModal}
                />
            </div>
        )
    }
}
