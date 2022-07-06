import React from "react";
import GryffindorFacts from "./GryffindorFacts";
import GryffindorHeads from "./GryffindorHeads";
import GryffindorTraits from "./GryffindorTraits";
import Carousel from "framer-motion-carousel";

const GryffindorSlider = () => {
	return (
		<>
			<div className='w-screen bg-scarlet-red'>
				<div className='md:pl-36 md:pr-36'>
					<Carousel autoPlay={false}>
						<div>
							<GryffindorFacts />
						</div>
						<div>
							<GryffindorTraits />
						</div>
						<div>
							<GryffindorHeads />
						</div>
					</Carousel>
				</div>
			</div>
		</>
	);
};

export default GryffindorSlider;
