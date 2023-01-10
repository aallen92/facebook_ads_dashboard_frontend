import { useState } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { FaFacebook } from "react-icons/fa";

const FacebookAuth = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [data, setData] = useState({});
	const [picture, setPicture] = useState("");
	const appId = "497447772520584";

	const responseFacebook = (response) => {
		console.log(response);
		setData(response);
		setPicture(response.picture.data.url);
		if (response.accessToken) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	};
	return (
		<div className="container">
			{!isLoggedIn && (
				// <FacebookLogin
				// 	appId="497447772520584"
				// 	autoLoad={false}
				// 	fields="name,email,picture"
				// 	scope="public_profile,user_friends,email"
				// 	callback={responseFacebook}
				// 	className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				// />
				<FacebookLogin
					appId={appId}
					children={
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center w-">
							<FaFacebook /> <span className="px-2">Login with Facebook</span>
						</button>
					}
				/>
			)}
			{/* {isLoggedIn && <Image src={picture} roundedCircle />} */}

			{/* {isLoggedIn &&
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.email}
        </Card.Text>
      </Card.Body>
    } */}
		</div>
	);
};

export default FacebookAuth;
