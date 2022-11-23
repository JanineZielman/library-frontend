import React, { useEffect, useState } from 'react'
import { fetchAPI } from "../lib/api"
import UploadForm from '../components/upload'

const Upload = ({objects}) => {
  const [fieldId, setFieldId] = useState(null)

  useEffect(() => {
    var button = document.getElementsByClassName("button");

    var addSelectClass = function(){
      removeSelectClass();
      this.classList.add('selected');	
      setFieldId(this.id)
    }

    var removeSelectClass = function(){
      for (var i =0; i < button.length; i++) {
        button[i].classList.remove('selected')
      }
    }
    
    for (var i =0; i < button.length; i++) {
      button[i].addEventListener("click",addSelectClass);
    }
  })

    
    return (
      <div className='upload-page'>
        <div className='interface'>
            <h1> Upload your scan!</h1>
            <p>Select:</p>
            <div className='buttons'>
              <div className='button' id="cover_image">Front Cover</div>
              <div className='button' id="spines">Spine</div>
              <div className='button' id="back_cover">Back Cover</div>
              <div className='button' id="colophon">Colophon</div>
              <div className='button' id="content">Content</div>
            </div>
            
            <UploadForm objects={objects} fieldId={fieldId}/>
        </div>
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