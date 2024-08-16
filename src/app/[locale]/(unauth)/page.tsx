'use client'
import { useState } from 'react'

export default function Index(props: { params: { locale: string } }) {
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const [selectedOption, setSelectedOption] = useState<
    'login' | 'signup' | null
  >(null)
  const [showCard, setShowCard] = useState<boolean>(false)

  // Function to handle button click
  const handleButtonClick = (option: 'login' | 'signup') => {
    setSelectedOption(option)
    setShowCard(true) // Show card when an option is selected
  }
  const toggleCard = (type: 'login' | 'signup') => {
    setShowCard((prev) => (prev === type ? null : type))
  }

  const handleOptionClick = (option: 'login' | 'signup') => {
    setSelectedOption(option)
  }

  return (
    <>
      {/* Navbar */}
      <nav className='bg-white shadow-sm p-4 flex justify-between items-center'>
        {/* Left Section */}
        <div className='flex items-center space-x-4'>
          <img
            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpantip.com%2Flogin&psig=AOvVaw1WqL9kN1EO9hfS914VNBmJ&ust=1723901382212000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDep5_P-YcDFQAAAAAdAAAAABAw'
            alt='Pantip Logo'
            className='w-10 h-10'
          />
        </div>

        {/* Center Section */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => setActiveButton('post')}
            className={`flex items-center space-x-2 px-4 py-2 bg-white rounded-full hover:bg-gray-200 active:bg-gray-300 ${
              activeButton === 'post' ? 'font-bold' : ''
            }`}
          >
            <i className='fas fa-pencil-alt'></i>
            <span>ตั้งกระทู้</span>
          </button>
          <button
            onClick={() => setActiveButton('community')}
            className={`flex items-center space-x-2 px-4 py-2 bg-white rounded-full hover:bg-gray-200 active:bg-gray-300 ${
              activeButton === 'community' ? 'font-bold' : ''
            }`}
          >
            <i className='fas fa-users'></i>
            <span>Community</span>
          </button>
        </div>

        {/* Right Section */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => toggleCard('login')}
            className='flex items-center justify-center w-16 h-16 border border-gray-300 bg-white rounded-full hover:bg-gray-200 active:bg-gray-300'
          >
            <svg
              className='fill-current w-12 h-12' // เพิ่มขนาดเป็น 2 เท่า
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.5 0-7.5 1.2-7.5 3.5v1h15v-1c0-2.3-5-3.5-7.5-3.5z' />
            </svg>
          </button>
        </div>
      </nav>

      {/* Show Card */}
      {showCard && (
        <div className='absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50'>
          <div>
            <h3
              className={`text-lg ${selectedOption === 'login' ? 'font-bold text-gray-900' : 'text-gray-600'} cursor-pointer`}
              onClick={() => handleOptionClick('login')}
            >
              เข้าสู่ระบบ
            </h3>
          </div>
          <div className='mt-4'>
            <h3
              className={`text-lg ${selectedOption === 'signup' ? 'font-bold text-gray-900' : 'text-gray-600'} cursor-pointer`}
              onClick={() => handleOptionClick('signup')}
            >
              สมัครสมาชิก
            </h3>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className='bg-gray-100 p-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='ค้นหาบน Pantip'
            className='border rounded-full px-4 py-3 w-full pl-12' // เพิ่ม padding ซ้ายเพื่อเว้นที่สำหรับไอคอน
            style={{ height: '3rem' }} // ปรับความสูงของ input
          />
          <svg
            className='absolute top-1/2 right-3 transform -translate-y-1/2 fill-current text-pink-500 w-8 h-8'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M23 21l-5.2-5.2a8.8 8.8 0 1 0-1.5 1.5L21 21l2-2zm-11-4.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z' />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className='bg-white shadow-sm p-4 flex justify-around'>
        <button className='flex flex-col items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='w-12 h-12'
          >
            <path d='M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' />
          </svg>
          <span>หน้าแรก</span>
        </button>
        <button className='flex flex-col items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='w-12 h-12'
          >
            <path d='M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z' />
          </svg>
          <span>My Feed</span>
        </button>
        <button className='flex flex-col items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='w-12 h-12'
          >
            <path d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z' />
          </svg>
          <span>Pantip Pick</span>
        </button>
        <button className='flex flex-col items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='w-12 h-12'
          >
            <path d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z' />
          </svg>
          <span>Pantip Hitz</span>
        </button>
        <button className='flex flex-col items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='w-12 h-12'
          >
            <path d='M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z' />
          </svg>
          <span>Explore</span>
        </button>
        <button className='flex flex-col items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='w-12 h-12'
          >
            <path d='M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7l0-305.6 52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z' />
          </svg>
          <span>แลกพอยต์</span>
        </button>
        <button className='flex flex-col items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='w-12 h-12'
          >
            <path d='M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z' />
          </svg>
          <span>กิจกรรมพันทิป</span>
        </button>
      </div>
    </>
  )
}
