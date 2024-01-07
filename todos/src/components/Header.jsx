import { useState } from 'react'
import { useDispatch } from 'react-redux'
import tickImage from '../assets/images/double-tick.png'
import nodeImage from '../assets/images/notes.png'
import plusImage from '../assets/images/plus.png'
import { added, allCompleted, clearCompleted } from '../redux/todos/actions'

const Header = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(added(input))
    setInput('')
  }

  const handleCompleteAll = () => {
    dispatch(allCompleted())
  }

  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
          <img src={nodeImage} className='w-6 h-6' alt='Add todo' />
          <input
            value={input}
            onChange={handleInput}
            type='text'
            placeholder='Type your todo'
            className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
          />
          <button
            type='submit'
            className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}>
            Plus
          </button>
        </form>

        <ul className='flex justify-between my-4 text-xs text-gray-500'>
          <li
            className='flex space-x-1 cursor-pointer'
            onClick={handleCompleteAll}>
            <img className='w-4 h-4' src={tickImage} alt='Complete' />
            <span>Complete All Tasks</span>
          </li>
          <li onClick={handleClearCompleted} className='cursor-pointer'>
            Clear completed
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
