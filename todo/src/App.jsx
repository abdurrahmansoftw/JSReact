const App = () => {
  return (
    <div className='grid place-items-center bg-blue-100 h-screen px-6 font-sans'>
      <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
        <div>
          <form className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
            <img src='./images/notes.png' className='w-6 h-6' alt='Add todo' />
            <input
              type='text'
              placeholder='Type your todo'
              className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
            />
            <button
              type='submit'
              className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"></button>
          </form>

          <ul className='flex justify-between my-4 text-xs text-gray-500'>
            <li className='flex space-x-1 cursor-pointer'>
              <img
                className='w-4 h-4'
                src='./images/double-tick.png'
                alt='Complete'
              />
              <span>Complete All Tasks</span>
            </li>
            <li className='cursor-pointer'>Clear completed</li>
          </ul>
        </div>
        <hr className='mt-4' />

        <hr className='mt-4' />
        <div className='mt-4 flex justify-between text-xs text-gray-500'>
          <p>2 tasks left</p>
          <ul className='flex space-x-1 items-center text-xs'>
            <li className='cursor-pointer font-bold'>All</li>
            <li>|</li>
            <li className='cursor-pointer'>Incomplete</li>
            <li>|</li>
            <li className='cursor-pointer'>Complete</li>
            <li></li>
            <li></li>
            <li className='h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500'></li>
            <li className='h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer'></li>
            <li className='h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer'></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
