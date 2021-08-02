import React, { Fragment, useState } from "react";
import TrafficLight from "./trafficLight.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stopLight: "red",
		warningLight: "yellow",
		goLight: "green"
	});

	const changeColor = () => {};

	return (
		<Fragment>
			<div className="container text-center justify-content-center">
				<div className="title row">
					<p>Choose one!</p>
				</div>
				<div className="containerLights row">
					<TrafficLight
						color={color.stopLight}
						clickChange={() => {
							setColor({
								stopLight: "red glow",
								warningLight: "yellow",
								goLight: "green"
							});
						}}
					/>
					<TrafficLight
						color={color.warningLight}
						clickChange={() => {
							setColor({
								stopLight: "red",
								warningLight: "yellow glow",
								goLight: "green"
							});
						}}
					/>
					<TrafficLight
						color={color.goLight}
						clickChange={() => {
							setColor({
								stopLight: "red",
								warningLight: "yellow",
								goLight: "green glow "
							});
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
