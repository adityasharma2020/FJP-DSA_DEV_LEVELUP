import React from 'react'

export default function Education({ education }) {
	return (
		<div>
			{education.map((education,index) => (
				<div key={index}>{education} </div >
			))}
		</div>
	)
}
