import React, { Component } from 'react';
import ManagementApp from './Components/management/ManagementApp';
import './bootstrap.css';
import './App.css';
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <ManagementApp />
      
      {/*<Counter />*/}
      </div>
    );
  }

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="">
//         Hello React
//         <FirstComponent/>
//         <SecondComponent />
//         <ThirdComponent /> 
//       </div>
//     );
//   }


}

export default App;
