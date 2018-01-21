import React from 'react';
import SimpleButton from './simple-button';

export default class BsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    componentDidMount() {
        $('#'+this.props.id).modal('show');
        $('#'+this.props.id).on('hidden.bs.modal', this.props.handleHideModal);
        $('#'+this.props.id).on('shown.bs.modal', function() {
            $('[data-modalfocus]', this).focus();
        });
    }

    getCrossButtonComponent() {
        if (this.props.dontShowCrossButton) {
            return;
        }

        return (
            <button type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }

    handleConfirm() {
        if(this.props.onConfirm) {
            this.props.onConfirm();
        }
    }

    render() {
        let confirmButton = null;
        let cancelButton = null;

        if(this.props.confirm) {
            confirmButton = (
                <SimpleButton whenClicked = {this.handleConfirm}
                className = "btn-primary"
                title={this.props.confirm}
                subTitleClassName="caret"
                />
            );
        }

        if(this.props.cancel) {
            cancelButton = (
                <button type="button"
                className="btn btn-default pull-left"
                data-dismiss="modal"
                >
                    <span className="glyphicon glyphicon-cancel"></span> {this.props.cancel}
                </button>
            );
        }

        let disabledDefaultCloseStyles = {};
        if(this.props.disableDefaultClose) {
            disabledDefaultCloseStyles = {
                "data-backdrop":"static",
                "data-keyboard":"false"
            };
        }

        return (
            <div className="modal fade" id={this.props.id} { ...disabledDefaultCloseStyles}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            { this.getCrossButtonComponent()}
                            <h2 className="modal-title text-center">{this.props.title}</h2>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {cancelButton}
                            {confirmButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}