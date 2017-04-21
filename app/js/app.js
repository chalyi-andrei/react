import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <main className="row">
                <h1 className="text-center">Hello world</h1>
            </main>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

class Contact extends Component {
    render() {
        return (
            <li className="class-list-item">
                <img className="class-list-image" src={this.props.image} alt="image"/>
                <div className="class-list-name">{this.props.name}</div>
            </li>
        )
    }
}

var CONTACTS =[
    {
        id: 1,
        name: 'Vasya Pupkin',
        image: 'http://www.placecage.com/gif/80/80'
    },
    {
        id: 2,
        name: 'Petya Cagevich',
        image: 'http://www.placecage.com/gif/75/75'
    },
    {
        id: 3,
        name: 'Ivan Ivanuch',
        image: 'http://www.placecage.com/gif/79/79'
    }
];


class ContactList extends Component {
    render() {
        return (
            <ul className="class-list">
                <input type="text" />
                {
                    CONTACTS.map(function(el) {
                        return <Contact
                            key={el.id}
                            name={el.name}
                            image={el.image}
                        />
                    })
                }
            </ul>
        )
    }
}

ReactDOM.render(<ContactList/>, document.getElementById('contact'))