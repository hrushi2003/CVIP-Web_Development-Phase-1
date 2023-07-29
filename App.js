import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      iteration:'Be yourself,everyone else is already taken',
      author:'Oscar Wilde'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(){
    var data ={}
    const fetchData = () =>{
      fetch("https://api.quotable.io/random").then((response) =>response.json()).then((info) =>{
        data.content = info["content"];
        data.writer = info["author"];
        this.setState({
          iteration:data.content,
          author:data.writer
      })
      })
    }
    fetchData();
  }
  render (){
  return (
    <div>
      <div className='heading'>
      <h1>Quote of the Day</h1></div>
      <div className='line'>
        <p className='text'><i className="fa fa-quote-left"></i> {this.state.iteration} <i className='fa fa-quote-right'></i>
        </p>
        <div className='author'>- {this.state.author}</div>
        </div>
        <div className='buttons'>
        <button className ="next" onClick={this.handleChange}>Next</button>
        </div>
    </div>
  )
  }
}


function App() {
  return (
    <div className="App">
      <div className="container">
          <Content />
      </div>
    </div>
  );
}

export default App;
