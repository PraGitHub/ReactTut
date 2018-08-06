import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div class="jumbotron bg-dark text-white">
            <h2>{this.props.Heading}</h2>
            <a>Hello World!</a>
         </div>
      );
   }
}

class App1 extends React.Component{
    render(){
        return(
            <div>
                <Header Heading="wgw4g"/>
           </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div class="jumbotron bg-dark text-white">
                <h2>{this.props.Heading}</h2>
                <a>Hello World!</a>
            </div>
        );
    }
}

//export default App;
export default App1;