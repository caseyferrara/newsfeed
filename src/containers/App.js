import React, { Component } from 'react';
import { posts } from '../posts';
import NewPost from '../components/NewPost';
import SearchBox from '../components/SearchBox';
import NewsFeed from '../components/NewsFeed';
import classes from '../components/Main.module.css';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = { // Initializing the local state
      posts: posts,
      searchfield: '',
      title: '',
      body: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }) // Binds the search input value to the searchfield for searching
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value }) // Binds the title input value to title for a new post
  }

  onBodyChange = (event) => {
    this.setState({ body: event.target.value }) // Binds the body input value to body for a new post
  }

  submitPost = (event) => {
    if (this.state.title.length === 0  || this.state.body.length === 0) {
      return alert('Please enter a title and description.'); // Alerts the user if they haven't entered anything the required fields
    } else {
          event.preventDefault();
          this.setState({ posts: [...this.state.posts, { id: Math.random(), title: this.state.title, body: this.state.body }]});
          // When the user clicks the add button it will take the value from the title & body input and add it to the posts array
    }
  }

  render() {
    const filteredPosts = this.state.posts.filter(posts => { // Filters through the post array based upon the searchfield input
      return posts.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='white'>News Feed</h1>
          <div>
            <NewPost bodyChange={this.onBodyChange}titleChange={this.onTitleChange} submitPost={this.submitPost}/>
          </div>
        <div>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <Scroll>
        <NewsFeed posts={filteredPosts}/>
        </Scroll>
        <footer>Created by Casey Ferrara</footer>
      </div>
    );
  }
}

export default App;
