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
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1966%20TCU%20VS%20NEBRASKA.mp4", "nebraska")}>
							<NebraskaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/2002%20california%20vs%20stanford.mp4", "california")}>
							<CaliforniaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1983%2010%2029%20Dartmouth%20vs%20Yale.mp4", "dartmouth")}>
							<DartmouthCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1969%20FLORIDA%20VS%20TULANE.mp4", "florida")}>
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
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1980%20army%20vs%20notre%20dame%202.mp4", "auburn")}>
							<NotreDameCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1976%201%201%20UCLA%20vs%20Ohio%20State%20Rose%20Bowl%20branded.mp4", "ohiostate")}>
							<OhioStateCard />
						</button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1962%2010%2020%20Michigan%20vs%20Purdue%201.mp4", "auburn")}>
							<PurdueCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1963%20ohio%20state%20vs%20penn%20state.mp4", "auburn")}>
							<PennStateCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1966%20PRINCETON%20FOOTBALL%20HIGHLIGHTS.mp4", "princeton")}>
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
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1990%20ohio%20state%20vs%20boston%20college.mp4", "auburn")}>
							<BostonCollegeCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1979%209%2022%20YALE%20VS%20BROWN.mp4", "yale")}>
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
	updatePosition(newVid, newK) {
		this.setState({ vid: newVid, k: newK });
		window.scrollTo(0, 0); // scroll to top (to help indicate new video is playing)
	}
}

export default WatchApp
