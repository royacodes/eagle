"use client";

import { SearchGameProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

const SearchGame = ({game, setGame}: SearchGameProps) => {
    const [query, setQuery] = useState('');
  return (
    <div className='search-game'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image src= '/game-logo.svg' alt='game logo' width={20} height={20}
                    className='ml-4'/>
                </Combobox.Button>
                <Combobox.Input className="search-game__input" placeholder='BlackJack'
                displayValue={(game : string) => game}
                onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </Combobox>
    </div>
  )
}

export default SearchGame