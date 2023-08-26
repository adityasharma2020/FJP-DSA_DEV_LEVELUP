import { useState } from 'react'
import './App.css'
import AddVideo from './components/AddVideo'
import videoDB from './data/data'
import VideoList from './components/VideoList'
import MyAddVideo from './components/MyAddVideo'
function App() {
	console.log('render App')

	const [videos, setVideos] = useState(videoDB)

	function addVideos(video) {
		setVideos([...videos, { ...video, id: video.length + 1 }])
	}

	function deleteVideo(id) {
		setVideos(videos.filter((video) => video.id !== id))
	}

	return (
		<div className='App' onClick={() => console.log('App')}>
			<MyAddVideo addVideos={addVideos}></MyAddVideo>
			<VideoList deleteVideo={deleteVideo} videos={videos}></VideoList>
		</div>
	)
}

export default App
