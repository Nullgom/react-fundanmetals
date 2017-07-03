import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    render(){

        return (
            <div>
                <button onClick={()=> {this.setState({name: '소녀시대'});}} > Click Me!</button>
                <h1>Hello!!!!!ddddfslkdfljsdlf {this.state.name}</h1>
            </div>
        );
    }
}

export default App;
