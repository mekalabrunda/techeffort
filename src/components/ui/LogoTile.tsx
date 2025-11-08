import { useState } from 'react'

type Props = { label: string; src?: string }

export default function LogoTile({ label, src }: Props) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="w-24 h-24 sm:w-28 sm:h-28 rounded-[6px] bg-surface-tile shadow-tile border border-black/5
                 flex items-center justify-center text-text-muted text-sm font-semibold overflow-hidden p-2
                 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {src && !imgError ? (
        <div className="w-full h-full bg-gray-50 rounded-[5px] shadow-sm overflow-hidden flex items-center justify-center p-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={label}
            onError={() => setImgError(true)}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-[3px]"
          />
        </div>
      ) : (
        <div className="w-full h-full bg-gray-50 rounded-[5px] shadow-sm flex items-center justify-center p-1">
          <span className="text-center px-2">{label}</span>
        </div>
      )}
    </div>
  )
}
