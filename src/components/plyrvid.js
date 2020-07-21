/*
	plyr component - watch-now - by maxtheaxe
	references:
		https://stackoverflow.com/a/47382850
*/
import React from "react";
import Plyr from '@rocketseat/react-plyr';
/*import 'https://cdn.plyr.io/3.5.2/plyr.css';*/

// add the component in the render function
const PlyrVid = (props) => (
	<div class="plyrvid">
		<link rel="stylesheet" href="https://cdn.plyr.io/3.5.2/plyr.css" />
		<Plyr
			type="youtube" // or "vimeo"
			videoId="Wl959QnD3lM"
			clickToPlay="true"
		/>
	</div>
)

export default PlyrVid;