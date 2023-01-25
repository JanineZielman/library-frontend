import React, { useEffect, useState } from 'react'
import Image from '../components/image'

const Display = ({ fileName, objectId}) => {
	console.log(objectId?.[0]?.attributes)
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
								<h3><span>SPINES</span><span>{objectId?.[0].attributes.spines.data ? objectId?.[0].attributes.spines.data.length : '0' }</span></h3>
								<h3><span>COLOPHON</span><span>{objectId?.[0].attributes.colophon.data ? objectId?.[0].attributes.colophon.data.length : '0' }</span></h3>
								<h3><span>CONTENT</span><span>{objectId?.[0].attributes.content.data ? objectId?.[0].attributes.content.data.length : '0' }</span></h3>
								<div className='images'>
									<div className='image'><Image image={objectId?.[0].attributes.cover_image} object-fit="contain"/></div>
									<div className='image'><Image image={objectId?.[0].attributes.back_cover} object-fit="contain"/></div>
								</div>
							</div>
						</>
					: 
						<h1>TYPE IN OBJECT CODE</h1>
					}
				</div>
				<div className='object-scan'>
					{(fileName && objectId?.[0]) ?
						<>
							<h1>PREVIEW</h1>
							<div className='preview-image'>
								<img src={`/export/final/${fileName.name}`}/>
							</div>
						</> 
					:
						<>
							<h1>SELECT TYPE</h1>
						</>
					}
				</div>
			</div>
		</>
	)
}

export default Display
