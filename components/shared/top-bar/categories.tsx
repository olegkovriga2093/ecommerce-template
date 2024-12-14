'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import { Item } from '.'

export const Categories = ({ items = [] }: { items: Item[] }) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)
	return (
		<div className={'inline-flex gap-1 bg-gray-50 p-1 rounded'}>
			{items.map(({ name, id }) => (
				<Link
					className={cn(
						'flex items-center font-bold h-11 rounded px-5',
						categoryActiveId === id && 'bg-white shadow-md shadow-gray-200'
					)}
					href={`/#${name}`}
					key={id}
				>
					{name}
				</Link>
			))}
		</div>
	)
}
