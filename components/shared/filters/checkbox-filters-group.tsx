'use client'

import { Button, Input } from '@/components/ui'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'
import { ChangeEvent, useState } from 'react'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'

type Item = FilterCheckboxProps

interface Props {
	title: string
	items: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
}

export const CheckboxFiltersGroup = ({
	title,
	items,
	limit = 5,
	searchInputPlaceholder = 'Search...',
}: Props) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchValue(e.target.value)

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
		  )
		: items.slice(0, limit)

	return (
		<div className='space-y-3'>
			<p className='font-bold'>{title}</p>

			{showAll && (
				<div className=''>
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 px-1 pb-1 overflow-auto scrollbar'>
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={ids => console.log(ids)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={cn(showAll && 'border-t border-t-neutral-100')}>
					<Button
						variant='secondary'
						className='mt-3 w-full'
						onClick={() => setShowAll(!showAll)}
					>
						{showAll ? <EyeOff /> : <Eye />}
					</Button>
				</div>
			)}
		</div>
	)
}
