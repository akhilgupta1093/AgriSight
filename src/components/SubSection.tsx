import { forwardRef } from "react"

import { twMerge } from "tailwind-merge"

import * as Section from "./Section"

export interface BaseSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const Root = Section.Root

export const Header = forwardRef(function Header(
  {
    className,
    children,
    bg = "haze",
    ...props
  }: BaseSectionProps & { bg?: "white" | "haze" },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Section.Header ref={ref} className={twMerge("p-5 bg-green-50", className)} bg={bg} {...props}>
      {children}
    </Section.Header>
  )
})

export const Title = forwardRef(function Title(
  { className, children, ...props }: any,
  ref: React.Ref<HTMLHeadingElement>,
) {
  return (
    <div
      ref={ref}
      className={twMerge("row-start-1 text-colors-text-primary", className)}
      {...props}
    >
      {children}
    </div>
  )
})

export const Subtitle = forwardRef(function Subtitle(
  { className, children, ...props }: any,
  ref: React.Ref<HTMLHeadingElement>,
) {
  return (
    <div
      ref={ref}
      className={twMerge("row-start-2 text-colors-text-tertiary", className)}
      {...props}
    >
      {children}
    </div>
  )
})

export const Body = forwardRef(function Body(
  { className, children, ...props }: BaseSectionProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Section.Body ref={ref} className={twMerge("bg-transparent", className)} {...props}>
      {children}
    </Section.Body>
  )
})

export const Actions = Section.Actions