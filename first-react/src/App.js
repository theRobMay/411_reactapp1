import './App.css';
import React from "react";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
            todos: [],
            text: ''
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("I got clicked");
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {
        console.log( "THIS -->", this)
        return (
            <div className="App">
                <h1>{this.state.isClicked === true ? "I have been clicked" : "I have not been clicked"}</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello World
//       </header>
//     </div>
//   );
// }

export default App;
