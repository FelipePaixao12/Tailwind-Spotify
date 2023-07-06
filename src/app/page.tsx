import { ChevronLeft, ChevronRight}  from 'lucide-react'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'
import { CardsTop } from '@/components/CardsTop'
import { CardsBottom } from '@/components/CardsBottom'

export default function Home() {
  return (
  <div className="h-screen flex flex-col scroll-m-0 scroll-my-0		">
    <div className="flex flex-1">
    <Sidebar />
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">

        <button className='w-6 h-6 rounded-full bg-black/60'>
          <ChevronLeft />
        </button>
        <button className='w-6 h-6 rounded-full bg-black/60'>
          <ChevronRight />
        </button>

      </div>
      
      <h1 className="font-semibold text-2xl mt-6">Good Afternoon</h1>
      <CardsTop />
      <h1 className="font-semibold text-2xl mt-6">Made for Felipe Paixão</h1>
      <CardsBottom />
    </main>
    </div>
    <Footer />
  </div>
  )
}
