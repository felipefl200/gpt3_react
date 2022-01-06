import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { CTA, Brand, NavBar } from './components'

import './App.css'
import './index.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <CTA />
            <Possibility />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
