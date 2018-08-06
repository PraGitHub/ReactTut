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

class Nav extends React.Component{
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default App;