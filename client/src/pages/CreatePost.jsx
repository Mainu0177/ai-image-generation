import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import FormField from '../components/FormField';
import Loader from '../components/Loader'

import { CiImageOn } from "react-icons/ci";
import { getRandomPrompt } from '../utils';




const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  const [generatingImg, setGenerationImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () =>{

  }

  const handleSubmit = () =>{

  }

  const handleChange = (e) =>{
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const handleSurpriceMe = () =>{
    const randerPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randerPrompt })
  }

  return (
    <section className='max-w-7px mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328]'>Create</h1>
        <p className='mt-2 text-[#666a75] text-[14px] max-w-[500px]'>Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
          LabelName = "Your name"
          type="text"
          name="name"
          placeholder="john Doe"
          value={form.name}
          handleChange={handleChange}
          />
          <FormField
          LabelName = "Prompt"
          type="text"
          name="prompt"
          placeholder="A plush toy robot sitting against a yellow wall"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriceMe
          handleSurpriceMe={handleSurpriceMe}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 flex items-center justify-center'>
            {form.photo ? (
              <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
            ) : (
              // <img src='' alt='' className='' />
              <div className='text-9xl object-contain  opacity-40'>
                <CiImageOn />
              </div>
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generateImage}
            className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-green-800'
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className='mt-10'>
            <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created the image you want, you can share it with others in the community.</p>
            <button
            type='submit'
            className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              {loading ? 'Sharing...' : 'Share with the'}
            </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost