import React, { useRef, useEffect } from 'react'
import {  } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
    const searchValue = useRef('')

    const searchCocktail = ()=>{
        setSearchTerm(searchValue.current.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    useEffect(()=>{
        searchValue.current.focus()
    })
    return (
        <section className="section search">
            <form action="" className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">

                <label htmlFor="name">search for your favorite cocktail</label>
                <input onChange={searchCocktail} type="text" id='name' ref={searchValue}/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm