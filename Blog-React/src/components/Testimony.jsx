
import React from 'react';
import '../styleSheets/Testimony.css'


function Testimony(props) { 

return( 
		<div className='container-testimony'>
			<img 
			className='image-testimony'
			src={props.image}
			/>
			<div className='container-text-name'>
				<p className='container-employeName'>
				<strong>{props.name} in {props.country}</strong>
				</p>
				<p className='container-job'>
				{props.job} at <strong>{props.company}</strong> 
				</p>
				<p className='container-history'>
				{props.testimony}
				</p>

			</div>
		</div>
	);
}

export default Testimony;