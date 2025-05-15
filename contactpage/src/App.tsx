import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Facebook, Mail, PhoneCall, MapPinned, ArrowUpRight } from 'lucide-react'

function App() {
  interface Obj {
    name: string
    contact: string | number
    tag: React.ReactNode
  }

  const reachoutDetails: Obj[] = [
    { name: 'Email us', contact: 'johndoe69@gmail.com', tag: <Mail /> },
    { name: 'Call us', contact: +910256810117, tag: <PhoneCall /> },
    { name: 'Our location', contact: 'Vadodara, Gujarat, India', tag: <MapPinned /> },
  ]

  return (
    <>
      <main className='relative min-h-screen space-y-44'>
        <section className='relative flex justify-center'>
          <Header />
          <div className='text-[12.5rem] absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none font-bold opacity-2 tight'>
            CONTACT
          </div>
        </section>
        <section className='flex z-20 gap-4 justify-center items-center'>
          <div className='gap-15 flex flex-col w-[43rem]'>
            <div className='flex flex-col gap-6'>
              <button className='h-12 flex items-center w-32 border shadow-[inset_0_6px_4px_rgba(0,0,0,0.2),inset_0_-6px_4px_rgba(0,0,0,0.2),0_6px_6px_rgba(255,255,255,0.1),0_-6px_6px_rgba(255,255,255,0.1)] font-semibold border-white/20 bg-neutral-800 rounded-3xl'>
                <span className='h-10 w-10 flex justify-center items-center rounded-full mx-1 bg-neutral-800 bg-radial-[at_50%_25%] from-neutral-600 to-zinc-900 to-65%'>
                  <Facebook size={19} />
                </span>
                <p className='flex h-full w-18 justify-center items-center'>Contact</p>
              </button>
              <div className='w-[21rem] space-y-1 text-left'>
                <h2 className='text-[2.5rem] font-semibold'>Get in touch</h2>
                <p className='text-white/40'>Have questions or ready to transform your buisness with AI automation?</p>
              </div>
            </div>
            <div className='space-y-3'>
              {reachoutDetails.map((item: Obj) => (
                <div className='flex items-center p-5 bg-neutral-900/50 justify-between h-24 w-full rounded-2xl border-2 border-white/10 shadow-[inset_0_6px_4px_rgba(255,255,255,0.03),inset_0_-6px_4px_rgba(255,255,255,0.03)]'>
                  <div className='flex gap-5'>
                    <span className='flex items-center bg-neutral-900/50 justify-center h-13 w-13 border-2 border-white/20 rounded-lg shadow-[0_0_1px_rgba(255,255,255,0.5)]'>
                      {item.tag}
                    </span>
                    <div className='flex flex-col items-start'>
                      <p>{item.name}</p>
                      <p className='text-white/40'>{item.contact}</p>
                    </div>
                  </div>
                  <button className='h-10 w-10 flex items-center justify-center bg-neutral-800 rounded-3xl'>
                    <ArrowUpRight />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className=' w-[40rem] flex flex-col p-2.5 rounded-2xl border-2 border-white/10 shadow-[inset_0_6px_4px_rgba(255,255,255,0.03),inset_0_0_20px_rgba(255,255,255,0.1)]'>
            <form className='flex flex-col gap-2.5' action="">
              <input className='h-14 border-[2px] font-semibold bg-white/5 px-4 focus:outline-none border-white/5 backdrop-blur-md rounded-xl' type="text" name='name' placeholder='Name' />
              <input className='h-14 border-[2px] font-semibold bg-white/5 px-4 border-white/5 focus:outline-none backdrop-blur-md rounded-xl' type="text" name='email' placeholder='Email' />
              <textarea className='min-h-[21rem] font-semibold border-[2px] bg-white/5 p-4 focus:outline-none border-white/5 backdrop-blur-md rounded-xl' placeholder='Message' name='message' />
              <button className='h-14 border-[2px] font-semibold bg-white/70 text-black px-4 border-white/5 backdrop-blur-md rounded-xl'>Submit</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
