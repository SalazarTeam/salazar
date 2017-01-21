import React from 'react';
import Layout from './Layout';


export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      path: '',  
      allPaths: [],
    };
    this.filePathChange = this.filePathChange.bind(this);
    this.submitPath = this.submitPath.bind(this); 
    this.menuChange = this.menuChange.bind(this);
  }

  filePathChange(e) {
    this.setState({path: e.target.value})
  }

  menuChange() {
    let e = document.getElementById("dropdown");
    let strUser = e.options[e.selectedIndex].text;
    console.log(strUser)
  }

  submitPath(){
    
    
    let newArr = this.state.allPaths; 
    newArr.push(this.state.path);
    this.setState({allPaths: newArr});


    $.ajax({
      type: "POST",
      url: "http://localhost:3000/paths",
      data: {path: this.state.allPaths},
      success: function(){console.log('success!')},
      dataType: 'application/json'
    });
  }
  

  render() {
    //console.log(this.state.messages)
    return (
      <div className="home">
      
        <Layout filePath={this.filePathChange}
                submitPath={this.submitPath}
                allPaths={this.state.allPaths}
                menuChange={this.menuChange}
        />

        
          
      </div>
    );
  }
}