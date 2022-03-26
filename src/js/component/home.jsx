import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component

const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<Navbar />
			</div>

			<div className="row"></div>
			<Jumbotron
				title="Vaquitas"
				text="Aquí se muestra una variedad de vaquitas"
			/>
			<div className="row">
				<Card
					img="https://i.pinimg.com/originals/df/d0/0e/dfd00e9f253318e11182df23c766479b.jpg"
					title="Vaquitas chiquitas"
				/>
				<Card
					img="https://www.masquesaludanimal.es/posts/asset_upload_file89331_522110.jpg"
					title="Peludita"
				/>
				<Card
					img="https://www.masquesaludanimal.es/posts/easset_upload_file78831_522110_e.jpg"
					title="Con joroba"
				/>
				<Card
					img="https://www.masquesaludanimal.es/posts/easset_upload_file48125_522110_e.jpg"
					title="Puro estilo"
				/>
			</div>
		</div>
	);
};

export default Home;
