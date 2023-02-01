import React, { useEffect, useState } from 'react'
import Image from '../components/image'
import { fetchAPI } from "../lib/api"

const Display = ({fieldId, fileName, submitKey}) => {
	const [objectId, setObjectId] = useState(null);

	const handleSubmit = async (e) => {
		e?.preventDefault()

		const formData = new FormData() // pure javascript nothing to do with react

		formData.append('files', fileName)
		formData.append('ref', 'api::object.object')
		formData.append('refId', objectId?.id) //'refId' The event Id
		formData.append('field', fieldId) //'field' the image field we called 'image'


		const res = await fetch(`https://cms.thenewlibrary.org/api/upload`, {
				method: 'POST',
				body: formData,
		})

		if (res.ok) {
				console.log('res.ok')
				console.log('res', res)
				console.log(formData)
				fetchAPI(`/objects?filters[object_id][$eq]=${document.getElementById('id_field').value}&populate=*`).then(
					function(response){
						return setObjectId(response.data?.[0]);
					}
				);
				const input = document.getElementById('id_field');
				input.focus();
				input.select();
		}
	}

	const handleTextChange = (e) => {
		fetchAPI(`/objects?filters[object_id][$eq]=${e.target.value}&populate=*`).then(
			function(response){
				return setObjectId(response.data?.[0]);
			}
		);
	}
	
	useEffect(() => {
		const input = document.getElementById('id_field');
		window.addEventListener('load',function(){
			input.focus();
			input.select();
		})
		input.onkeydown = function (e) {
			if(e.which==13||e.keyCode==13){
    		this.blur();
			}
		}
	})

	useEffect(() =>{
		if(submitKey == true){
			handleSubmit();
		}
	},[submitKey])

	return(
		<>
			<div className='display'>
				<div className='object-info'>
					<form onSubmit={handleSubmit}>
						<input type='text' onChange={handleTextChange} className="text-input" id="id_field"/>
						<div className='wrapper'>
							<h2>{objectId?.attributes?.title}</h2>
							<h3 id="cover_image" className='category'><span>FRONT COVER</span><span>{objectId?.attributes?.cover_image.data ? '1' : '0'}/1</span></h3>
							<h3 id="back_cover" className='category'><span>BACK COVER</span><span>{objectId?.attributes?.back_cover.data ? '1' : '0'}/1</span></h3>
							<h3 id="spines" className='category'><span>SPINES</span><span>{objectId?.attributes?.spines.data ? objectId?.attributes?.spines.data.length : '0' }</span></h3>
							<h3 id="colophon" className='category'><span>COLOPHON</span><span>{objectId?.attributes?.colophon.data ? objectId?.attributes?.colophon.data.length : '0' }</span></h3>
							<h3 id="content" className='category'><span>CONTENT</span><span>{objectId?.attributes?.content.data ? objectId?.attributes?.content.data.length : '0' }</span></h3>
							<div className='images'>
								{objectId?.attributes?.cover_image.data && <div className='image front-cover'><Image image={objectId?.attributes?.cover_image.data}/></div>}
								{objectId?.attributes?.content?.data?.map((item, i) =>{
									return(
										<div className='image'>
											<Image image={item}/>
										</div>
									)
								})}
								{objectId?.attributes?.colophon?.data?.map((item, i) =>{
									return(
										<div className='image'>
											<Image image={item}/>
										</div>
									)
								})}
								{objectId?.attributes?.spines?.data?.map((item, i) =>{
									return(
										<div className='image'>
											<Image image={item}/>
										</div>
									)
								})}
								{objectId?.attributes?.back_cover.data && <div className='image back-cover'><Image image={objectId?.attributes?.back_cover.data}/></div>}
							</div>
						</div>
						<input type='submit' value='Upload' className='btn upload-button' />
					</form>
				</div>
				<div className='object-scan'>
					{(fileName) ?
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
