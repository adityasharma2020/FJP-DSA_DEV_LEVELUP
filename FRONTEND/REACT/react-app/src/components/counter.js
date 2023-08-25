import { useState } from 'react'

function Counter() {
	const [number, setNumber] = useState(0)

	function clickHandler(e) {
		e.stopPropagation()

		setNumber(number + 1)
		setNumber(number + 1)
		setNumber(number + 1)
		console.log(number)
	}
	return (
		<>
			<div>
				<p>{number}</p>
				<button onClick={clickHandler}>click</button>
			</div>
		</>
	)
}

export default Counter
