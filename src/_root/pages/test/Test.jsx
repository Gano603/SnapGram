import axios from 'axios';
import React, { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        const form = document.getElementById('uploadForm');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const data = new FormData(form);

            try {
                const res = await axios.post('http://localhost:5000/files/upload', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('File Upload Success:', res.data);
            } catch (error) {
                console.log('Error uploading file:', error);
            }
        });
    }, []);


    return (
        <div className='w-full h-full'>
            <form action='submit' id='uploadForm' encType='multipart/form-data'>
                <input type='file' name='image' />
                <button type='submit'>Upload</button>
            </form>
            {/* <button onClick={download}>Download</button> */}
        </div>
    );
};

export default Test;
