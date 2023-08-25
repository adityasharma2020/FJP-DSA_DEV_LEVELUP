import React from 'react'

export default function Experience({ experience }) {
	let valuesArray = Object.values(experience)
	return (
		<div>
			{experience.map((item,index) => {
				return (
					<div key={index}>
						<p>{item.year}</p>
						<p>{item.company}</p>
						<p>{item.role}</p>
					</div>
				)
			})}
		</div>
	)
}
