import React            from 'react';
import SearchResultItem from './search-result-item';
import { connect }      from 'react-redux';
import { clearSearch }  from '../../actions/search-actions';
import PropTypes        from 'prop-types';

class SearchResultList extends React.Component {

    constructor(props) {
        super(props);
        this.generateSearchLists = this.generateSearchLists.bind(this);
    }

    generateSearchLists = () => {
        return (
            this.props.search.tracks
                .map((track, idx) => {
                return (
                    <SearchResultItem
                        key    = {`nt-${track.trackId}`}
                        track  = { track }
                        index  = { idx }
                    />
                );
            })
        )
    }

    onClear = (e) => {
        e.preventDefault();
        this.props.clearSearch();
        this.props.resetSearch();
    }

    render() {
        return (
            <div>
                <h4> Search result for {this.props.search.searchTerms.artistName}
                    <button
                        className = "btn btn-link"
                        onClick   = {this.onClear}
                    >
                        clear
                    </button>
            </h4>
                <ul className="media-list">
                    { this.generateSearchLists() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        search : state.search
    };
}

export default connect(mapStateToProps, { clearSearch })(SearchResultList);
