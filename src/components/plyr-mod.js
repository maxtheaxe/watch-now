/*
	video player component (using plyrJS) - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://www.npmjs.com/package/react-plyr
*/

import React from "react"
import Plyr from 'react-plyr'
// import ExampleVideo from "../videos/19xx bc vs cornell.mp4"

const PlyrMod = (props) => (
	<Plyr
		style={{
			width: `80%`
		}} 
		controls
		autoplay
		type="youtube"
		videoId="https://www.youtube.com/watch?v=0kDKycNbopM"
	/>
)

PlyrMod.defaultProps = {
	key: `default`,
	// src: `https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4`
	src: `https://archive.org/download/1957NflChampionshipGame/57ChampionshipGame.mp4`,
	thumb: `none`
}

export default PlyrMod
