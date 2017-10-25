import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsApi from './utils/ContactsAPI';

class App extends Component {

    state = {
        contacts : []
    };

    removeContact = (contact) => {
        this.setState( (state) => ({
            contacts: state.contacts.filter((c)=>(
                c.id !== contact.id
            ))
        }));

        ContactsApi.remove(contact);

    };

    componentDidMount(){
        ContactsApi.getAll().then( (contacts) => this.setState({contacts : contacts}) )
    }

    render() {
        return (
            <div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                <CreateContact/>
            </div>
        );
    }
}

export default App;
