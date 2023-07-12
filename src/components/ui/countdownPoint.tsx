import RoundedStarPurple from '../svg/roundedStarPurple'

interface CountdownPointProps extends React.HTMLAttributes<HTMLDivElement> {
  time: string
  unit: string
}

export default function CountdownPoint({ time, unit, ...props }: CountdownPointProps) {
  return (
    <div className='relative h-[200px] w-[200px] flex flex-col place-content-center' {...props}>
      <RoundedStarPurple className='w-full h-full absolute left-1/2 -translate-x-1/2 -z-10' />
      <div className='w-full h-full flex flex-col place-content-center'>
        <p className='leading-none font-serif text-white text-center text-[4rem]'>{time}</p>
        <p className='leading-none font-sans text-white text-center text-2xl relative'>{unit}</p>
      </div>
    </div>
  )
}
