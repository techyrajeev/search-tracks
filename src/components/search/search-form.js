import React                   from 'react';
import { connect }             from 'react-redux';
import TextField               from '../common/text-field';
import SpinButton              from '../common/spin-button';
import { search }              from '../../actions/search-actions';
import { isEmpty, isEmptyObj } from '../../utils/utility';
import PropTypes               from 'prop-types';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artistName  : '',
            tracks  : '',
            errors    : {},
            isLoading : false
        };
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    validateInput(state) {
        let errors = {};
        if(isEmpty(state.artistName)) {
             errors.username = 'Artist name is required';
        }

        if(isEmpty(state.tracks)) {
             errors.tracks = 'No of tracks is required';
        }

        return {
            errors,
            isValid : isEmptyObj(errors)
        };

    }

    isValid() {
        const { errors, isValid } = this.validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSearch(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors : {}, isLoading : true});

            this.props.search(this.state)
                .then((res) => {
                    if(res == null || res.length == 0) {
                        this.setState({ errors: { errorDesc : "No result found!" }, isLoading: false });
                    } else {
                        this.props.closeModal();
                    }
                })
                .catch((err) => {
                    return err.response.json();
                })
                .then((err) => {
                    this.setState({errors : err, isLoading : false});
                });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value.trim() });
    }

    render() {
        const { errors, username, password, isLoading } = this.state;

        return (
            <form onSubmit={this.onSearch} className="login-form">
                {
                    errors.errorDesc
                        &&
                    <div className="alert alert-danger">
                        <a href="#" className="close"
                            data-dismiss="alert"
                            aria-label="close"
                        >
                            &times;
                        </a>
                        {errors.errorDesc}
                    </div>
                }

                <TextField
                    name     = "artistName"
                    label    = "Artist Name"
                    value    = {artistName}
                    error    = {errors.artistName}
                    onChange = {this.onChange}
                />

                <TextField
                    name     = "tracks"
                    label    = "No. of tracks"
                    value    = {tracks}
                    error    = {errors.tracks}
                    onChange = {this.onChange}
                    type     = "number"
                />

                <div className="form-group text-center">
                    <SpinButton
                        classNames  = "btn btn-primary btn-lg"
                        buttonText  = {"Searching"}
                        spinText    = {"Searching ..."}
                        showSpinner = {isLoading}
                        inputType   = "button"
                    />
                </div>
            </form>
        );
    }
}

SearchForm.propTypes = {
    search : PropTypes.func.isRequired
};

SearchForm.contextTypes = {
    router : PropTypes.object.isRequired
};

export default connect(null, { search })(SearchForm);
