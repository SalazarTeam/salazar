import React from 'react';

export default class TimeTracker extends React.Component {
  
  render() {
    let newArr = [];
    for (let i=0; i<this.props.allPaths.length; i++) {
      newArr.push(<div id="pathtext">{this.props.allPaths[i]}</div>)
    }

    return (
      
          <div id="container">
            
            
            <div id="titlebar">Time</div>
            
            <select id="dropdown" onChange={this.props.menuChange}>
              <option value="days">Days</option>
              <option value="saves" selected>Saves</option>
              <option value="commits">Commits</option>
            </select>
              
            <input id="timechoice" onChange={this.props.filePath} placeholder="Type a number here"></input>
            <button onClick={this.props.submitTime} id="timebtn">Go</button>
            
            
          </div>
        
    );
  }
}