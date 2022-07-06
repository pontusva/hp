import React, {useState, useEffect} from "react";
import {motion} from 'framer-motion';
import axios from 'axios';

const HufflepuffFacts = () => {
	const [facts, setFacts] = useState([]);

	const data = () => {
		axios.get("https://wizard-world-api.herokuapp.com/Houses").then(
			(data) => setFacts(data)
		);
	};

	useEffect(() => {
		data();
	}, []);

	if (facts < 1) {
		return <h1>Loading...</h1>;
	}

	const allowedValues = [
		"Hufflepuff",
		"Yellow and Black",
		"Helga Hufflepuff",
		"Badger",
		"Earth",
		"Fat Friar",
		"Hufflepuff Basement",
	];

	return (
		<>
			<div className="flex flex-row justify-center items-center h-screen text-2xl md:text-align text-center font-montserrat text-cream">
				<div className="h-96 w-96 bg-amber-600 rounded-full">
					<div className="flex flex-col items-center justify-center w-full h-full">
						{Object.values(facts.data[2]).map(
							(key, index) => {
								if (allowedValues.includes(key)) {
									return (
										<motion.div
											className="pt-3"
											initial={{
												opacity: 0,
												scale: 0.6,
											}}
											animate={{
												opacity: 1,
												scale: 0.9,
											}}
											key={index}
										>
											<ul>
												<li className="">
													{key}
												</li>
											</ul>
										</motion.div>
									);
								}
								return null;
							}
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default HufflepuffFacts;
