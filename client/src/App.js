import { Component } from "react";
import './App.css';

class App extends Component {
    state = {
        message: ""
    }

    handleClick = async () => {
        await fetch("http://localhost:3000/api/test", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({message: this.state.message})
        }) 
        .then(response => response.json())
        .then(serverData => {
            console.log("Success:", serverData)
            this.setState({
                message: serverData.message
            })
        })
        .catch(error => {
            console.error("Error:", error)
            this.setState({
                message: "error"
            })
        })
    }

    render() {
        return (
            <div className="App">
                <div>MERN BOILERPLATE</div>
                <button onClick={this.handleClick}>Test</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}

export default App;
