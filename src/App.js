import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    // get device location
    if(navigator.geolocation) {
      console.log("Supported")
    }else{
      console.log("not supported")
    }
  }
  render(){
    this.return(
      <div className="App">
        thomas
      </div>
    );
  }
}

export default App;
