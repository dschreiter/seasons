import React from 'react';

const seasonConfig = {
	summer: {
		text: 'Lets hit the beach!',
		iconName: 'sun',
	},
	winter: {
		text: "Burr, it's cold!",
		iconName: 'snowflake',
	},
};

const getSeason = (lat, month) => {
	//Nothern Hemisphere, For Souther Hemisphere invert
	//0, 1, 2, 9, 10, 11, -- winter
	// 3,4,5,6,7,8 -- summer

	if (month > 2 && month < 9) {
		// if we are in summer months
		return lat > 0 ? 'summer' : 'winter'; // are we in Northern Hemisphere
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};
/* !warning */
const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season]; // seasonConfig.summer or seasonConfig['summer']

	return (
		<div>
			<i className={`massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
