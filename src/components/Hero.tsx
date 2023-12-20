import React from 'react'
import { Pacifico, Jura } from 'next/font/google'
import Image from 'next/image'

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] })
const jura = Jura({ weight: "400", subsets: ["latin"] })
const Hero = () => {
    return (
        <div className='text-center'>
            <h1 className={`${pacifico.className}`} style={{ opacity: 0.2, fontSize: '120px' }}>Snippify</h1>
            <div className='flex items-center mt-16 gap-20'>
                <h2 className={`text-4xl ${jura.className} text-white whitespace-nowrap`} style={{ fontSize: '30px' }}>Code Snippets</h2>
                <div className='border border-purple-600 rounded-lg'>
                    <Image
                    className='rounded-lg'
                        alt="Code Snippet Image"
                        src='/hero_code.svg'
                        width={300}
                        height={300} 
                        layout='intrinsic' 
                    />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 justify-center mt-16 mb-20' >
                <Image
                alt='js'
                src='/icons8-javascript-512 1.svg'
                width={82}
                height={82}
                layout='intrinsic' />
                <Image
                alt='flutter'
                src='/icons8-flutter-480 1.svg'
                width={82}
                height={82}
                layout='intrinsic' />
                <Image
                alt='react-native'
                src='/icons8-react-native-512 1.svg'
                width={82}
                height={82}
                layout='intrinsic' />
                <Image
                alt='nextjs'
                src='/icons8-nextjs-144 (1) 1.svg'
                width={82}
                height={82}
                layout='intrinsic' />
            </div>
            <div className='flex justify-center items-center'>

            <div className='border rounded-lg w-fit'>
                <p className={` ${jura.className} p-2 pl-8 pr-8`} >Get Started</p>
            </div>
            </div>
                <p className={` text-xs ${jura.className} p-2 pl-6 pr-6`} >npm never-give-up</p>
        </div>
    )
}

export default Hero