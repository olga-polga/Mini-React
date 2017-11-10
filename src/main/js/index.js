import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p>latest news on react</p>;
    }i
}

render(<App/>, document.getElementById('app'));