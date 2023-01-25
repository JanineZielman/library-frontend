import React, { useEffect, useState } from 'react'
import Display from '../components/display'
import { fetchAPI } from "../lib/api"

const UploadForm = ({ fieldId, fileName}) => {
	const [objectId, setObjectId] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault()

		const formData = new FormData() // pure javascript nothing to do with react

		formData.append('files', fileName)
		formData.append('ref', 'api::object.object')
		formData.append('refId', objectId[0]?.id) //'refId' The event Id
		formData.append('field', fieldId) //'field' the image field we called 'image'


		const res = await fetch(`https://cms.thenewlibrary.org/api/upload`, {
				method: 'POST',
				body: formData,
		})

		if (res.ok) {
				console.log('res.ok')
				console.log('res', res)
				console.log(formData)
		}
	}

	const handleTextChange = (e) => {
		console.log('handleTextChange')
		fetchAPI(`/objects?filters[object_id][$eq]=${e.target.value}&populate=*`).then(
			function(response){
				return setObjectId(response.data);
			}
		);
	}


	return(
		<>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={handleTextChange} className="text-input" id="id_field"/>
				<input type='submit' value='Upload' className='btn' />
			</form>
			<Display fileName={fileName} objectId={objectId} fieldId={fieldId}/>
		</>
	)
}

export default UploadForm
