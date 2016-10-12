import React from 'react';

export default class Confirm extends  React.Component {
    constructor (props) {

        super(props);
        this.state =  {
            className: 'modal fade'
        };
    }

    show () {
        this.setState({ className: 'modal fade show' });
        setTimeout(() => {
            this.setState({ className: 'modal fade show in' });
        }, 0);
    }
    hide () {
      // Fade out the help dialog, and totally hide it after a set timeout
      // (once the fade completes)
      this.setState({ className: 'modal fade show' });
      setTimeout(() => {
        this.setState({ className: 'modal fade' });
      }, 400);
    }
    render () {
        var that = this;

        var centerStyle = {textAlign:"center"};
        let buttons = [];

        if (this.props.confirm) {
            if (!this.props.confirm.callback) { 
                this.props.confirm.callback = function () {
                    that.hide();   
                }
            }
            if (!this.props.confirm.text) {
                this.props.confirm.text = '确认';
            }

            let marginStyle = {marginRight: 20};
            
            buttons.push(
                <button type="button" className="btn btn-primary" style={marginStyle}
                    onClick={this.props.confirm.callback.bind(this)}>{this.props.confirm.text}</button>
                );
        }

        if (!this.props.cancel) {
            this.props.cancel = {callback: this.hide, text: '取消'}

            if (!this.props.confirm) {
                this.props.cancel.text = '关闭';
            }
        }

        buttons.push(<button type="button" className="btn btn-default" onClick={this.props.cancel.callback.bind(this)}>{this.props.cancel.text}</button>);


      let maskStyle;
      if (this.props.mask) {
        maskStyle = {backgroundColor: 'rgba(0,0,0,.3)'};
      }

                        
      return (
        <div className={this.state.className} style={maskStyle}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" aria-hidden="true" onClick={this.hide.bind(this)}>X</button>
                <h4 className="modal-title">{this.props.title}</h4>
              </div>
              <div className="modal-body detail-page">
                {this.props.children}
              </div>
              <div className="modal-footer" style={centerStyle}>

                {buttons} 

              </div>
            </div>
          </div>
        </div>
      );
    }
}

