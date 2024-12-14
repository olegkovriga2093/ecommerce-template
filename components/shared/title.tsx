import { cn } from '@/lib/utils'
import { createElement } from 'react'

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface Props {
	size?: TitleSize
	className?: string
	text: string
}

export const Title = ({ text, size = 'sm', className }: Props) => {
	const mapTagBySize = {
		xs: 'h5',
		sm: 'h4',
		md: 'h3',
		lg: 'h2',
		xl: 'h1',
		'2xl': 'h1',
	} as const

	const mapClassNameBySize = {
		xs: 'text-base',
		sm: 'text-xl',
		md: 'text-2xl',
		lg: 'text-3xl',
		xl: 'text-4xl',
		'2xl': 'text-5xl',
	} as const

	return createElement(
		mapTagBySize[size],
		{ className: cn(mapClassNameBySize[size], className) },
		text
	)
}
