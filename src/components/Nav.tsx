"use client";
import React from 'react';
import Link from 'next/link';
import { Pacifico, Jura } from 'next/font/google';
import Image from 'next/image';
import { signOut, signIn, useSession } from 'next-auth/react';

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const jura = Jura({ weight: "400", subsets: ["latin"] });

const Nav: React.FC = () => {
    const { data: session } = useSession();
    return (
        <div>
            <nav className='flex justify-start items-center space-x-4 pt-4'>
                <p className={`${pacifico.className} pl-10 pr-10 text-3xl`}>Snippify</p>

                <div className="flex-grow">
                    <Link className={`${jura.className} mr-4`} style={{ opacity: 0.5 }} href="/">Home</Link>
                    <Link className={`${jura.className} mr-4`} style={{ opacity: 0.5 }} href="/docs">Docs</Link>
                    <Link className={`${jura.className} mr-4`} style={{ opacity: 0.5 }} href="/about">About</Link>
                </div>

                <div className='flex justify-start items-center space-x-4 pr-20'>
                    <input type="text" placeholder="Explore" className={`w-fit ${jura.className} pl-6 p-2 rounded-lg bg-[#1A1A1A]`} />
                    {!session ? (
                        <>
                            <Image
                                alt='github'
                                src='/Rectangle 27.svg'
                                width={40}
                                height={40} /><button onClick={() => signIn("github")} className={`${jura.className} text-white`}>Sign In</button>
                        </>
                    ) : (
                        <>
                            <Image
                                alt='github'
                                src={session.user?.image || ''}
                                width={40}
                                height={40} /><button onClick={() => signOut()} className={`${jura.className} text-white`}>Sign Out</button>
                        </>
                    )}
                </div>
            </nav>
            <hr className="border my-4" style={{ opacity: 0.2 }} />
        </div>
    );
};

export default Nav;
