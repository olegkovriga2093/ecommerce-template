import { twMerge } from 'tailwind-merge'
import { PropsWithChildren } from 'react'

export const Container = ({
	className,
	children,
}: PropsWithChildren<{
	className?: string
}>) => (
	<div className={twMerge('mx-auto max-w-[1280px]', className)}>{children}</div>
)
