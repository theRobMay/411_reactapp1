import React, {Component} from 'react';

class Contacts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLiked: false,
            people: [],
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api?results=25")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    people: [...data.results]
                });
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
console.log(this.state.people)
    }


    render() {
        return (
            <div>
                <h2>Contacts:</h2>
                <ul>
                    {this.state.people.map((people) => {
                        return(
                            <li>
                                <img src={people.picture.large} alt={people.name}/>
                                <h4>{people.name.first}{people.name.last}</h4>
                                <p>{people.email}</p>
                                <button onClick={() => {
                                    this.setState({isLiked: !this.isLiked})}}>Show More?</button>
                                {/*{isLiked && <p>{people.city},{people.country}</p>}*/}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Contacts;