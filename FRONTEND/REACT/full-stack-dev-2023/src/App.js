import { useState, useReducer } from 'react'
import './App.css'
import AddVideo from './components/AddVideo'
import videoDB from './data/data'
import VideoList from './components/VideoList'
function App() {
	console.log('render App')

	const [editableVideo, setEditableVideo] = useState(null)
	function videoReducer(videos, action) {
		switch (action.type) {
			case 'ADD':
				return [...videos, { ...action.payload, id: videos.length + 1 }]
			case 'DELETE':
				return videos.filter((video) => video.id !== action.payload.id)
			case 'UPDATE':
				const index = videos.findIndex((v) => v.id === action.payload.id)
				const newArray = [...videos]
				newArray.splice(index, 1, action.payload.video)
				setEditableVideo(null)
				return newArray
			default:
				return videos
		}
	}

	const [videos, dispatch] = useReducer(videoReducer, videoDB)
	// const [videos, setVideos] = useState(videoDB)

	// function addVideos(video) {
	// 	dispatch({ type: 'ADD', payload: video })
	// 	//action:{type:"ADD",payload:video}
	// 	// setVideos()
	// }
	// function deleteVideo(id) {
	// 	dispatch({ type: 'DELETE', payload: id })
	// 	// setVideos(videos.filter((video) => video.id !== id))
	// }

	function editVideo(id) {
		setEditableVideo(videos.find((video) => video.id === id))
	}

	// function updateVideo(video) {
	// 	dispatch({ type: 'UPDATE', payload: video })
	// 	// console.log(video)
	// 	// const index = videos.findIndex((v) => v.id === video.id)
	// 	// const newArray = [...videos]
	// 	// newArray.splice(index, 1, video)
	// 	// setVideos(newArray)
	// }

	return (
		<div className='App' onClick={() => console.log('App')}>
			<AddVideo
      dispatch={dispatch}
				
				editableVideo={editableVideo}
				
			></AddVideo>
			<VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>
		</div>
	)
}

export default App
