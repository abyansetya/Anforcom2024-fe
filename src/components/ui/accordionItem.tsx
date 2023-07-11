'use client'
import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

type AccordionItemProps = {
  header: string
  body: string
}

export default function AccordionItem({ header, body }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full'>
      {isOpen ? (
        <h1
          className='flex flex-row justify-between items-center bg-cpurple-6 text-white text-xl font-bold font-serif p-6 rounded-t-3xl'
          onClick={toggle}
        >
          {header}
          <MdKeyboardArrowUp size={24} />
        </h1>
      ) : (
        <h1
          className='flex flex-row justify-between items-center bg-cpurple-6 text-white text-xl font-bold font-serif p-6 rounded-3xl'
          onClick={toggle}
        >
          {header}
          <MdKeyboardArrowDown size={24} />
        </h1>
      )}
      <Collapse isOpened={isOpen}>
        <p className='bg-cpurple-6 text-white text-lg font-sans mt-[4px] p-6 rounded-b-3xl'>{body}</p>
      </Collapse>
    </div>
  )
}
