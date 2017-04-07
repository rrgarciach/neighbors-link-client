import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h2>
                    Hello, world!
                </h2>
                <p>
                    This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
                </p>
                <p>
                    <a className="btn btn-primary btn-large" href="#">Learn more</a>
                </p>
            </div>
        );
    }
}

export default HomePage;
