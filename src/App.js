import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsApi from './utils/ContactsAPI';

class App extends Component {

    state = {
        screen : 'list', //list, create
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

                <Route exact path="/" render={() => (
                    <ListContacts
                        onDeleteContact={this.removeContact}
                        contacts={this.state.contacts} />
                )} />

                <Route path="/create" component={CreateContact} />

            </div>
        );
    }
}

export default App;
