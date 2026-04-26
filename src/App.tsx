import { useState } from "react"
import { AddToCalendar } from "./components/AddToCalendar"
import { Countdown } from './components/Countdown'
import { ImageFadeGrid } from './components/ImageFadeGrid'
import { LunaDeMielCard } from './components/LunaDeMielCard'
//import { MusicPlayer } from './components/MusicPlayer'
import { RsvpModal } from "./features/rsvp/components/RsvpModal"
import { RevealOnScroll } from "./components/RevealOnScroll"

function App() {
  
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false)

  return (
    <>
      <section className="mx-auto w-full max-w-md pt-10 text-center bg-background">

          

          <RevealOnScroll>
        <div className="flex">
          <img 
             src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1777214788/xwvd2x232xmh6xg2mbwz.png" 
             alt="Emilia&Nicolas"
             className="w-11/12 h-auto mx-auto object-contain" 
             />
        </div>

        <div>
           {/* Subtítulo (si lo tienen como texto) */}
          <p className=" text-2xl w-full uppercase tracking-wider text-title font-[var(--font-montserrat-medium)] mt-16 ">
            ¡Nos casamos!
          </p>
           <Countdown targetDate="2026-11-22T00:00:00-03:00" />
        </div>
        
        <div>
          <p className="md:text-lg text-base font-playfair italic text-title mt-16 px-2">
            Queremos vivir este momento rodeados de personas
            que han formado parte de nuestra historia.
            </p>
        </div>

        <div>
          <ImageFadeGrid
            images={[
              "/fotos/1.jpg",
              "/fotos/2.jpg",
              "/fotos/3.jpg",
              "/fotos/4.jpg",
              "/fotos/5.jpg",
              "/fotos/6.jpg",
            ]}
            />
        </div>
</RevealOnScroll>

<RevealOnScroll delay={0.3}>

{/* Agendar fecha */}
        <div className="mt-7">
          <div>
      <img
        src="/gifts/fecha.gif"
        alt="https://res.cloudinary.com/dwxwejuvu/image/upload/v1777214788/tvf7zrcflpum0jyynodh.png"
        className="mx-auto h-auto w-20 object-contain"
      />
           <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase">Agenda la fecha</h2>
          </div>          
          <img 
             src="/fecha.png" 
             alt="Emilia&Nicolas"
             className="w-full h-auto mx-auto object-contain mt-2" 
          />
          
          <AddToCalendar />

        </div>
            <p className="text-lg font-playfair pb-3 italic text-title mt-8">
            Itinerario
            </p>

      </RevealOnScroll>

        <div>

          <div className="space-y-10">
      <RevealOnScroll>      
            <div className="">
              <img 
              src="/gifts/ceremonia.gif" 
              alt="gift_ceremonia" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercasemt-2">
                CEREMONIA RELIGIOSA
              </h2>

              <p className="md:text-lg text-xs font-montserrat text-texto tracking-wide uppercase mt-5 mb-5">
                18:45 horas <br/>
                Parroquia Ntra Sra del Carmen.
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/VvtgWXs9whp9ZbAD6"
              className="px-4 py-0.5 text-sm uppercase border font-montserrat text-gray-400 border-title rounded-full focus:ring-1"
              >
                CÓMO LLEGAR
              </a>
            </div>

            </RevealOnScroll>


            <RevealOnScroll>
            <div className="">
              <img 
              src="/gifts/recepción.gif" 
              alt="gift_recepción" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase mt-2">
                recepción
              </h2>

              <p className="md:text-lg text-xs font-montserra text-texto tracking-wide uppercase mt-5 mb-5">
                20:00 horas <br/>
                ALMANDINO - Casa de Eventos.
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/5oMXhxMrJsCDbWTF7"
              className="px-4 py-0.5 text-sm uppercase border font-montserrat text-gray-400 border-title rounded-full focus:ring-1"
              >
                CÓMO LLEGAR
              </a>
            </div>
      </RevealOnScroll>

          </div>
        </div>


      

        <div className="">

          <RevealOnScroll>
          <LunaDeMielCard/>
          </RevealOnScroll>

          <RevealOnScroll>
              <div className="">
              <img 
              src="/gifts/desscode.gif" 
              alt="gift_desscode" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-sm text-title font-montserratMedium tracking-wider uppercase mt-2">
                dress code
              </h2>

              <p className="md:text-lg text-xs font-montserra text-texto tracking-wide uppercase mt-5 mb-10">
                Formal - Elegante
              </p>

            </div>
          </RevealOnScroll>
          
        </div>
 
          <RevealOnScroll>  
            <div className="bg-asistencia p-6 mt-7 h-auto pb-10">
              <img 
              src="/gifts/asistencia.gif" 
              alt="gift_asistencia" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase mt-2 mb-5">
                CONFIRMÁ TU ASISTENCIA
              </h2>

             <button
                type="button"
                onClick={() => setIsRsvpModalOpen(true)}
                className="px-4 py-0.5 text-sm uppercase border font-montserrat text-texto border-title rounded-full focus:ring-1"
              >
                Completá el formulario
              </button>
            </div>

        </RevealOnScroll>

      </section>

      <RsvpModal
  isOpen={isRsvpModalOpen}
  onClose={() => setIsRsvpModalOpen(false)}
/>

    </>
  )
}

export default App
