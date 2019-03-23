import React, { Component } from 'react';
import '../resources/styles/Searchinput.scss';
import Searchbutton from '../components/searchbutton.jsx';
import Savebutton from '../components/savebutton.jsx';

class Searchinput extends Component {
    state = {
        searchQuery: '',
    };

    onSearchChange = e => {
        this.setState({ searchQuery: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    };


  render() {

    return (
      <form className="Searchinput" onSubmit={this.handleSubmit}>
        <input ref={input => (this.query = input)} placeholder=" Search.." onChange={this.onSearchChange}/>
            <Searchbutton />
            <Savebutton />
      </form>
      
    );
  }
}

export default Searchinput;
