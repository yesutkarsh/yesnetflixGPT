import React from 'react'
import style from "./bottomNav.module.css"
import SearchBar from '@/components/SearchComponent/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/utils/store'
import { tooggleGptSearch } from '@/utils/storeSlice/SearchSlice'
export default function BottomNav() {
  const searchBar = useSelector(store => store?.search?.showGptSearch)

  const dispatch = useDispatch()

  const toggleSearc = ()=>{
    dispatch(tooggleGptSearch())
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <>

    <div className={style.BottomNav}>
        <li>Home</li>
        <li onClick={toggleSearc}>
        {!searchBar? "Search" : <i class="ri-close-large-line"></i>}
          </li>
        <li>Profile</li>

    </div>
    <div className={style.blackBox}>

    </div>
    {searchBar? <SearchBar/> : null}

    </>
  )
}
