import { useState } from 'react'

function Button({ name, message, children, onPlay, onPause }) {
	let [playing, setPlaying] = useState(false)

	function clickHandler() {
		if (playing) onPlay()
		else onPause()

		setPlaying(!playing)
	}

	return (
		<div>
			<button onClick={clickHandler}>
				{children} {playing ? '||' : '|>'}
			</button>
		</div>
	)
}

export default Button
