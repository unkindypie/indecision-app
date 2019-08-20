const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            toggled: false
        }

        this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    toggleVisibility(){
        this.setState((prevState)=>{
            return {
                toggled: !prevState.toggled
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{
                    this.state.toggled ? 'Hide details' :
                        'Show details'
                }</button>
                <p>{
                    this.state.toggled? 'Some details....' :
                        undefined
                }</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, appRoot)


////not component-based
//
// const onToggle = getOnToggle()
//
// const renderApp = ()=>{
//     const visibilityTemplate = (<div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={onToggle}>{onToggle.isToggled ? 'Hide details' : 'Show details'}</button>
//         {onToggle.isToggled ? <p>Details.....</p> : undefined}
//     </div>);
//
//     ReactDOM.render(visibilityTemplate, appRoot)
// };
//
// renderApp()
//
// //недозамыкание без var )))
// function getOnToggle(){
//     let isToggled = false;
//
//     const toggle = ()=>{
//         isToggled = !isToggled
//         toggle.isToggled = isToggled;
//         renderApp()
//     };
//
//     return toggle
// }

