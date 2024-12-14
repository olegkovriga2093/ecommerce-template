import { Categories } from './categories'
import { Container } from '../container'
import { SortPopup } from './sort-popup'

export type Item = {
	id: number
	name: string
}

export const TopBar = ({ categories }: { categories: Item[] }) => {
	return (
		<div className='sticky top-0 z-50 py-2 bg-white shadow-lg shadow-black/5'>
			<Container className='flex items-center justify-between'>
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
