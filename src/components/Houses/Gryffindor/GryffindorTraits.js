import React, { useState, useEffect } from "react";
import axios from "axios";

const GryffindorTraits = () => {
	const [traits, setTraits] = useState([]);

	const data = async () => {
		await axios
			.get("https://wizard-world-api.herokuapp.com/Houses")
			.then((data) => setTraits(data.data[0].traits));
	};

	useEffect(() => {
		data();
	}, []);

	if (traits < 1) {
		return <h1>Loading...</h1>;
	}

	console.log(traits);

	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen text-2xl font-montserrat text-cream">
				<div className="bg-amber-600 h-80 w-80 rounded-full">
					<div className="flex flex-col items-center justify-center w-full h-full">
						{traits.map((trait, index) => {
							return (
								<div key={index}>
									<ul>
										<li className="pt-3">
											{trait.name}
										</li>
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default GryffindorTraits;
