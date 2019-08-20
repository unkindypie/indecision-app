import React from 'react'

//class-based component with state
export default class AddOption extends React.Component{
    state = {
        error: undefined
    };
    // constructor(props){
    //     super(props);
    //     //props - readonly
    //
    //     //нужно биндить, если юзаешь функцию вне класса и используешь древний es6 без properties
    //     this.handleAddOption = this.handleAddOption.bind(this)
    // }

    handleAddOption = (event) => {
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)

        this.setState(()=>({ error }));

        if(!error) {
            event.target.elements.option.value = ''
        }
    };

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}