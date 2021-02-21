import defaultPic from "../../images/defaultPic.jpg";

function DefaultProfilePic({ altText }) {
	return <img src={defaultPic} alt={altText} />;
}

export default DefaultProfilePic;
