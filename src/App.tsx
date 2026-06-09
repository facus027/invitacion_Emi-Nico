import { useState } from "react"
import { AddToCalendar } from "./components/AddToCalendar"
import { Countdown } from './components/Countdown'
//import { LunaDeMielCard } from './components/LunaDeMielCard'
import { MusicPlayer } from './components/MusicPlayer'
import { RsvpModal } from "./features/rsvp/components/RsvpModal"
import { RevealOnScroll } from "./components/RevealOnScroll"

import { Gift } from "lucide-react";
import { PanoramicImageSlider } from "./components/PanoramicImageSlider"

function App() {
  
  const videoUrl =
  "https://res.cloudinary.com/dwxwejuvu/video/upload/f_auto,q_auto:good,w_720/v1780922806/video_pu8l7h.mov";

  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false)

  return (
    <>
    <div className="fixed top-5 right-5 z-[9999] opacity-90 hover:opacity-100">
  <MusicPlayer src="/audio/musica.mp3" />
</div>

      <section className="mx-auto w-full md:max-w-md text-center bg-background">

          <RevealOnScroll>
        <div className="flex">
         
         <video
           className="w-full rounded-2xl shadow-lg"
           autoPlay
           loop
           playsInline
           muted
           preload="metadata"
         >
           <source src={videoUrl} />
           Tu navegador no soporta video.
         </video>

        </div>

        <div>
           {/* Subtítulo (si lo tienen como texto) */}
          <p className=" text-2xl w-full uppercase tracking-wider text-title font-[var(--font-montserrat-medium)] mt-8 ">
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
          <PanoramicImageSlider
            images={[
              "/fotos/1.jpeg",
              "/fotos/2.jpeg",
              "/fotos/3.jpeg",
              "/fotos/4.jpeg",
              "/fotos/5.jpeg",
              "/fotos/6.jpeg",
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
        alt="fecha_gif"
        className="mx-auto h-auto w-20 object-contain"
      />
           <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase">Agenda la fecha</h2>
          </div>          
          <img 
             src="https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto:good/b45viibdiaf01xb7ji71.png" 
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
                18:00 horas <br/>
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
                Civil y Fiesta
              </h2>

              <p className="md:text-lg text-xs font-montserrat text-texto tracking-wide uppercase mt-5 mb-5">
                19:00hs a 5:00hs <br/>
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
             <div className="flex justify-center">
                <Gift
                 size={68}
                 strokeWidth={0.5}
                 className="text-white animate-giftFloat"
                />
              </div>

              <h2 className="md:text-base text-sm text-title font-montserratMedium tracking-wider uppercase mt-2 mb-5">
                TU PRESENCIA ES NUESTRO MEJOR REGALO
              </h2>

              <p className="md:text-base text-xs font-montserra text-texto tracking-wide uppercase mt-5 mb-10">
                Si querés acompañarnos en este momento tan importante,
                solo necesitamos que confirmes tu asistencia.

              </p>

             <button
                type="button"
                onClick={() => setIsRsvpModalOpen(true)}
                className="px-4 py-0.5 text-sm uppercase border font-montserrat text-texto border-title rounded-full focus:ring-1"
              >
                Confirmar Asistencia
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
