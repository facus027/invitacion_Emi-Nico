// src/components/PanoramicImageSlider.tsx
import { useEffect, useState } from "react"

type PanoramicImageSliderProps = {
  images: string[]
  interval?: number
}

export function PanoramicImageSlider({
  images,
  interval = 3500,
}: PanoramicImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [images.length, interval])

  return (
    <section className="w-full px-4 py-7">
      <div className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-[2rem] border border-white/40 bg-white shadow-xl">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative aspect-[4/5] w-full flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              >
                <img
                  src={image}
                  alt={`Momento especial ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 text-center font-serif text-lg italic text-title">
          Una historia, muchos momentos.
        </p>
      </div>
    </section>
  )
}