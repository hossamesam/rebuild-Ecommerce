import { baseUrl } from '@/baseUrl';
import axios from 'axios';
import React, { ReactElement, ReactHTMLElement, Ref, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { InputLogoSVG } from '../../../../../public/svg';


const InputImage = forwardRef(function InputImage(props, ref) {
    const { label, ...otherProps } = props;

    const [getsort, setSort] = useState([]);
    const [files, setFiles] = useState([]);
    function handleClick(e) {
        // e.preventDefault();
        // const droppedFiles = e.dataTransfer.files;

        let formData = new FormData();
        // files.forEach((file, index) => {
        //     formData.append(`file${index}`, file);
        // });
        formData.append("file", e.target.files[0]);

        // setFiles([...e.target.files]);
        for (let i = 0; i < e.target.files?.length; i++) {
            setFiles(value => [...value, URL.createObjectURL(e.target.files[i])])
        }

        // formData.append("file", e.target.files[0]);

        axios.post(`${baseUrl}/api/attachments`, formData, {
            "headers": {
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyOTA2MDU5MiwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzI4OTc0MTkyfQ.4buKsSVGIWVqDKK3ehNKYo78WTXI4PZj6bZ7I7JVYLtfqTJEQyfMRTp3a5wAR95czWoUohdRgKu6cARu2IQMwA",
                'Content-Type': `multipart/form-data; boundary=<calculated when request is sent>`,
            }
        })
            .then((res) => {
                // console.log(res)
                setSort([...getsort, { "guid": res.data.guid }])
            })
            .catch((err) => ref.current = err)

        // setSort(value => [...value, URL.createObjectURL(e.target.files[0])])

        // console.log(e.target.value + "\n" + "URL = " + URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        ref.current = getsort
    }, [getsort])

    return (
        <>
            <div className="flex items-start justify-center text-center w-full  ">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-300 bg-gray-200   dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:border-gray-500 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <InputLogoSVG />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden "
                        // multiple
                        onChange={handleClick}
                    // onDrop={handleClick}
                    // onDragOver={(event) => event.preventDefault()}
                    />
                </label>
            </div>
            {/* <input type="text" {...otherProps} ref={ref} /> */}
            <div className='grid xl:grid-cols-5  md:grid-cols-4 max-md:grid-cols-3 gap-2'>
                {files.map((e, index) => (
                    <div key={index} className='max-w-52 h-52 flex items-center justify-center bg-white border-2 border-neutral-500 rounded-lg border-solid  text-red-500 mt-2'>
                        <img className='object-fill h-full w-full rounded-md' src={e} />
                    </div>
                ))
                }
            </div>
        </>
    )
}
)

export default InputImage