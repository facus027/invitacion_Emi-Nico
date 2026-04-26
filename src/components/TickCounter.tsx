type TickCounterProps = {
  className?: string
}

export function TickCounter({ className }: TickCounterProps) {
  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        {/* Alto controlado para que sea responsive */}
        <div className="h-[120px] w-full sm:h-[140px]">
          <iframe
            title="Countdown - Nos casamos"
            src="https://www.tickcounter.com/widget/countdown/9076569"
            className="h-full w-full"
            frameBorder={0}
            scrolling="no"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  )
}
