import { useState } from "react";

export const useShareableState = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [data, setData] = useState({});
	const [picture, setPicture] = useState("");
	return {
		isLoggedIn,
		data,
		setIsLoggedIn,
		setData,
		picture,
		setPicture,
	};
};
