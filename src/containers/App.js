import React, { Component } from 'react';
import { posts } from '../posts';
import SearchBox from '../components/SearchBox';
import NewsFeed from '../components/NewsFeed';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      posts: posts,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredPosts = this.state.posts.filter(posts => {
      return posts.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='white'>News Feed</h1>
        <div>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <NewsFeed posts={filteredPosts}/>
      </div>
    );
  }
}

export default App;
