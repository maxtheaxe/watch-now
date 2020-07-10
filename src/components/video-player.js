/*
	video player component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
*/

import React from "react"
import ExampleVideo from "../videos/19xx bc vs cornell.mp4"

const VideoPlayer = () => (
	<video
		style={{
			width: `100%`
		}} 
		controls
	>
		<source src={ExampleVideo} type="video/mp4" />
	</video>
)

export default VideoPlayer
