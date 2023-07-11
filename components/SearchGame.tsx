"use client";

import { SearchGameProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { games } from '@/constants';

const SearchGame = ({game, setGame}: SearchGameProps) => {
    const [query, setQuery] = useState('');
    const filteredGames = query === "" ? games : games.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ));
  return (
    <div className='search-game'>
        <Combobox
        value={game}
        onChange={setGame}
        >
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image src= '/game-logo.svg' alt='game logo' width={20} height={20}
                    className='ml-4'/>
                </Combobox.Button>
                <Combobox.Input className="search-game__input" placeholder='BlackJack'
                displayValue={(game : string) => game}
                onChange={(e) => setQuery(e.target.value)}
                />
                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
                >
                    <Combobox.Options>
                        {
                        // filteredGames.length === 0 && query !== "" ? (
                        //     <Combobox.Option
                        //     value={query}
                        //     className='search-game__option'>
                        //         Create "{query}"
                        //     </Combobox.Option>
                        // ) :
                         (
                            filteredGames.map((item) => (
                                <Combobox.Option
                                key={item}
                                value={item}
                                className={({active}) => `
                                relative search-game__option 
                                ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                `}>
                                    {({selected, active}) => (
                                        <>
                                        <span
                                          className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                          }`}
                                        >
                                          {item}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                              active ? 'text-white' : 'text-teal-600'
                                            }`}
                                          >
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                </Combobox.Option>
                            ))
                        )
                    }
                    </Combobox.Options>

                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchGame