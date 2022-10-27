import React, {Component} from 'react';

class Characters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLiked: false,
            beers: [],
        };
    }

    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    beers: [...data]
                    });
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
        return (
            <div>
                <h2>Beers:</h2>
                <ul>
                    {this.state.beers.map((beers) => {
                        return(
                            <li>
                                <img src={beers.image_url} alt={beers.name}/>
                                <h4>{beers.name}</h4>
                                <p>{beers.tagline}</p>
                                <button onClick={() => {
                                    this.setState({isLiked: !this.isLiked})}}>Like Me?</button>
                                <p>Liked?</p>
                                <p>{this.state.isLiked}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Characters;