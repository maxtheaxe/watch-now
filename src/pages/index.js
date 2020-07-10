/*
	index page - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/layout/grid/
		https://react-bootstrap.github.io/components/list-group/

*/

import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from "../components/video-player"

// Obviously, there's a way better way to do this, but I'll do it out once layout is done
import AuburnCard from "../components/team-cards/auburn"
import AlabamaCard from "../components/team-cards/alabama"
import CaliforniaCard from "../components/team-cards/california"
import DartmouthCard from "../components/team-cards/dartmouth"
import DelawareCard from "../components/team-cards/delaware"
import FloridaCard from "../components/team-cards/florida"
import GeorgiaCard from "../components/team-cards/georgia"
import NebraskaCard from "../components/team-cards/nebraska"
import NotreDameCard from "../components/team-cards/notre-dame"
import OhioStateCard from "../components/team-cards/ohio-state"
import OklahomaCard from "../components/team-cards/oklahoma"
import PennStateCard from "../components/team-cards/penn-state"
import PrincetonCard from "../components/team-cards/princeton"
import PurdueCard from "../components/team-cards/purdue"
import RutgersCard from "../components/team-cards/rutgers"
import TCUCard from "../components/team-cards/tcu"
import AMCard from "../components/team-cards/am"
import USCCard from "../components/team-cards/usc"

const IndexPage = () => (
	<Layout pageInfo={{ pageName: "index" }}>
		<SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
		<Container className="text-center">
			<Row>
				<Col>
					<VideoPlayer lg="6" md="8" s="10" xs="12" />
				</Col>
			</Row>
			<ListGroup horizontal="md" className="justify-content-center align-items-center">
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AlabamaCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<CaliforniaCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<DartmouthCard />
				</ListGroup.Item>
			</ListGroup>
			<Row className="justify-content-center my-3">
				<Col md="6">
					<ListGroup>
						<ListGroup.Item
							action
							href="https://getbootstrap.com"
							target="_blank"
						>
							Bootstrap
						</ListGroup.Item>
						<ListGroup.Item
							action
							href="https://react-bootstrap.github.io/"
							target="_blank"
						>
							react-bootstrap
						</ListGroup.Item>
						<ListGroup.Item
							action
							href="https://react-icons.netlify.com"
							target="_blank"
						>
							react-icons
						</ListGroup.Item>
						<ListGroup.Item
							action
							href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
							target="_blank"
						>
							gatsby-plugin-sass
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						This starter also includes a navbar that sticks to the top of the
						screen when the user scrolls past it, and a footer that stays at the
						bottom of the screen.
					</p>
					<p>
						For more documentation on these packages and how they work, please
						refer to the pages linked in the list above.
					</p>
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default IndexPage
