import React, {useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react';

const Wysiwyg = (props) => {

    return (
        <>
            <div className="time" id="wysiwyg-editor">
                <Editor apiKey='rr54zoicxkt3ah4i2h3xynyo16biuentcxqycps7ep8l9b0f'
                    initialValue={props.wysiwyg}
                    init={{
                        height: 294,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | lignleft aligncenter alignright alignjustify | ullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={props.handleEditorChange}
                />
            </div>
        </>
    )
}
export default Wysiwyg
