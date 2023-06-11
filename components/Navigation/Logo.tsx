import Image from 'next/image'
import svg from '@/public/wealth_health_logo.svg'

function Logo() {
  return (
    <>
      <div className={'w-20 h-20 relative'}>
        <Image
          src={svg}
          height={80}
          width={80}
          alt="Wealth Health Logo"
          priority
          className={'object-contain w-20 h-20'}
        />
      </div>
      <div className="whitespace-nowrap">
        <h1 className='text-xl'>HRnet</h1>
        <p className='text-sm'>by Wealth Health</p>
      </div>
    </>
  )
}

export default Logo