import './AddVideo.css'
import { useState, useEffect } from 'react'

const initialState = {
	time: '1 month ago',
	channel: 'Coder Dost',
	verified: true,
	title: '',
	views: '',
}

function AddVideo({ dispatch, editableVideo }) {
	const [video, setVideo] = useState(initialState)

	function handleSubmit(e) {
		e.preventDefault()
		if (editableVideo) {
			dispatch({ type: 'UPDATE', payload: video })
		} else {
			dispatch({ type: 'ADD', payload: video })
		}

		setVideo(initialState)
	}

	function handleChange(e) {
		setVideo({ ...video, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		if (editableVideo) {
			setVideo(editableVideo)
		}
	}, [editableVideo])

	return (
		<form>
			<input
				type='text'
				name='title'
				onChange={handleChange}
				placeholder='title'
				value={video.title}
			/>
			<input
				type='text'
				name='views'
				onChange={handleChange}
				placeholder='views'
				value={video.views}
			/>
			<button onClick={handleSubmit}>{editableVideo ? 'edit' : 'Add'} Video</button>
		</form>
	)
}

export default AddVideo
