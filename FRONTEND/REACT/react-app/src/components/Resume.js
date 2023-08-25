import React from 'react'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
let resume = {
	experience: [{ year: 2012, company: 'xyz', role: 'something' }],
	education: ["btech","mtech","phd"],
	skills: ['react js', 'node js'],
}

export default function Resume() {
	return (
		<>
			<Skills {...resume} />
			<Education education={resume.education} />
			<Experience  experience = {resume.experience} />
		</>
	)
}
