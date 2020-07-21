/*
	team card component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/components/cards/
*/

function Clip(props) {
  return (
    <video controls>
      <source src={props.url} />
    </video>
  )
}