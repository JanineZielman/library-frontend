import React from 'react'
import { useState } from 'react'
import { fetchAPI } from "../lib/api"

const Upload = ({objects}) => {
    const [image, setImage] = useState(null)
		const [objectId, setObjectId] = useState(null)

    const handleSubmit = async (e) => {
        console.log('handleSubmit')
        e.preventDefault()

        const formData = new FormData() // pure javascript nothing to do with react
        formData.append('files', image)
        formData.append('ref', 'api::object.object')
        formData.append('refId', objectId[0]?.id) //'refId' The event Id
        formData.append('field', 'cover_image') //'field' the image field we called 'image'

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
        console.log(e.target.files[0]) //this will give us an array and we want the first wone so we add 0
        setImage(e.target.files[0])
    }
		const handleTextChange = (e) => {
        console.log('handleTextChange')
				setObjectId(objects.filter(object => object.attributes.object_id == e.target.value));
    }
    return (
        <div>
            <h1> Upload Image</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type='file' onChange={handleFileChange} />
                </div>
								<div>
									<input type='text' onChange={handleTextChange} />
								</div>
                <input type='submit' value='Upload' className='btn' />
            </form>
        </div>
    )
}

export async function getStaticProps() {

  const [objectRes] = await Promise.all([
    fetchAPI("/objects", { populate: "*" }),
  ])

  return {
    props: {
      objects: objectRes.data,
    },
    revalidate: 1,
  }
}

export default Upload