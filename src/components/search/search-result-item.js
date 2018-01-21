import React     from 'react';
import PropTypes from 'prop-types';
import Utlis     from '../../utils/utility';

export default class SearchResultItem extends React.Component {

    constructor(props) {
        super(props);
    }

    getTrackStructure(track) {
        return (
            <li className="media">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" src={track.artworkUrl60} />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{track.artistName}</h4>
                </div>
            </li>
        );
    }

    render() {
        return this.getTrackStructure(this.props.track);
    }
}
