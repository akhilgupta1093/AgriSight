import { forwardRef } from "react"

import { twMerge } from "tailwind-merge"


export interface BaseSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const Root = forwardRef(function Root(
  { className, children, ...props }: BaseSectionProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={twMerge(
        "rounded-md border border-colors-border-secondary bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})

interface HeaderSectionProps {
  bg?: "white" | "haze"
  hideBorder?: boolean
}

export const Header = forwardRef(function Header(
  {
    className,
    children,
    bg = "white",
    hideBorder = false,
    ...props
  }: BaseSectionProps & HeaderSectionProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={twMerge(
        "grid grid-cols-[1fr_auto] grid-rows-[auto_auto] items-start justify-between rounded-t-[inherit] px-5 py-6 @container/section-header border-b-2 border-colors-border-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})

export const Title = forwardRef(function Title(
  { className, children, ...props }: any,
  ref: React.Ref<HTMLHeadingElement>,
) {
  return (
    <span
      ref={ref}
      className={twMerge("text-h2 row-start-1 text-colors-text-primary", className)}
      {...props}
    >
      {children}
    </span>
  )
})

export const Subtitle = forwardRef(function Subtitle(
  { className, children, ...props }: any,
  ref: React.Ref<HTMLHeadingElement>,
) {
  return (
    <span
      ref={ref}
      className={twMerge("text-h4 row-start-2 text-colors-text-primary", className)}
      {...props}
    >
      {children}
    </span>
  )
})

export const Body = forwardRef(function Body(
  { className, children, ...props }: BaseSectionProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={twMerge("p-5", className)} {...props}>
      {children}
    </div>
  )
})

export const Actions = forwardRef(function Body(
  { className, children, ...props }: BaseSectionProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={twMerge(
        "col-start-1 flex flex-grow flex-wrap justify-end gap-2 pt-2 @md/section-header:col-start-2 @md/section-header:row-span-2 @md/section-header:ml-5 @md/section-header:pt-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})