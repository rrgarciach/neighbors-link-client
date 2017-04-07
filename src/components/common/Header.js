import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                    </button> <a className="navbar-brand" href="#">Neighbors Link</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li activeClassName="active">
                            <IndexLink to="/">Home</IndexLink>
                        </li>
                        <li>
                            <Link to="memos">Memos</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Header;
