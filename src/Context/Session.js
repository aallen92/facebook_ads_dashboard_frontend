import { useState } from "react";

export const useShareableState = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [data, setData] = useState({});
	return {
		isLoggedIn,
		data,
		setIsLoggedIn,
		setData,
	};
};
