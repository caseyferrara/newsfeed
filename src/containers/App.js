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
    this.state = {
      posts: posts,
      searchfield: '',
      title: '',
      body: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value })
    console.log(event.target.value);
  }

  onBodyChange = (event) => {
    this.setState({ body: event.target.value })
    console.log(event.target.value);
  }

  submitPost = (event) => {
    if (this.state.title.length === 0) {
      return <h1>Please enter a title and description.</h1>
    } else {
          event.preventDefault();
          this.setState({ posts: [...this.state.posts, { id: Math.random(), title: this.state.title, body: this.state.body }]});
    }
  }

  render() {
    const filteredPosts = this.state.posts.filter(posts => {
      return posts.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='white'>News Feed</h1>
        <div className={classes.Ex}>
          <label for='item' className={classes.Label}>Add your own post!</label>
          <input className={classes.Input} type='checkbox' id='item' contenteditable/>
        <div className={classes.Hide}>
          <div className={classes.Inner}>
            <NewPost bodyChange={this.onBodyChange} titleChange={this.onTitleChange} submitPost={this.submitPost}/>
          </div>
        </div>
        </div>
        <div>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <Scroll>
        <NewsFeed posts={filteredPosts}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
