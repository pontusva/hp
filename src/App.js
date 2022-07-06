import GryffindorSlider from "./components/Houses/Gryffindor/GryffindorSlider";
import HufflepuffSlider from "./components/Houses/Hufflepuff/HufflepuffSlider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/gryffindor' element={ <GryffindorSlider /> } />
          <Route path='/hufflepuff' element={ <HufflepuffSlider /> } />
				</Routes>
			</Router>
		</>
	);
}

export default App;
