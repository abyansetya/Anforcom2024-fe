// components/Modal.tsx
import React from 'react'

interface ModalProps {
  isVisible: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]'>
      <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Anforcom 2024</h2>
        <p className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi voluptates voluptatibus!
        </p>
        <button onClick={onClose} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
