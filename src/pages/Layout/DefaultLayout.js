import React from 'react'
import { Header } from '../../components/HeaderAndFooter/Header'
import { Footer } from '../../components/HeaderAndFooter/Footer'
import './styles/DefaultLayout.css'

const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'><Header/></header>

        <main className='main'>{children}</main>

        <footer className='footer'><Footer/></footer>
    </div>
  )
}

export default DefaultLayout