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
            <TabContent/>
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
                <li class="nav-item">
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

class TabContent extends React.Component{
    render(){
        return(
            <div class="tab-content">
                <div id = "Home" class="container tab-pane active">
                    <StrongAlert alerttype="success" message="Home | Yet to come..."/>
                </div>
                <div id = "Profile" class="container tab-pane ">
                    <StrongAlert alerttype="warning" message="Profile | Yet to come..."/>
                </div>
                <div id = "Statistics" class="container tab-pane ">
                    <StrongAlert alerttype="primary" message="Statistics | Yet to come..."/>
                </div>
                <div id = "Create" class="container tab-pane ">
                    <StrongAlert alerttype="dark" message="Create | Yet to come..."/>
                </div>
                <div id = "Request" class="container tab-pane ">
                    <StrongAlert alerttype="danger" message="Request | Yet to come..."/>
                </div>
            </div>
        );
    }
}

class StrongAlert extends React.Component{
    render(){
        var strAlert = "alert alert-"+this.props.alerttype;
        return(
            <div>
                <br/>
                <div class={strAlert}>
                    <strong>
                        {this.props.message}
                    </strong>
                </div>
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