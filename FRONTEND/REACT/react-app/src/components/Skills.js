import React from 'react'

export default function Skills({ skills }) {
	console.log(skills)
	return (
		<div>
			{skills.map((skill,index) => (
				<li key={index}>
					<ul>{skill}</ul>
				</li>
			))}
		</div>
	)
}
