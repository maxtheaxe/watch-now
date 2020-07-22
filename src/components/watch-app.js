/*
	watch app component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
*/

import React, { Component } from "react"
import { Row, Col, Container } from "react-bootstrap"

import VideoPlayer from "../components/video-player";
// import ExampleVideo from "../videos/19xx bc vs cornell.mp4"

import TeamCard from "../components/team-card"
// Obviously, there's a way better way to do this, but I'll do it out once layout is done
import AuburnCard from "../components/team-cards/auburn"
import AlabamaCard from "../components/team-cards/alabama"
import CaliforniaCard from "../components/team-cards/california"
import DartmouthCard from "../components/team-cards/dartmouth"
import DelawareCard from "../components/team-cards/delaware"
import FloridaCard from "../components/team-cards/florida"
import GeorgiaTechCard from "../components/team-cards/georgia-tech"
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
import BostonCollegeCard from "../components/team-cards/boston-college"
import YaleCard from "../components/team-cards/yale"
import HoustonCard from "../components/team-cards/houston"

class WatchApp extends Component {
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
			<Container className="text-center">
				<Row>
					<Col>
						<div>
							<VideoPlayer src={vid} key={k} />
							{/*<button onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "new")}>
								Swap
							</button>*/}
						</div>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					{/* clickable cards! https://stackoverflow.com/a/62821164/4513452 and https://stackoverflow.com/a/19982424/4513452 */}
					<Col className="d-flex flex-fill" >
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<TeamCard name="Auburn" />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<NebraskaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<CaliforniaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<DartmouthCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<DelawareCard />
						</button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<FloridaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<GeorgiaTechCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<AlabamaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<NotreDameCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<OhioStateCard />
						</button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<PurdueCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<PennStateCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<PrincetonCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<OklahomaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<RutgersCard />
						</button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<TCUCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<USCCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<BostonCollegeCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<YaleCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "auburn")}>
							<HoustonCard />
						</button>
					</Col>
				</Row>
				<br />
			</Container>
		)
	}
	// https://www.w3schools.com/js/js_arrow_function.asp
	// https://stackoverflow.com/a/53499596/4513452
	updatePosition = (newVid, newK) => this.setState({ vid: newVid, k: newK });
}

export default WatchApp
