import Image from 'next/image'
import svg from '@/public/wealth_health_logo.svg'

function Logo() {
  return (
    <>
      <div className={'w-24 h-24 relative'}>
        <Image
          src={svg}
          fill
          alt="Wealth Health Logo"
          priority
          className={'object-contain'}
        />
      </div>
      <h1 className="font-Copperplate">Wealth Health</h1>
    </>
  )
}

export default Logo