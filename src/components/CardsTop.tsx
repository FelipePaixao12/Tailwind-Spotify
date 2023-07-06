import Image from "next/image";
import { BsFillCollectionPlayFill, BsFillPlayFill } from "react-icons/bs";

export function CardsTop(){
    return(

    
    <div className="grid grid-cols-3 gap-4 mt-4">
        <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/album2.jpeg" width={80} height={80} alt="capa do álbum Wasting Light"/>
        <strong>Guns N' Roses</strong>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400  text-black ml-auto mr-6 invisible group-hover:visible">
          <BsFillCollectionPlayFill />
        </button>
        </a>
         <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/album2.jpeg" width={80} height={80} alt="capa do álbum Wasting Light"/>
        <strong>Guns N' Roses</strong>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400  text-black ml-auto mr-6 invisible group-hover:visible">
          <BsFillPlayFill />
        </button>
        </a>
         <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/album2.jpeg" width={80} height={80} alt="capa do álbum Wasting Light"/>
        <strong>Guns N' Roses</strong>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400  text-black ml-auto mr-6 invisible group-hover:visible">
          <BsFillPlayFill />
        </button>
        </a>
         <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/album2.jpeg" width={80} height={80} alt="capa do álbum Wasting Light"/>
        <strong>Guns N' Roses</strong>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400  text-black ml-auto mr-6 invisible group-hover:visible">
          <BsFillPlayFill />
        </button>
        </a>
         <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/album2.jpeg" width={80} height={80} alt="capa do álbum Wasting Light"/>
        <strong>Guns N' Roses</strong>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400  text-black ml-auto mr-6 invisible group-hover:visible">
          <BsFillPlayFill />
        </button>
        </a>
         <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/album2.jpeg" width={80} height={80} alt="capa do álbum Wasting Light"/>
        <strong>Guns N' Roses</strong>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400  text-black ml-auto mr-6 invisible group-hover:visible">
          <BsFillPlayFill />
        </button>
        </a>
      
      </div>
    )
}