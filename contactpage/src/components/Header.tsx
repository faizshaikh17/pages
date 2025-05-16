import { Menu, X, Zap, ArrowUpRight } from "lucide-react"
// import { Link } from "react-router-dom"
import { useState } from "react"
export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    interface Obj {
        name: string
    }

    const navItems: Obj[] = [
        { name: 'Home' },
        { name: 'Integration' },
        { name: 'Pricing' },
        { name: 'Logs' },
        { name: 'Contact' },
    ]

    return (
        <header>
            <div className="w-[43rem] text-[0.95rem] hidden sm:flex justify-between font-semibold items-center h-14 bg-transparent border-[2px] border-white/20 backdrop-blur-md rounded-xl shadow-[inset_0_6px_4px_rgba(255,255,255,0.1),inset_0_-6px_4px_rgba(255,255,255,0.1)]">
                <span className="h-12 w-12 flex items-center justify-center text-white/50  border-[2px] rounded-xl m-0.5 border-white/20 shadow-[inset_0_6px_4px_rgba(255,255,255,0.1),inset_0_-6px_4px_rgba(255,255,255,0.1)]">
                    <Zap />
                </span>
                <div className="flex items-center">
                    {navItems.map((item: Obj) => (
                        <span className="flex justify-center items-center rounded-xl hover:bg-white/5  h-12 px-4 hover:shadow-[6px_0_6px_rgba(0,0,0,0.1),-6px_0_6px_rgba(0,0,0,0.1),inset_0_6px_4px_rgba(255,255,255,0.1)]"><p className="text-white/60 z-10">{item.name}</p></span>))
                    }
                </div>
                <a href="https://github.com/faizshaikh17/pages" target="_blank" rel="noopener noreferrer">
                    <button className="h-11 outline-none w-40 flex items-center bg-black/15 justify-between border-2 rounded-xl mx-1 border-white/20 shadow-[0_8px_20px_rgba(255,255,255,0.1),0_-8px_20px_rgba(255,255,255,0.1)]">
                        <p className="flex items-center justify-center h-8.5 w-30 text-white/60 text-[0.95rem]"><p>Get Template</p></p>
                        <span className="h-9 w-9 flex items-center opacity-60 text-white justify-center mx-[0.15rem] rounded-r-lg m-0.5 bg-white/10">
                            <ArrowUpRight />
                        </span>
                    </button>
                </a>
            </div>

            <button className="fixed z-50 sm:hidden right-5" onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {isOpen &&
                <>
                    <div className=" inset-0 fixed backdrop-blur-xs z-[9] min-h-screen" />
                    <div className="flex fixed items-start gap-8 p-4 flex-col bg-neutral-900/70 backdrop-blur-md border-2 border-white/10 shadow-[inset_0_6px_4px_rgba(255,255,255,0.03),inset_0_-6px_4px_rgba(255,255,255,0.03)] inset-y-0 right-0 w-[75%] h-[50%] max-w-md z-20 transition-transform duration-500 translate-x-0 ease-in-out">
                        {navItems.map((item: Obj) => (
                            <span className="text-xl cursor-pointer ">{item.name}</span>
                        ))}
                    </div>
                </>
            }
        </header>
    )
}
