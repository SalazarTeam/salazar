import React from 'react';

export default class TimeTracker extends React.Component {
   constructor() {
     super();
     this.handleOnSubmit = this.handleOnSubmit.bind(this);
     this.handleKeyPress = this.handleKeyPress.bind(this);
   }

   handleOnSubmit() {
       this.refs.num.value = '';
       this.props.submitTime();
    }
   handleKeyPress(e){
      if(e.key === 'Enter') {
        this.handleOnSubmit();
      }
    }
  
  render() {
    if (this.props.timeOption === 'Saves') {
      return (
        
            <div id="container">
              
              
              <div id="titlebar">Time</div>
              
              <select id="dropdown" onChange={this.props.menuChange}>
                <option value="days">Days</option>
                <option value="saves" selected>Saves</option>
                <option value="commits">Commits</option>
              </select>
              Number of Saves until Snapshot: 
              <div>
              <input id="timechoice" onChange={this.props.filePathChange} ref="num" onKeyPress={this.handleKeyPress} placeholder="Type a number here"></input>
              <button onClick={this.props.submitTime} id="timebtn">Go</button>
              </div>
              
            </div>
          
      );
    }

      if (this.props.timeOption === 'Commits') {
        return (
          
              <div id="container">
                
                
                <div id="titlebar">Time</div>
                
                <select id="dropdown" onChange={this.props.menuChange}>
                  <option value="days">Days</option>
                  <option value="saves" selected>Saves</option>
                  <option value="commits">Commits</option>
                </select>
                Number of commits until SnapShot: 
                <div>
                <input id="timechoice" onChange={this.props.filePathChange} ref="num" onKeyPress={this.handleKeyPress} placeholder="Type a number here"></input>
                <button onClick={this.props.submitTime} id="timebtn">Go</button>
                </div>
                
              </div>
          
        );

      }

      if (this.props.timeOption === 'Days') {
            return (
              
                  <div id="container">
                    
                    <div id="titlebar">Time</div>
                    
                    <select id="dropdown" onChange={this.props.menuChange}>
                      <option value="days">Days</option>
                      <option value="saves" selected>Saves</option>
                      <option value="commits">Commits</option>
                    </select>
                    Number of days until SnapShot:  
                    <div>
                    <input id="timechoice" onChange={this.props.filePathChange} ref="num" onKeyPress={this.handleKeyPress} placeholder="Type a number here"></input>
                    <button onClick={this.props.submitTime} id="timebtn">Go</button>
                    </div>
                    
                  </div>
                
            );



    }
  }
}

