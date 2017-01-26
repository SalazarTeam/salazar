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
    let rawList = this.props.changedFiles;
    rawList = Object.keys(rawList);
    let listOfChangedFiles = [];
    for (let i=0; i<rawList.length; i++) {
      listOfChangedFiles.push(<div id="pathtext">{rawList[i]}</div>)
    }
    let changedFilesText = '';
    if (listOfChangedFiles.length >=1) {
      changedFilesText = 'List of changed files: '
    }

    return (
      <div>
      <span id="horizontalcontainer"> 
      {changedFilesText}{listOfChangedFiles}
      </span>
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
                        filePathChange={this.props.filePathChange}/>
        </div>
      </div>
    );
  }
}


