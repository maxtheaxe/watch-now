/*
	team component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
*/

import React from "react"
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

const TeamCardList = (props) => (
	<div
		class="team-card-list"
		style={{
		}}
	>
		['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (
			<ListGroup horizontal={breakpoint}>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
				<ListGroup.Item>
					<AuburnCard />
				</ListGroup.Item>
			</ListGroup>
		));
	</div>
)

export default Team
