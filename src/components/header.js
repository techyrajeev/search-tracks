import React       from 'react';
import { Link }    from 'react-router';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a
                        href          = "#"
                        className     = "dropdown-toggle"
                        data-toggle   = "dropdown"
                        role          = "button"
                        aria-expanded = "false"
                    >
                    </a>
                    <ul className="dropdown-menu" role="menu">
                        <li>
                        </li>
                    </ul>
                </li>
            </ul>
        );

        return (
            <div className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><span>Search Track</span></a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-ex-collapse">
                    </div>
                </div>
            </div>
        );
    }
}

