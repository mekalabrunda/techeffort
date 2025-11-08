import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ className?: string }>

export default function Card({ className = '', children }: Props) {
  return (
    <div
      className={`rounded-xl xl:rounded-xl bg-surface-card shadow-card border border-black/5
                  p-6 sm:p-8 transition-transform duration-200 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  )
}
