//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="Counter">
			<div className="Clock">
				<i className="fas fa-clock"></i>
			</div>
			<div className="fiveDigit">{props.digitFive % 10}</div>
			<div className="fourDigit">{props.digitFour % 10}</div>
			<div className="threeDigit">{props.digitThree % 10}</div>
			<div className="twoDigit">{props.digitTwo % 10}</div>
			<div className="oneDigit">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFive: propTypes.number,
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number
};

let counter = 0;
setInterval(function() {
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(five, four, three, two, one);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
