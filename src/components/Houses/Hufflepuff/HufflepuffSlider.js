import React from 'react'
import Carousel from "framer-motion-carousel";
import HufflepuffFacts from './HufflepuffFacts';

const HufflepuffSlider = () => {
  return (
		<>
			<Carousel>
				<div>
					<HufflepuffFacts />
				</div>
			</Carousel>
		</>
  );
}

export default HufflepuffSlider