
var React = require('react');

var WeatherMessage = ({temp, location})=> {
  return(
   <h3 className="text-center"> It's is {temp} in {location} </h3>
  )
};

module.exports = WeatherMessage;


// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} = this.props;
//
//    return(
//     <h3> It's is {temp} in {location} </h3>
//    );
//   }
// });
//
// var WeatherMessage = (props)=>{
//   var {temp, location} = props;
//   return(
//    <h3> It's is {temp} in {location} </h3>
//   );
// }
