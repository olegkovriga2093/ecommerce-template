import { Checkbox, Label } from '@/components/ui'
import { ReactNode } from 'react'

export interface FilterCheckboxProps {
	text: string
	value: string
	endAdornment?: ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
	name?: string
}

export const FilterCheckbox = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name,
}: FilterCheckboxProps) => (
	<div className='flex items-center gap-2'>
		<Checkbox
			id={`checkbox-${String(name)}-${String(value)}`}
			className='size-6 rounded-[8px] border-gray-50'
			onCheckedChange={onCheckedChange}
			checked={checked}
			value={value}
		/>
		<Label
			htmlFor={`checkbox-${String(name)}-${String(value)}`}
			className='flex-1 leading-none cursor-pointer'
		>
			{text}
		</Label>
		{endAdornment}
	</div>
)
