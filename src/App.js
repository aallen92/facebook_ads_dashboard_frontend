import DashBoard from "./Components/DashBoard";
import { FacebookAuth } from "./Components/FacebookAuth";
import { useShareableState } from "../src/Context/Session";
import { useBetween } from "use-between";

const useSharedState = () => useBetween(useShareableState);

function App() {
	const { isLoggedIn } = useSharedState();
	console.log(isLoggedIn);
	if (isLoggedIn) {
		return <DashBoard />;
	}

	return <FacebookAuth />;
}

export default App;
