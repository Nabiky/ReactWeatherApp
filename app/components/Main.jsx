var React = require('react');
var Nav = require('Nav');


var Main = (props)=>{
  return(
  <div>
      <Nav/>
     <div className="row">
       <div className="columns medium-6 large-4 small-centered">
      {props.children} {/*this is to render the weather component, the one inside IndexRoute*/}
    </div>
  </div>
</div>
 );
}

module.exports = Main;
