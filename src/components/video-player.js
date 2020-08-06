/*
	video player component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
*/

import React from "react"
// import ExampleVideo from "../videos/19xx bc vs cornell.mp4"

const VideoPlayer = (props) => (
	<video
		style={{
			width: `80%`
		}} 
		controls
		autoplay
	>
		<source key={props.key} src={props.src} type="video/mp4" />
	</video>
)

VideoPlayer.defaultProps = {
	key: `default`,
	// src: `https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4`
	src: `https://archive.org/download/1957NflChampionshipGame/57ChampionshipGame.mp4`
}

export default VideoPlayer
