import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="1.html">JavaScript</a></li>
      </ul>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
          <h2>{this.props.title}</h2>
              {this.props.desc}
          </article>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="REACT" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language.
"></Content>
      </div>
    );
  }
}

export default App;