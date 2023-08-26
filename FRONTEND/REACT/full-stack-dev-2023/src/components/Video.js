import './Video.css'

function Video({
	title,
	id,
	channel = 'Coder Dost',
	views,
	time,
	verified,
	children,
	editVideo,
	dispatch,
}) {
	console.log('render Video')

	return (
		<>
			<div className='container'>
				<button onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
				<button onClick={() => editVideo(id)}>edit</button>
				<div className='pic'>
					<img src={`https://picsum.photos/id/${id}/160/90`} alt='Katherine Johnson' />
				</div>
				<div className='title'>{title}</div>
				<div className='channel'>
					{channel} {verified && '✅'}{' '}
				</div>
				<div className='views'>
					{views} views <span>.</span> {time}
				</div>
				<div>{children}</div>
			</div>
		</>
	)
}

export default Video
