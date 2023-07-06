import { Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2 }  from 'lucide-react'
import Image from 'next/image'
import { BsFillPlayFill } from 'react-icons/bs'


export function Footer(){
    return(
      <footer className="bg-zinc-900 border-t border-zinc-700 p-4 flex items-center justify-between">

      <div className="flex items-center gap-3">
      <Image src="/album2.jpeg" width={48} height={48} alt="capa do álbum Wasting Light"/>
      <div className="flex flex-col gap-1">
      <strong className="font-normal cursor-pointer">Don't Cry</strong>
      <span className="text-xs text-zinc-400 cursor-pointer">Guns N' Roses</span>
      </div>   
      </div>

      <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-5">
        <Shuffle size={20} className="text-zinc-400 hover:text-zinc-100"  />
        <SkipBack size={20} className="text-zinc-400 hover:text-zinc-100" />

        <button className="w-10 h-10 flex text-xl items-center justify-center rounded-full bg-white text-black">
          <BsFillPlayFill />
        </button>
        <SkipForward size={20} className="text-zinc-400 hover:text-zinc-100" />
        <Repeat size={20} className="text-zinc-400 hover:text-zinc-100" />
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600 cursor-pointer">
            <div className="bg-zinc-200 w-40 h-1 group rounded-full flex items-center justify-end cursor-pointer hover:bg-green-500">
              <div className="bg-zinc-100 w-3 h-3 rounded-full cursor-pointer invisible group-hover:visible"></div>
            </div>
          </div>
          <span className="text-xs text-zinc-500">2:14</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
      <Mic2 size={20} className="text-zinc-400 hover:text-zinc-100"/>
      <LayoutList size={20} className="text-zinc-400 hover:text-zinc-100" />
      <Laptop2 size={20} className="text-zinc-400 hover:text-zinc-100" />
      <div className="flex items-center gap-2"> 
        <Volume2 size={20} className="text-zinc-400 hover:text-zinc-100"/>
        <div className="h-1 rounded-full w-14 bg-zinc-600 cursor-pointer">
          <div className="bg-zinc-200 w-10 h-1 group flex items-center justify-end rounded-full hover:bg-green-500">
            <div className="bg-zinc-100 w-3 h-3 rounded-full invisible group-hover:visible"></div>
          </div>
        </div>
      </div>
      </div>
    </footer>
    )
}