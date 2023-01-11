import { useState } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { FaFacebook } from "react-icons/fa";
import { useBetween } from "use-between";
import { useShareableState } from "../Context/Session";

const useSharedState = () => useBetween(useShareableState);

export const FacebookAuth = () => {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [data, setData] = useState({});
	const { isLoggedIn, setIsLoggedIn, data, setData } = useSharedState();
	const [picture, setPicture] = useState("");
	const appId = "1372202453543125";

	const responseFacebook = (response) => {
		console.log(response);
		if (response.status === "unknown") {
			alert("Login failed!");
			setIsLoggedIn(false);
			return false;
		}
		setData(response);
		setPicture(response.picture.data.url);
		// if (response.accessToken) {
		// 	setIsLoggedIn(true);
		// } else {
		// 	setIsLoggedIn(false);
		// }
	};

	const logout = () => {
		setIsLoggedIn(false);
		setData({});
		setPicture("");
	};

	return (
		<div className="container">
			{!isLoggedIn && (
				<FacebookLogin
					onSuccess={(response) => {
						console.log("Login Success!", response);
						if (response.accessToken) {
							setIsLoggedIn(true);
						} else {
							setIsLoggedIn(false);
						}
					}}
					onFail={(error) => {
						console.log("Login Failed!", error);
					}}
					onProfileSuccess={(response) => {
						console.log("Get Profile Success!", response.picture.data.url);
						responseFacebook(response);
					}}
					appId={appId}
					children={
						<div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center ">
							<FaFacebook /> <span className="px-2">Login with Facebook</span>
						</div>
					}
				/>
			)}

			{isLoggedIn && (
				<div className="card ">
					<div className="card-body flex justify-between items-center w-full">
						<img className="rounded" src={picture} alt="Profile" />
						<h5 className="card-title">{data.name}</h5>
						<p className="card-text">Email ID: {data.email}</p>
						<button
							href="#"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  "
							onClick={logout}
						>
							Logout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
