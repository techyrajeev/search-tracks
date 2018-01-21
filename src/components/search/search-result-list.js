import React                 from 'react';
import SearchResultItem      from './search-result-item';
import { connect }           from 'react-redux';
import PropTypes             from 'prop-types';

class SearchResultList extends React.Component {

    constructor(props) {
        super(props);
        this.generateSearchLists = this.generateSearchLists.bind(this);
    }

    generateSearchLists() {
        return (
            this.props.tracks
                .map((track, idx) => {
                return (
                    <SearchResultItem
                        key    = {`nt-${track.tracksId}`}
                        planet = { tracks }
                        index  = { idx }
                    />
                );
            })
        )
    }

    render() {
        return (
            <ul className="media-list">
                { this.generateSearchLists() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        tracks : state.select.tracks
    };
}

export default connect(mapStateToProps)(SearchResultList);
