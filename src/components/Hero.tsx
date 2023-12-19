import React from 'react'
import { Pacifico, Jura } from 'next/font/google'

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] })
const jura = Jura({ weight: "400", subsets: ["latin"] })
const Hero = () => {
    return (
        <div className='text-center'>
                <h1 className={`${pacifico.className} `} style={{opacity: 0.2, fontSize: '120px'}}>Snippify</h1>
                <div className='flex flex-col mt-4'>
                        <h2 className={`text-4xl ${jura.className} text-white`} style={{fontSize: '30px'}}>Code Snippets</h2>
                </div>
        </div>
    )
}

export default Hero