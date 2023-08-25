import React, { useState } from 'react'
import './bubbling.css'
export default function Bubbling() {
	const [isFocused, setIsFocused] = useState(false)
	const [value, setValue] = useState('')

	function handleCopy() {
		const copiedText = window.getSelection().toString()
		alert(`copied text ${copiedText}`)
	}

	function clickHandler() {
		window.print()
	}
	function setValueHandler(e) {
		e.stopPropogation()
		setValue = e.target.value
	}
	console.log(isFocused)
	return (
		<div>
			<button onDoubleClick={() => alert('hwllo')}>sdf</button>
			<input
				className={isFocused ? 'focus' : null}
				name='inputfiled'
				type='text'
				onFocus={() => setIsFocused(true)}
			></input>

			<p onCopy={handleCopy}> hello ji kasie ho </p>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					console.log('values', value)
				}}
			>
				<input
					onClick={(e) => e.stopPropagation()}
					onChange={setValueHandler}
					type='text'
				/>
				<button onClick={clickHandler} type='submit'>
					submit
				</button>
			</form>
		</div>
	)
}
