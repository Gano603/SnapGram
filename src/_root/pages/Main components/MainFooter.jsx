import React from 'react'

const MainFooter = () => {
  return (
    <div className='w-full flex flex-col items-center mt-5 mb-12'>
      <ul className='flex items-center flex-wrap'>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://about.instagram.com/">Meta</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://about.instagram.com/">About</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://about.instagram.com/">Blog</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://www.instagram.com/about/jobs/">Jobs</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://help.instagram.com/">Help</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://developers.facebook.com/docs/instagram">API</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://www.instagram.com/legal/privacy/">Privacy</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://www.instagram.com/legal/terms/">Terms</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://www.instagram.com/explore/locations/">Locations</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://about.instagram.com/">Instagram Lite</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://about.instagram.com/">Threads</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://about.instagram.com/">Contact Uploading & Non-Users</a></li>
        <li className='text-[0.8rem] mx-2 text-gray-300'><a className='hover:underline' href="https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer">Meta Verified</a></li>
      </ul>
      <p className='text-[0.75rem] mx-[0.05rem] text-gray-300 my-3'>&copy; 2024 <a className='hover:underline' href="https://github.com/Gano603/SnapGram">Reactgram</a> from <a className='hover:underline' href="https://github.com/Gano603">Gano603</a></p>
    </div>
  )
}

export default MainFooter