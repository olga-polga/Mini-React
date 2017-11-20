import React from 'react';
import {render} from 'react-dom';
import {BetterButton} from './components/BetterButton';
import AutosizeInput from 'react-input-autosize';

class App extends React.Component {

    render () {
        var idx = 1;
        var inputValue = "xczxczzxczxczx";
        console.log(process.env.NODE_ENV);
        console.log(process.env.ROUTER_URL);
        console.log(process.env);
        return <div>

            <BetterButton>Click me!</BetterButton>

            <p>
                ENV: {process.env.NODE_ENV}
            </p>
            <p>
                ROUTER: {process.env.REACT_APP_ROUTER_URL}
                ROUTER: {process.env.ROUTER_URL}
            </p>

            <AutosizeInput
                name="form-field-name"
                value={inputValue}
                onChange={function(event) {
                    console.log(event.target.value) ;// event.target.value contains the new value
                }}
            />


        </div>;
    }
}

render(<App/>, document.getElementById('app'));