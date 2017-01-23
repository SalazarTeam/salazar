import React from 'react';
import TimeTracker from './TimeTracker';
import FileTracker from './FileTracker';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleOnSubmit() {
        this.refs.path.value = '';
        this.props.submitPath();
    }
   handleKeyPress(e){
      if(e.key === 'Enter') {
        this.handleOnSubmit();
      }
    }
  
  render() {
    let newArr = [];
    for (let i=0; i<this.props.allPaths.length; i++) {
      newArr.push(<div id="pathtext">{this.props.allPaths[i]}</div>)
    }

    return (
      <div>
      <div id="titlebar" className="title-bar">Tracking via...</div>
        <div id="pageholder">
           <TimeTracker allPaths={this.props.allPaths}
                        menuChange={this.props.menuChange}
                        submitTime={this.props.submitTime}
                        filePathChange={this.props.filePathChange}
                        timeOption={this.props.timeOption}
                        
                        />
           <FileTracker submitPath={this.props.submitPath}
                        allPaths={this.props.allPaths}
                        filePath={this.props.filePath}/>
        </div>
        
      </div>
    );
  }
}