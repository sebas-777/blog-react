import React from 'react';
import emma from '../assets/emma.jpeg'

function Testimony() {
return(
		<div className='container-testimony'>
			<img 
			className='image-testimony'
			src={emma} 
			/>
			<div className='container-text-name'>
				<p className='container-employeName'>
				Emma Bostian in Sweden
				</p>
				<p className='container-job'>
				Software Engineer at Spotify
				</p>
				<p className='container-history'>
				"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
				</p>

			</div>
		</div>
	);
}

export default Testimony;