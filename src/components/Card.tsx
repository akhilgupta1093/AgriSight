import { forwardRef } from "react"

import { twMerge } from "tailwind-merge"

export type CardProps = {
  className?: string
  children: React.ReactNode
}

export const Card = forwardRef(function Card(
  { className, children, ...rest }: CardProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={twMerge("rounded-lg border border-grey-300 bg-white p-5", className)}
      {...rest}
    >
      {children}
    </div>
  )
})