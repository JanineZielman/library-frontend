import React, { useEffect, useState } from 'react'
import Display from '../components/display'

const UploadForm = ({ objects, fieldId, fileName}) => {
	const [objectId, setObjectId] = useState(null);

	const handleSubmit = async (e) => {
		console.log('handleSubmit')
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
			setObjectId(objects.filter(object => object.attributes.object_id == e.target.value));
	}
	return(
		<>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={handleTextChange} className="text-input"/>
				<input type='submit' value='Upload' className='btn' />
			</form>
			<Display fileName={fileName} objectId={objectId} fieldId={fieldId}/>
		</>
	)
}

export default UploadForm
