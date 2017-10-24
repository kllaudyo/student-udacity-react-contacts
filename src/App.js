import React, { Component } from 'react';
import ListContacts from './ListContacts';
import {getAll} from './utils/ContactsAPI';

class App extends Component {

    state = {
        contacts : []
    };

    removeContact = (contact) => {
        this.setState( (state) => ({
            contacts: state.contacts.filter((c)=>(
                c.id !== contact.id
            ))
        }))
    };

    componentDidMount(){
        getAll().then(data => this.setState(this.state.contacts = data))
    }

    render() {
        return (
            <div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
            </div>
        );
    }
}

export default App;
