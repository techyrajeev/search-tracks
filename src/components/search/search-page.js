import React      from 'react';
import SearchForm from './search-form';
import BsModal    from '../common/bs-modal';
import SearchResultList from './search-result-list';
import SimpleButton from '../common/simple-button';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchModal : false
        };
    }

    handleHideSearchModal = () => {
        this.setState({
            showSearchModal : false
        })
    }

    handleShowSearchModal = () => {
        this.setState({
            showSearchModal : true
        })
    }

    getSearchModal = () => {
        return (
            <BsModal
                handleHideModal={this.handleHideSearchModal}
                title="Search Track"
                id={"searchModal"}
            >
                <SearchForm closeModal={this.props.handleHideSearchModal} />
            </BsModal>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <SimpleButton
                            whenClicked={this.handleShowSearchModal}
                        >
                            Search
                        </SimpleButton>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <SearchResultList />
                    </div>
                </div>
                {this.state.showSearchModal ? this.getSearchModal() : null}
            </div>
        );
    }
}
