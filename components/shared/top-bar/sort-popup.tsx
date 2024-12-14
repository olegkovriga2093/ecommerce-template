import { Button } from '@/components/ui'
import { ArrowUpDown } from 'lucide-react'

export const SortPopup = () => {
	return (
		<Button
			variant='secondary'
			className='inline-flex items-center gap-1 bg-gray-50 h-[52px] rounded'
		>
			<ArrowUpDown />
			<b>Sort:</b>
			<b>popularity</b>
		</Button>
	)
}
