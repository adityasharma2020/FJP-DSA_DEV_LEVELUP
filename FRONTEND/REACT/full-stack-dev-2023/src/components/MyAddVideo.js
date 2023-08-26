function MyAddVideo({ addVideos }) {
	const initialState = {
		time: '1 month ago',
		channel: 'Coder Dost',
		verified: true,
		title: '',
		views: '',
	}
	const [video, setVideo] = useState(initialState)

	function handleSubmit(e) {
		e.preventDefault()
		addVideos(video)
		setVideo(initialState)
	}

	function handleChange(e) {
		setVideo({
			...video,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<form>
			<input onChange={handleChange} name='title' type='text' placeholder='title' value='' />

			<input name='views' type='text' onChange={handleChange} placeholder='views' value='' />
			<button onClick={handleSubmit}>add video</button>
		</form>
	)
}

export default MyAddVideo
