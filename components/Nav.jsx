"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className='flex-between w-full mb-16 mt-5 pt-30'>
      <Link href='/' className='flex gap-2 flex-center'>
      <Image 
      src="/assets/images/logo.svg"
      alt='PromptAI logo'
      height={37}
      width={37}
      className='object-contain'
      />
      <p className='logo_text'>PromptAI</p>
      </Link>
      {/* Mobile version*/}
      <div className='sm:flex hidden'>
      { isUserLoggedIn ? (
        <div className='flex gap-3 md:gap-5'>
          <Link href='/' className='black_btn'>
          Create Post
          </Link>
          <button type='button' onClick={signOut} className='outline_btn'>
            Sign Out
          </button>
        </div>
      ) : (
        <div>

        </div>
      ) }
      </div>
    </nav>
  )
}

export default Nav