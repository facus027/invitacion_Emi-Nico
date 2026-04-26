import { RsvpForm } from "./RsvpForm"

type RsvpModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const RsvpModal = ({ isOpen, onClose }: RsvpModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="relative w-full max-w-md rounded-2xl border border-[#d4af37]/40 bg-[#f3eeea] p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar formulario"
          className="absolute right-4 top-3 text-2xl text-texto transition hover:text-[#d4af37]"
        >
          ×
        </button>

        <div className="mb-6 text-center">
          <h2 className="font-serif text-2xl uppercase tracking-widest text-[#d4af37]">
            Confirmar asistencia
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-texto">
            Completá tus datos y reserva tu tarjeta antes del 10 de noviembre de 2026.
          </p>
        </div>

        <RsvpForm />
      </div>
    </div>
  )
}