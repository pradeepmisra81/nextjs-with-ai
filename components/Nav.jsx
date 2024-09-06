"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
      <Image 
      src="/assets/images/logo.svg"
      alt='PromptAI logo'
      height={37}
      width={37}
      className='object-contain'
      />
      <p className='logo_text'>PromptAI logo</p>
      </Link>
    </nav>
  )
}

export default Nav