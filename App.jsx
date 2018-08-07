import React from 'react';

class App extends React.Component {
   render() {
      return (
          <div>
            <div class="jumbotron bg-dark text-white">
                <h2>{this.props.heading}</h2>
                <a>Hello World!</a>
            </div>
            <Nav titles={this.props.titles}/>
         </div>
      );
   }
}
//Nav titles={data:["title":'Home',"title":'Profile',"title":'Statistics',"title":'Create',"title":'Request']}/>
class Nav extends React.Component{
    render(){
        var values = this.props.titles.map(function(title, i){
            var href = "#"+title;
            return (
                <li class="nav nav-item">
                    <a class="nav-link" data-toggle="tab" href={href}>{title}</a>
                </li>
            );
          });
        return(
            <div class="container">
                <ul class="nav nav-tabs">
                    {values}
                </ul>
            </div>
        );
    }
}
/*class App1 extends React.Component{
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
}*/

//export default App;
export default App;
export {Nav};