/*
	index page - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/layout/grid/
		https://react-bootstrap.github.io/components/list-group/

*/

import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import VideoPlayerWrapper from "../components/video-player-wrapper";

import TeamList from "../components/team-list"

import WatchApp from "../components/watch-app"

// https://linguinecode.com/post/how-to-pass-parameter-values-to-onclick-react-function
// const handleClick = value => () => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "new")

const IndexPage = () => (
	<Layout pageInfo={{ pageName: "index" }}>
		<SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
		<WatchApp />
	</Layout>
)

export default IndexPage
