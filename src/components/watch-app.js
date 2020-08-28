/*
	watch app component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
*/

import React, { Component } from "react"
import { Row, Col, Container, Button } from "react-bootstrap"

import VideoPlayer from "../components/video-player";
// import PlyrMod from "../components/plyr-mod";
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
			vid: "https://archive.org/download/1957NflChampionshipGame/57ChampionshipGame.mp4", // main video link
			k: "1957 NFL Championship | Lions vs. Browns", // main video title
			thumb: "http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/57ChampionshipGame.jpg" // main video thumbnail
		};
	}
	render() {
		const vid = this.state.vid
		const k = this.state.k
		const thumb = this.state.thumb
		return (
			<Container className="text-center">
				<Row>
					<Col>
						<div>
							{/* video title */}
							<h1>{k}</h1>
							{/* key tells react video source has changed */}
							<VideoPlayer src={vid} key={k} thumb={thumb} />
						</div>
					</Col>
				</Row>
				<Row
					style={{
						paddingBottom: `0.5rem`
					}}
				>
					<Col>
						<a href="http://www.footballvideos.com/">
							<Button variant="dark">
								<h2>Check out more videos on FootballVideos.com</h2>
							</Button>
						</a>
					</Col>
				</Row>
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					{/* clickable cards! https://stackoverflow.com/a/62821164/4513452 and https://stackoverflow.com/a/19982424/4513452 */}
					<Col className="d-flex flex-fill" >
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://ia802905.us.archive.org/22/items/rg8991957/RG899_1957%20Auburn%20versus%20Mississippi%20State%20football.mp4", // video link
							"1957 Auburn vs. Mississippi State", // video title
							"https://ia802905.us.archive.org/22/items/rg8991957/__ia_thumb.jpg" // thumbnail image
							)}>
							<TeamCard name="Auburn" />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/IxY7iTMg/1976-oklahoma-vs-nebraska-3_dvd.mp4", // video link
							"1976 Nebraska vs. Oklahoma", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1976-oklahoma-vs-nebraska-3_std.original.jpg" // thumbnail image
							)}>
							<NebraskaCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/ITqO3Ahk/2002-california-vs-stanford_reencoded_dvd.mp4", // video link
							"2002 Cal vs. Stanford", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/2002-california-vs-stanford_reencoded_std.original.jpg" // thumbnail image
							)}>
							<CaliforniaCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/VqLR5mJ1/1983-10-29-dartmouth-vs-yale_reencoded-1_dvd.mp4", // video link
							"1983 Dartmouth vs. Yale", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1983-10-29-dartmouth-vs-yale_reencoded-1_dvd.original.jpg" // thumbnail image
							)}>
							<DartmouthCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://ia800603.us.archive.org/27/items/1958NflChampionship/1958NflChampionship.mp4", // video link
							"Delaware Game Coming Soon", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/coming-soon-thumbnail.png" // thumbnail image
							)}>
							<DelawareCard />
						</Button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/zOXXlvu2/1969-florida-vs-tulane_dvd.mp4", // video link
							"1969 Florida vs. Tulane", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1969-florida-vs-tulane_std.original.jpg" // thumbnail image
							)}>
							<FloridaCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://ia800105.us.archive.org/5/items/87534CaliforniaOrBust/87534%20California%20Or%20Bust.mp4", // video link
							"Georgia Tech Game Coming Soon", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/coming-soon-thumbnail.png" // thumbnail image
							)}>
							<GeorgiaTechCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://ia800503.us.archive.org/22/items/G8RB8R-1992ALABAMAVsFLORIDASECChampionshipGame213/G8RB8R-1992ALABAMAVsFLORIDASECChampionshipGame213.mp4", // video link
							"1992 SEC Championship | Alabama vs. Florida", // video title
							"https://archive.org/download/G8RB8R-1992ALABAMAVsFLORIDASECCHAMPIONSHIPGAME673/G8RB8R-1992ALABAMAVsFLORIDASECCHAMPIONSHIPGAME673.thumbs/G8RB8R-1992ALABAMAVsFLORIDASECCHAMPIONSHIPGAME673_000027.jpg" // thumbnail image
							)}>
							<AlabamaCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/luEcx6bB/1980-army-vs-notre-dame-1_dvd.mp4", // video link
							"1980 Notre Dame vs. Army", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1980-army-vs-notre-dame-1_std.original.jpg" // thumbnail image
							)}>
							<NotreDameCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/reB60OXL/1976-1-1-ucla-vs-ohio-state-rose-bowl-branded_reencoded-4_hd.mp4", // video link
							"1976 Rose Bowl | Ohio State vs. UCLA", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1976-1-1-ucla-vs-ohio-state-rose-bowl-branded_reencoded-4_dvd.original.jpg" // thumbnail image
							)}>
							<OhioStateCard />
						</Button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/6glexDs0/1962-10-20-michigan-vs-purdue-2_dvd.mp4", // video link
							"1962 Purdue vs. Michigan", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1962-10-20-michigan-vs-purdue-2_dvd.original.jpg" // thumbnail image
							)}>
							<PurdueCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/0m3uhR3x/1963-ohio-state-vs-penn-state-2_dvd.mp4", // video link
							"1963 Penn State vs. Ohio State", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1963-ohio-state-vs-penn-state-2_std.original.jpg" // thumbnail image
							)}>
							<PennStateCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/XQ3UY6ug/1966-princeton-football-highlights-2_dvd.mp4", // video link
							"1966 Princeton Football Highlights", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1966-princeton-football-highlights-2_std.original.jpg" // thumbnail image
							)}>
							<PrincetonCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://ia800208.us.archive.org/11/items/CEP482/CEP482_512kb.mp4", // video link
							"1951 Sugar Bowl | Oklahoma vs. Kentucky", // video title
							"https://archive.org/download/CEP482/CEP482.thumbs/CEP482_000001.jpg" // thumbnail image
							)}>
							<OklahomaCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://ia801600.us.archive.org/26/items/NCAABasketball.RutgersScarletKnightsMarylandTerrapins24.01.17/NCAA%20Basketball.%20Rutgers%20Scarlet%20Knights%20-%20Maryland%20Terrapins%2024.01.17.mp4", // video link
							"Rutgers Game Coming Soon", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/coming-soon-thumbnail.png" // thumbnail image
							)}>
							<RutgersCard />
						</Button>
					</Col>
				</Row>
				<br />
				<Row flex xl="5" lg="4" md="3" sm="2" xs="1">
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/DHhf6f7T/1965-tcu-vs-nebraska_dvd.mp4", // video link
							"1965 TCU vs. Nebraska", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1965-tcu-vs-nebraska_std.original.jpg" // thumbnail image
							)}>
							<TCUCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://ia800603.us.archive.org/27/items/1958NflChampionship/1958NflChampionship.mp4", // video link
							"USC Game Coming Soon", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/coming-soon-thumbnail.png" // thumbnail image
							)}>
							<USCCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/QduW50ne/1990-ohio-state-vs-boston-college_reencoded_dvd.mp4", // video link
							"1990 Boston College vs. Ohio State", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1990-ohio-state-vs-boston-college_reencoded_std.original.jpg" // thumbnail image
							)}>
							<BostonCollegeCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://videos.files.wordpress.com/eizOGrsk/1979-9-22-yale-vs-brown_dvd.mp4", // video link
							"1979 Yale vs. Brown", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/1979-9-22-yale-vs-brown.png" // thumbnail image
							)}>
							<YaleCard />
						</Button>
					</Col>
					<Col className="d-flex flex-fill">
						<Button variant="outline-dark" onClick={() => this.updatePosition(
							"https://ia800603.us.archive.org/27/items/1958NflChampionship/1958NflChampionship.mp4", // video link
							"Houston Game Coming Soon", // video title
							"http://nas.wou.mybluehost.me/wp-content/uploads/2020/08/coming-soon-thumbnail.png" // thumbnail image
							)}>
							<HoustonCard />
						</Button>
					</Col>
				</Row>
				<br />
			</Container>
		)
	}
	// https://www.w3schools.com/js/js_arrow_function.asp
	// https://stackoverflow.com/a/53499596/4513452
	updatePosition(newVid, newK, newThumb) {
		this.setState({ vid: newVid, k: newK, thumb: newThumb }); // inserts new video and thumbnail into video player
		window.scrollTo(0, 0); // scroll to top (to help indicate new video is playing)
	}
}

export default WatchApp
