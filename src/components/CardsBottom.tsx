import Image from "next/image";

export function CardsBottom(){
    return(
        <div className="grid grid-cols-7 gap-4 mt-4">
        <a href="#" className="h-100 w-100 bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
        <Image src="/chorao.jpg" className="w-full" width={100} height={100} alt="capa do álbum Wasting Light"/>
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-xs text-zinc-500"> Wallows, COIN, girl in red and more,</span>
        </a>    
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
        <Image src="/chorao2.jpg" className="w-full" width={100} height={100} alt="capa do álbum Wasting Light"/>
        <strong className="font-semibold">Daily Mix 2</strong>
        <span className="text-xs text-zinc-500"> Wallows, COIN, girl in red and more,</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
        <Image src="/album2.jpeg" className="w-full" width={100} height={100} alt="capa do álbum Wasting Light"/>
        <strong className="font-semibold">Daily Mix 3</strong>
        <span className="text-xs text-zinc-500"> Wallows, COIN, girl in red and more,</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
        <Image src="/album2.jpeg" className="w-full" width={100} height={100} alt="capa do álbum Wasting Light"/>
        <strong className="font-semibold">Daily Mix 4</strong>
        <span className="text-xs text-zinc-500"> Wallows, COIN, girl in red and more,</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
        <Image src="/cbjr.jpg" className="w-full" width={100} height={100} alt="capa do álbum Wasting Light"/>
        <strong className="font-semibold">Daily Mix 5</strong>
        <span className="text-xs text-zinc-500"> Wallows, COIN, girl in red and more,</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
        <Image src="/album2.jpeg" className="w-full" width={100} height={100} alt="capa do álbum Wasting Light"/>
        <strong className="font-semibold">Daily Mix 6</strong>
        <span className="text-xs text-zinc-500"> Wallows, COIN, girl in red and more,</span>
        </a>
        <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
        <Image src="/album.jpg" className="w-full" width={100} height={100} alt="capa do álbum Wasting Light"/>
        <strong className="font-semibold">Daily Mix 7</strong>
        <span className="text-xs text-zinc-500"> Wallows, COIN, girl in red and more,</span>
        </a>
      </div>
    )
}