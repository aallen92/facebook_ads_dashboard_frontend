import { FaFacebook } from "react-icons/fa";
import { useBetween } from "use-between";
import { useShareableState } from "../Context/Session";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { firebaseAuth } from "../firebase.js";

const useSharedState = () => useBetween(useShareableState);

export const FacebookAuth = () => {
	const { isLoggedIn, setIsLoggedIn, data, setData, picture, setPicture } =
		useSharedState();

	const facebookLogin = () => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(firebaseAuth, provider) // firebaseAuth is from firebase.js
			.then((result) => {
				const user = result.user;
				const credential = FacebookAuthProvider.credentialFromResult(result);
				const accessToken = credential.accessToken;
				if (user) {
					setIsLoggedIn(true);
					setData(user);
					setPicture(`${user.photoURL}?access_token=${accessToken}`);
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				const credential = FacebookAuthProvider.credentialFromError(error);
				console.log("errorCode", errorCode);
				console.log("errorMessage", errorMessage);
				console.log("email", email);
				console.log("credential", credential);
			});
	};

	const logout = () => {
		setIsLoggedIn(false);
		setData({});
		setPicture("");
	};

	return (
		<div className="flex justify-center items-center h-[100vh]">
			<div
				onClick={facebookLogin}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center "
			>
				<FaFacebook /> <span className="px-2">Login with Facebook</span>
			</div>

			{/* currently not being used */}
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
