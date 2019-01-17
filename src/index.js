import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    constructor(props){
	super(props);
    }
    componentDidMount(){
	document.title = "Options Calculator";
    }
    render(){
	return(
	       <div>
	       <h1>Options Calculator</h1>
	       <p>Current Stock Price</p>
	       <input type="number" placeholder="50"/>
	       <p>Strike Price</p>
	       <input type="number" placeholder="5"/>
	       <p>Risk Free Rate</p>
	       <input type="number" placeholder="2"/>
	       <p>Volatility</p>
	       <input type="number" placeholder="30"/>
	       </div>
	       );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));