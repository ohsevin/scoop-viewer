import React, { Component } from 'react';

class InstallButton extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.handleInstallClick = this.handleInstallClick.bind(this);
        this.onClick = this.props.onClick;
    }

    handleInstallClick() {
        this.onClick();
        let ladda = Ladda.create(this.buttonRef.current);
        ladda.start();
    }

    render() {
        return (
            <button 
                ref={this.buttonRef}
                type="button" 
                className="btn btn-primary btn-sm" 
                onClick={this.handleInstallClick}>
                <i className="fa fa-download" aria-hidden="true"></i> Install
            </button> 
        );
    }
}

export default InstallButton;