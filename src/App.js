import React, { Component } from 'react';
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

    navigateToCreate = () => {
        this.setState({
            screen:'create'
        })
    };

    componentDidMount(){
        ContactsApi.getAll().then( (contacts) => this.setState({contacts : contacts}) )
    }

    render() {
        return (
            <div>

                {this.state.screen === 'list' && (
                    <ListContacts
                        onDeleteContact={this.removeContact}
                        onNavigate={this.navigateToCreate}
                        contacts={this.state.contacts} />
                )}

                {this.state.screen === 'create' &&(
                    <CreateContact/>
                )}

            </div>
        );
    }
}

export default App;
