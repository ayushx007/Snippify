'use client'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Pacifico, Jura } from 'next/font/google';
import Image from 'next/image';
import CodeBlock from './CodeBlock';

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const jura = Jura({ weight: "400", subsets: ["latin"] });
const imageVariants = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.4,
            duration: 1.0
        }
    }),
    hidden: { opacity: 0, y: 50 }
};

const Hero = () => {
    const controls = useAnimation();
    return (
        <div className='text-center -translate-y-20'>
            <motion.h1
                className={`${pacifico.className} p-4`} style={{ opacity: 0.2, fontSize: '120px', overflow: 'hidden' }}
                initial={{ width: '0' }} // Start with width 0
                animate={{ width: '100%' }} // Animate to full width
                transition={{ duration: 3.0, ease: "easeInOut" }} // Set the duration and easing function
            >
                Snippify
            </motion.h1>
            <div className='flex items-center mt-16 gap-20'>
                <h2 className={`text-4xl ${jura.className} text-white whitespace-nowrap`} style={{ fontSize: '30px' }}>Code Snippets</h2>

                <div  className=' rounded-lg custom-class' ></div>
                <div>
                    
                   
                </div>



            </div>
            <InView as="div" onChange={(inView, entry) => inView && controls.start("visible")}>
                <motion.div
                    className='grid grid-cols-4 gap-4 justify-center mt-16 mb-20'
                    initial="hidden"
                    animate={controls}
                >
                    {['/icons8-javascript-512 1.svg', '/icons8-flutter-480 1.svg', '/icons8-react-native-512 1.svg', '/icons8-nextjs-144 (1) 1.svg'].map((src, index) => (
                        <motion.div key={src} custom={index} variants={imageVariants}>
                            <Image
                                alt={src}
                                src={src}
                                width={82}
                                height={82}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </InView>
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