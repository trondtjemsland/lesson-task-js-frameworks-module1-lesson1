import React from 'react';
import picture from '../../img/giphy.gif';

function ProfilePic({ altText }) {
	return <img alt={altText} src={picture} width={700} height={500} />;
}

export default ProfilePic;
