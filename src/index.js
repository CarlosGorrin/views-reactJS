import React from "react";
import ReactDOM from "react-dom";

const getButton = () =>{
    return 'Click me!';
}

const App = () => {
    return (
        <div>
        {/* https://github.com/StephenGrider/redux-code */}
            <button style={{backgroundColor:'blue', color:'white'}}>{getButton()}</button>
        </div>
    )
};

ReactDOM.render(
    <App />, document.getElementById('root')
);