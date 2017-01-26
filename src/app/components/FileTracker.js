import React from 'react';

export default class FileTracker extends React.Component {
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
    let listOfPaths = [];
    for (let i=0; i<this.props.allPaths.length; i++) {
      listOfPaths.push(<div id="pathtext">{this.props.allPaths[i]}</div>)
    }

    return (
      <div id="container">
        <div id="titlebar">Or on file change</div>
          <div>
            <input id="filepath" ref="path" onChange={this.props.filePathChange} onKeyPress={this.handleKeyPress} placeholder="Type your file path here"></input>
            <button onClick={this.handleOnSubmit} id="filepathbtn">Go</button>
            {listOfPaths}
          </div>
      </div>
    );
  }
}




// <input type="file" id="uploadpath" webkitdirectory directory multiple/>
//           <input type="button" id="uploadpathbtn" onClick={this.handleOnSubmit}/> will try this later, for file path browse


