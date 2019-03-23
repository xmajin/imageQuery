import React, { Component } from 'react';
import axios from 'axios';

import './resources/styles/App.scss';
import Searchinput from './components/searchinput.jsx';
import Imagegrid from './components/imagegrid.jsx';
import Savedqueries from './components/savedqueries.jsx';


class App extends Component {
    constructor() {
        super();
        this.state = {
            imgs: [],
            loadingState: true,
            lastSearch: '',
            page: 1
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    pageUp = e => {
        if(this.state.page > 0) {
            this.setState({
                page: this.state.page + 1
            })
            this.performSearch();
        } else {
            this.performSearch();
        }
    };

    pageDown = e => {
        if(this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
            this.performSearch();
        } else {
            this.performSearch();
        }
    };

    performSearch = (query = this.state.lastSearch, page = this.state.page) => {
        axios
            .get(
                `https://api.unsplash.com/search/photos/?page=${page}}&per_page=10&query=${query}&client_id=ecbec3e693674cb8157895646118a3356ba1618c7739d0a3d9b25fb8b7f10654`
            )
            .then(data => {
                this.setState({
                    imgs: data.data.results,
                    loadingState: false,
                    lastSearch: query,
                 });
            })
            .catch(err => {
                console.log("Error", err);
            });
    };

  render() {
    return (
      <div className="App">
            <Searchinput onSearch={this.performSearch} />
            <Imagegrid data={this.state.imgs} page={this.state.page} />
            <Savedqueries data={this.state.lastSearch}/>
            <div id="buttons">
            <button id="paginator" onClick={this.pageDown}>Previous</button>
            <button id="paginator" onClick={this.pageUp}>Next</button>
            </div>
      </div>
    );
  }
}

export default App;
