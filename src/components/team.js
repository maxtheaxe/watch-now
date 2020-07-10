/*
	team component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
*/

import React from "react"
import TeamLogo from "../images/team-logos/Auburn_Tigers_logo.svg"

const Team = (props) => (
	<div
		class="team"
		style={{
			display: `flex`,
			width: `25%`
		}}
	>
		<div
			class="team-content"
			style={{
				display: `flex`,
				flexDirection: `column`,
				alignItems: `center`,
				justifyContent: `center`,
				padding: `15%`
			}}
		>
			<img src={TeamLogo} />
			<h3
				class="team-name"
				style={{
					paddingBottom: `0px`,
					marginBottom: `0px`
				}}
			>
			{props.name}
			</h3>
		</div>
	</div>
)

export default Team
