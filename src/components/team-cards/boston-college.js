/*
	team card component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/components/cards/
*/

import React from "react"
import Card from "react-bootstrap/Card"
import TeamLogo from "../../images/team-logos/squared/Boston College.png"

const Team = (props) => (
	<Card
		style={{
			fontWeight: `strong`,
			color: `#8a100b`,
			backgroundColor: `#b29d6c`,
			paddingRight: `1rem`,
			paddingLeft: `1rem`,
			paddingTop: `0.25rem`
		}}
	>
		<Card.Img variant="top" src={TeamLogo} />
		<Card.Body style={{padding: `0rem`}}>
			<Card.Title><h3>BC</h3></Card.Title>
		</Card.Body>
	</Card>
)

export default Team