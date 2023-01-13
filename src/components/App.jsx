import React, { Component } from 'react';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

 export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

   render() {


    return(
<div>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={() => this.setState(prevState=>({good: prevState.good +1}))}>Good</button>
      <button type="button" onClick={() => this.setState(prevState=>({neutral: prevState.neutral +1}))}>Neutral</button>
      <button type="button" onClick={() => this.setState(prevState=>({bad: prevState.bad +1}))}>Bad</button>
      <h2>Statistics</h2>

      <p>Good: {this.state.good}</p>
      <p>Neutral:{this.state.neutral}</p>
      <p>Bad:{this.state.bad}</p>
     
</div>
    )
  };


}

