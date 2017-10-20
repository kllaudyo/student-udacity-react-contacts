import React, { Component } from 'react';

class ContactList extends Component{
    render(){
        const people = this.props.contacts;
        return (
            <ol>
                {people.map((name,index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ol>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <ContactList contacts={['Claudio','Damares','Magali','Nala']} />
          <ContactList contacts={['Clidenor','Adalia','Joao','Quitéria']} />

      </div>
    );
  }
}

export default App;
