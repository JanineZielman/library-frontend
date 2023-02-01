import React, { useEffect, useState } from 'react'
import Display from '../components/display'

const Upload = () => {
  const [fieldId, setFieldId] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [submitKey, setSubmitKey] = useState(null)

  useEffect(() => {
    var button = document.getElementsByClassName("category");

    var addFile = function(){
      function createFile(){
        fetch('/export/final/scan.jpg').then(
          function(response){
            return response.blob();
          }
        ).then(
          function(image){
            let metadata = {
              type: 'image/jpeg'
            };
            return setFileName(new File([image], "scan.jpg", metadata));
          }
        )
      }
      createFile();
    }

    var removeSelectClass = function(){
      for (var i =0; i < button.length; i++) {
        button[i].classList.remove('selected')
      }
    }


    document.onkeydown = function (e) {
      const cover_image = document.getElementById('cover_image');
      const back_cover = document.getElementById('back_cover');
      const spines = document.getElementById('spines');
      const colophon = document.getElementById('colophon');
      const content = document.getElementById('content');
      var keyCode = e.key;
      if(keyCode == '-') {
        removeSelectClass();
        setFileName(null);
        cover_image.classList.add('selected');	
        setFieldId(cover_image.id);
        addFile();
      }
      if(keyCode == '=') {
        removeSelectClass();
        setFileName(null);
        back_cover.classList.add('selected');	
        setFieldId(back_cover.id);
        addFile();
      }
      if(keyCode == '[') {
        removeSelectClass();
        setFileName(null);
        spines.classList.add('selected');	
        setFieldId(spines.id);
        addFile();
      }
      if(keyCode == ']') {
        removeSelectClass();
        setFileName(null);
        colophon.classList.add('selected');	
        setFieldId(colophon.id);
        addFile();
      }
      if(keyCode == ';') {
        removeSelectClass();
        setFileName(null);
        content.classList.add('selected');	
        setFieldId(content.id);
        addFile();
      }
      if(keyCode == '.') {
        setSubmitKey(true);
      } else {
        setSubmitKey(false);
      }
    };
  })

    
    return (
      <div className='upload-page'>
        <Display fieldId={fieldId} fileName={fileName} submitKey={submitKey}/>
      </div> 
    )
}

export default Upload