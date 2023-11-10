import { XCircleIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'

const NewToast = ({ message, onClose, color }) => {
  const bgColorClass = {
    green: 'bg-green-600',
    red: 'bg-red-600',
  }[color]

  const borderColorClass = {
    green: 'border-green-600',
    red: 'border-red-600',
  }[color]

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  const countdownLineStyle = {
    animation: 'countdown 3s linear forwards',
    bottom: '0',
    left: '0',
    height: '1px',
    backgroundColor: 'white',
    width: '0', // Initial width is 0
  }

  return (
    <div
      className={`toast ${borderColorClass} border-2 m-1 md:w-[50%] ${bgColorClass} max-w-[25rem] pl-2 overflow-hidden rounded-md flex items-center relative`}
    >
      <div
        style={countdownLineStyle}
        className="absolute bottom-0 left-0 w-full"
      />

      <p className="break-words flex-1 text-white z-10">{message}</p>
      <div className="border-l-2 border-white h-12 self-center z-10"></div>
      <div>
        <button
          onClick={onClose}
          className="ml-2 flex justify-center z-10"
          aria-label="Close"
        >
          <XCircleIcon className="h-12 w-12 text-white" />
        </button>
      </div>
    </div>
  )
}

export default NewToast
