import './App.css';
import React from "react";
import {nanoid} from "nanoid";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
            todos: [{id: 1, text: "feed elephant"}, {id: 2, text: "fly around the world in 80 days"}],
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

    handleSubmit = () => {
        console.log("I got clicked");
        this.setState({
            todos: [...this.state.todos, {id: nanoid(), text: this.state.text}],
            text: ""
        })

    }

    handleChange = (event) => {
        console.log("I got changed");
        this.setState({
            text: event.target.value
        })
    }

    handleDelete = (id) => {
        console.log(id);
        const index = this.state.todos.findIndex(todo => todo.id === id)
        console.log(index)
        const copy = [...this.state.todos];
        copy.splice(index, 1)
        this.setState({
            todos: copy
        })
    }

    render() {
        console.log( "THIS -->", this)
        return (
            <div className="App">
                {/*<h1>{this.state.isClicked === true ? "I have been clicked" : "I have not been clicked"}</h1>*/}
                {/*<button onClick={this.handleClick}>Click me!</button>*/}
                <input type="text" onChange={this.handleChange} value={this.state.text}/>
                <button onClick={this.handleSubmit}>Submit</button>
                {this.state.todos.map((todo) => {
                    return <li className="list-item" key={todo.id}>
                        {todo.text}
                        <button onClick={()=> this.handleDelete(todo.id)}>X</button>
                    </li>
                })}
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
