import React, { useEffect, useState } from 'react'

const Display = ({ fileName, objectId, fieldId}) => {
	console.log(objectId)
	return(
		<>
			<div className='display'>
				<div className='object-info'>
					{objectId?.[0] ?
						<>
							<h1>{objectId?.[0].attributes.object_id}</h1>
							<div className='wrapper'>
								<h2>{objectId?.[0].attributes.title}</h2>
								<h3><span>FRONT COVER</span><span>{objectId?.[0].attributes.cover_image.data ? '1' : '0'}/1</span></h3>
								<h3><span>BACK COVER</span><span>{objectId?.[0].attributes.back_cover.data ? '1' : '0'}/1</span></h3>
								<h3><span>SPINES</span></h3>
								<h3><span>COLOPHON</span></h3>
								<h3><span>CONTENT</span></h3>
							</div>
						</>
					: 
						<h1>...</h1>
					}
				</div>
				<div className='object-scan'>
					{fileName ?
						<>
							<h1>SCAN</h1>
							<div className='preview-image'>
								<img src={`/export/${fileName.name}`}/>
							</div>
						</> 
					:
						<>
							<h1>START SCANNING</h1>
						</>
					}
				</div>
			</div>
		</>
	)
}

export default Display
