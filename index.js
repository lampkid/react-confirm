import React from 'react';
import { render } from 'react-dom';

import Confirm from './react-confirm';

class ConfirmDemo extends React.Component {
    show () {
        this.refs.confirm.show();
    }
    hide () {
        this.refs.confirm.hide();
    }
    render () {
        return (
            <div>
                <button onClick={this.show.bind(this)}>show</button>
                <button onClick={this.hide.bind(this)}>hide</button>
                <Confirm ref="confirm" confirm={{text: '确认'}} title="confirm title" mask={true}>
                    <div style={{textAlign:'center'}}> confirm body msg </div>
                </Confirm>
            </div>
        );
    }
}

render(<ConfirmDemo />, document.getElementById('container'));
