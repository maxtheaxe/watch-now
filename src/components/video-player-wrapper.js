/*
	video player wrapper component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
*/

import React, { Component } from "react"
import VideoPlayer from "../components/video-player";
// import ExampleVideo from "../videos/19xx bc vs cornell.mp4"

class VideoPlayerWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vid: "https://archive.org/download/1957NflChampionshipGame/57ChampionshipGame.mp4",
			k: "default"
		};
	}
	render() {
		const vid = this.state.vid
		const k = this.state.k
		return (
			<div>
				<VideoPlayer src={vid} key={k} />
				<button onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "new")}>
					Swap
				</button>
			</div>
		)
	}
	// https://www.w3schools.com/js/js_arrow_function.asp
	// https://stackoverflow.com/a/53499596/4513452
	updatePosition = (newVid, newK) => this.setState({ vid: newVid, k: newK });
}

export default VideoPlayerWrapper
