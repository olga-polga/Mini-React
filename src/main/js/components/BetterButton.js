import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';
export class BetterButton extends Button {

    clickHandler () {
        console.log('BetterButton was clicked!')
    }
    render () {
        return(
            <div>
                <Button onClick={this.clickHandler.bind(this)}>
                    I am a better button!
                </Button>
            </div>
        )
    }
}