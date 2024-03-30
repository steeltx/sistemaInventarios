import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { Categories } from "./components/Categories";
import { UnitMeasure } from "./components/UnitMeasure";
import { Header } from "./components/Header";
import { RSILayout } from "./layout/RSILayout";

function App() {
	return (
		<RSILayout>
			{/* <Categories /> */}
			<UnitMeasure />
		</RSILayout>
	)
}

export default App;