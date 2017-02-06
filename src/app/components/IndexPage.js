import React from 'react';
import Layout from './Layout';


export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      path: '',  
      timeOption: 'Saves',
      changedFiles: [],
      allPaths: [],
    };
    this.filePathChange = this.filePathChange.bind(this);
    this.submitPath = this.submitPath.bind(this); 
    this.menuChange = this.menuChange.bind(this);
    this.submitTime = this.submitTime.bind(this);
  }


  filePathChange(e) {
    // console.log('changing path to ' + e.target.value)
    this.setState({path: e.target.value})
  }

  menuChange() {
    let e = document.getElementById("dropdown");
    let choice = e.options[e.selectedIndex].text.toString();
    this.setState({timeOption: choice})
  }

  submitPath(){
    document.body.style.backgroundColor='#008000';
    let newArr = this.state.allPaths; 
    newArr.push(this.state.path);
    this.setState({allPaths: newArr});
    // console.log('path: ', this.state.path)
    // console.log('allpaths: ', this.state.allPaths)

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/paths",
      data: {path: this.state.allPaths},
      success: function(){console.log('success!')},
      dataType: 'application/json'
    });
  }

  submitTime() {
    switch (this.state.timeOption) {
       case "Saves":
          console.log('submitted saves interval');
          break;
       case "Commits":
          console.log('submitted commits interval');
          break;
       case "Days":
          console.log('submitted days interval');
          break;
    }
  }

  componentDidMount() {
    console.log('component mounted')

   return $.ajax({
          type: "get",
          dataType: 'json',
          url: "http://localhost:3000/changed",
        }).done(function(result){
          //console.log("result:",result);
          this.setState({changedFiles: result});
        }.bind(this));
  }

  render() {
    return (
      <div className="home">
        <Layout filePathChange={this.filePathChange}
                submitPath={this.submitPath}
                allPaths={this.state.allPaths}
                menuChange={this.menuChange}
                timeOption={this.state.timeOption}
                submitTime={this.submitTime}
                changedFiles={this.state.changedFiles}/>

      </div>

    );
  }
}


