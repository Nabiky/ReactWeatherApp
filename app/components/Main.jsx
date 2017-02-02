var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <Nav/>
//                 <h1>
//                     Main Component</h1>
//                 {this.props.children}
//                 {/*this is to render the weather component, the one inside IndexRoute*/}
//             </div>
//         );
//     }
// });

var Main = (props)=>{
  return(
    <div>
      <Nav/>
      <h1> Main Component</h1>
      {props.children} {/*this is to render the weather component, the one inside IndexRoute*/}
    </div>
  )
};

module.exports = Main;
