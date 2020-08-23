import React from "react";
import "./Slider.css";

class Slider extends React.Component {
	index = 0;
	images = [
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=26",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=27",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=28",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=29",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=30",
	];

	render() {
		return (
			<div>
				<img
					src={this.images[this.index]}
					alt="Impossibile caricare l'immagine"
				/>
			</div>
		);
	}
}

export default Slider;
