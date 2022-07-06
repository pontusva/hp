import React, { useState, useEffect } from "react";
import axios from "axios";

const GryffindorHeads = () => {
	const [heads, setHeads] = useState([]);

	const data = async () => {
		await axios
			.get("https://wizard-world-api.herokuapp.com/Houses")
			.then((data) => setHeads(data.data[0].heads));
	};

	useEffect(() => {
		data();
	}, []);

	if (heads < 1) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen font-montserrat text-cream ">
				<div className="h-72 w-72 bg-amber-600 rounded-full">
					<div className="flex flex-col items-center justify-center w-full h-full">
						<div className="flex flex-row space-x-2">
							<p className="text-2xl">
								{heads[1].firstName}
							</p>
							<p className="text-2xl">
								{heads[1].lastName}
							</p>
						</div>
						<div className="flex flex-row space-x-2">
							<p className="text-2xl">
								{heads[0].firstName}
							</p>
							<p className="text-2xl">
								{heads[0].lastName}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GryffindorHeads;
