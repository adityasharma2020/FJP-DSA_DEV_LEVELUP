import logo from './logo.svg'
import './App.css'
import Button from './components/Button'
import Resume from './components/Resume'
import Border from './components/Border'
import Component from './components/Component'
import ComponentBubbling from './components/Bubbling'
import Counter from './components/counter'
function App() {
	return (
		<div onClick={() => console.log('app is clicked')}>
			{/* <Button
				onPlay={() => console.log('play')}
				onPause={() => console.log('pause')}
				name={'play'}
				message={'button clicked'}
			>
				play
			</Button>

			<Resume />

			<Border>
				<Component></Component>
			</Border>

			<ComponentBubbling /> */}
			<Counter/>
		</div>
	)
}

export default App
