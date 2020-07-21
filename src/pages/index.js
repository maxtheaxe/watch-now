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
import VideoPlayer from "../components/video-player";

// Other Video Player
import PlyrVid from "../components/plyrvid";

import TeamList from "../components/team-list"

const IndexPage = () => (
	<Layout pageInfo={{ pageName: "index" }}>
		<SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
		<Container className="text-center">
			<Row>
				<Col>
					<VideoPlayer
						key="new"
						src="https://archive.org/download/1957NflChampionshipGame/57ChampionshipGame.mp4"
						xl="6" lg="6" md="8" s="10" xs="12"
					/>
				</Col>
			</Row>
			<TeamList />
		</Container>
	</Layout>
)

export default IndexPage
