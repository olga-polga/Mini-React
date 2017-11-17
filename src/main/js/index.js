import React from 'react';
import {render} from 'react-dom';
import { BetterButton } from './components/BetterButton';
import AutosizeInput from 'react-input-autosize';

class App extends React.Component {




    render () {
        var idx = 1;
        var inputValue = "xczxczzxczxczx";
        return <div>

            <BetterButton>Click me!</BetterButton>

            <p>
            Be more reactful
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