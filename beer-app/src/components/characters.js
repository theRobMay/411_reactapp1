import React, {Component} from 'react';

class Characters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
        };
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    characters: [...data.results]
                    });
            });
    }

    render() {
        return (
            <div>
                <h2>Rick & Morty Characters</h2>
                <ul>
                    {this.state.characters.map((character) => {
                        return(
                            <li>
                                <img src={character.image} alt={character.name}/>
                                <h4>{character.name}</h4>
                                <p>{character.status}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Characters;