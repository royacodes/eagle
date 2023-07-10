"use client"
import { useState } from "react"

import SearchGame from "./SearchGame"

const SearchBar = () => {
    const [game, setGame] = useState('');
    const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchGame
            game = {game}
            setGame = {setGame}
            />
        </div>
    </form>
  )
}

export default SearchBar