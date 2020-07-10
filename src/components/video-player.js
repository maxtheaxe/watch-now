/*
	video player component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
*/

import React from "react"
// import ExampleVideo from "../videos/19xx bc vs cornell.mp4"

const VideoPlayer = () => (
	<video
		style={{
			width: `100%`
		}} 
		controls
	>
		<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" />
	</video>
)

export default VideoPlayer
