import React, { useEffect, useState } from 'react'

const UploadForm = ({ objects, fieldId }) => {
	const [image, setImage] = useState(null)
	const [images, setImages] = useState(null)
	const [objectId, setObjectId] = useState(null)

	const handleSubmit = async (e) => {
		console.log('handleSubmit')
		e.preventDefault()

		const formData = new FormData() // pure javascript nothing to do with react
		if (image) {
			formData.append('files', image)
		}
		if (images) {
			Object.entries(images).forEach(entry => {
				console.log(entry[1])
				formData.append(`files`, entry[1])
			});
		}
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
		}
	}

	const handleFileChange = (e) => {
			console.log('handleFileChange')
			console.log(e.target.files) //this will give us an array and we want the first wone so we add 0
			if (e.target.files.length > 1){
				setImages(e.target.files)
				console.log(e.target.files)
			} else{
				setImage(e.target.files[0])
			}
	}
	const handleTextChange = (e) => {
			console.log('handleTextChange')
			setObjectId(objects.filter(object => object.attributes.object_id == e.target.value));
	}
	return(
		<form onSubmit={handleSubmit}>
			<input type='file' onChange={handleFileChange} multiple className='file-input'/>
			<input type='text' onChange={handleTextChange} className="text-input"/>
			<input type='submit' value='Upload' className='btn' />
		</form>
	)
}

export default UploadForm
