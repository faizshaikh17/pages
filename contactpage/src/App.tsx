// import React from 'react'
import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <main className='relative min-h-screen'>
        <section className='relative flex justify-center'>
          <Header />
          <div className='text-[14rem] absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none font-bold opacity-3 tracking-tighter'>
            CONTACT
          </div>
        </section>

      </main>

    </>
  )
}

export default App
