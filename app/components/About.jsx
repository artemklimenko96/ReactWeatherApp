var React = require('react');
var About = (props) =>{
      return(
        <div>
      <h1 className = "text-center">About</h1>
      <p>This is my first application created using React js</p>
      <p>Tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> -The js framework used
        </li>
        <li>
          <a href="https://openweathermap.org">Open weather map</a> - API used to fetch the data
        </li>
      </ul>
        </div>
    )
  };
module.exports = About;
