import React     from 'react';
import PropTypes from 'prop-types';

export default class TrackSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue : '1'
        };

        this.handleChange    = this.handleChange.bind(this);
        this.generateOptions = this.generateOptions.bind(this);
    }

    componentWillMount() {
        this.setState({ selectValue : (this.props.currentValue || '1') });
    }

    handleChange(e) {
        this.setState({ selectValue : e.target.value });
        this.props.callbackParent(e.target.value);
    }

    generateOptions() {
        let options = [];
        for (let i=1; i <= this.props.totalTracks; i++) {
            options.push(<option key = {`qty-${i}`} value = {`${i}`}>{i}</option>);
        }
        return options;
    }

    render() {
        return (
            <div className = "qty-selector">
                <label>{this.props.label}</label>
                <select
                    value     = {this.state.selectValue}
                    onChange  = {this.handleChange}
                >
                    {
                        this.generateOptions()
                    }
                </select>
            </div>
        );
    }
}

TrackSelector.propTypes = {
    totalTracks : React.PropTypes.number.isRequired,
    label    : PropTypes.string.isRequired
};

TrackSelector.defaultProps = {
    totalTracks: 10
};