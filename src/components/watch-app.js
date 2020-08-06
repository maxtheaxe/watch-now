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
			k: "1957 NFL Championship | Lions vs. Browns"
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
							{/* video title */}
							<h1>{k}</h1>
							{/* key tells react video source has changed */}
							<VideoPlayer src={vid} key={k} />
						</div>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					{/* clickable cards! https://stackoverflow.com/a/62821164/4513452 and https://stackoverflow.com/a/19982424/4513452 */}
					<Col className="d-flex flex-fill" >
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://ia802905.us.archive.org/22/items/rg8991957/RG899_1957%20Auburn%20versus%20Mississippi%20State%20football.mp4", "1957 Auburn vs. Mississippi State")}>
							<TeamCard name="Auburn" />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1966%20TCU%20VS%20NEBRASKA.mp4", "1966 Nebraska vs. TCU")}>
							<NebraskaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/2002%20california%20vs%20stanford.mp4", "2002 Cal vs. Stanford")}>
							<CaliforniaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1983%2010%2029%20Dartmouth%20vs%20Yale.mp4", "1983 Dartmouth vs. Yale")}>
							<DartmouthCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1969%20FLORIDA%20VS%20TULANE.mp4", "Unselected Delaware Game")}>
							<DelawareCard />
						</button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1969%20FLORIDA%20VS%20TULANE.mp4", "1969 Florida vs. Tulane")}>
							<FloridaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://ia800105.us.archive.org/5/items/87534CaliforniaOrBust/87534%20California%20Or%20Bust.mp4", "1929 Georgia Tech Journey to 14th Rose Bowl")}>
							<GeorgiaTechCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://ia800503.us.archive.org/22/items/G8RB8R-1992ALABAMAVsFLORIDASECChampionshipGame213/G8RB8R-1992ALABAMAVsFLORIDASECChampionshipGame213.mp4", "1992 SEC Championship | Alabama vs. Florida")}>
							<AlabamaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1980%20army%20vs%20notre%20dame%202.mp4", "1980 Notre Dame vs. Army")}>
							<NotreDameCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1976%201%201%20UCLA%20vs%20Ohio%20State%20Rose%20Bowl%20branded.mp4", "1963 Ohio State vs. Penn State")}>
							<OhioStateCard />
						</button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1962%2010%2020%20Michigan%20vs%20Purdue%201.mp4", "1962 Purdue vs. Michigan")}>
							<PurdueCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1963%20ohio%20state%20vs%20penn%20state.mp4", "1963 Penn State vs. Ohio State")}>
							<PennStateCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1966%20PRINCETON%20FOOTBALL%20HIGHLIGHTS.mp4", "1966 Princeton Football Highlights")}>
							<PrincetonCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://ia800208.us.archive.org/11/items/CEP482/CEP482_512kb.mp4", "1951 Sugar Bowl | Oklahoma vs. Kentucky")}>
							<OklahomaCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://ia801600.us.archive.org/26/items/NCAABasketball.RutgersScarletKnightsMarylandTerrapins24.01.17/NCAA%20Basketball.%20Rutgers%20Scarlet%20Knights%20-%20Maryland%20Terrapins%2024.01.17.mp4", "2017 Rutgers vs. Maryland Basketball")}>
							<RutgersCard />
						</button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "1966 TCU vs. Nebraska")}>
							<TCUCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "Unselected USC Game")}>
							<USCCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1990%20ohio%20state%20vs%20boston%20college.mp4", "1990 Boston College vs. Ohio State")}>
							<BostonCollegeCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://srv-file19.gofile.io/download/QHJdZK/1979%209%2022%20YALE%20VS%20BROWN.mp4", "1979 Yale vs. Brown")}>
							<YaleCard />
						</button>
					</Col>
					<Col className="d-flex flex-fill">
						<button type="button" class="rounded" onClick={() => this.updatePosition("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "Unselected Houston Football Game")}>
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
		this.setState({ vid: newVid, k: newK }); // inserts new video into video player
		window.scrollTo(0, 0); // scroll to top (to help indicate new video is playing)
	}
}

export default WatchApp
