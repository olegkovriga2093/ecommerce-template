import { Input } from '@/components/ui'
import { Title } from '../title'
import { FilterCheckbox } from './filter-checkbox'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

const filters = [
	{ text: 'Filter 1', value: '1' },
	{ text: 'Filter 2', value: '2' },
	{ text: 'Filter 3', value: '3' },
	{ text: 'Filter 4', value: '4' },
	{ text: 'Filter 5', value: '5' },
	{ text: 'Filter 6', value: '6' },
	{ text: 'Filter 7', value: '7' },
	{ text: 'Filter 8', value: '8' },
	{ text: 'Filter 9', value: '9' },
	{ text: 'Filter 10', value: '10' },
	{ text: 'Filter 11', value: '11' },
	{ text: 'Filter 12', value: '12' },
	{ text: 'Filter 13', value: '13' },
	{ text: 'Filter 14', value: '14' },
	{ text: 'Filter 15', value: '15' },
	{ text: 'Filter 16', value: '16' },
	{ text: 'Filter 17', value: '17' },
	{ text: 'Filter 18', value: '18' },
	{ text: 'Filter 19', value: '19' },
	{ text: 'Filter 20', value: '20' },
]

export const Filters = () => (
	<div className='space-y-5'>
		<Title text='Filters' size='sm' className='font-bold' />

		<div className='flex flex-col gap-4'>
			<FilterCheckbox text='Filter 1' value='1' />
			<FilterCheckbox text='Filter 2' value='2' />
		</div>

		<div className='py-1 border-y border-y-neutral-100'>
			<p className='font-bold'>Price from - to:</p>
			<div className='flex gap-3 mb-3'>
				<Input
					type='number'
					placeholder='0'
					min={0}
					max={1000}
					defaultValue={0}
				/>
				<Input type='number' placeholder='1000' min={100} max={1000} />
			</div>
			<RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
		</div>

		<CheckboxFiltersGroup title='Filter' items={filters} />
	</div>
)
