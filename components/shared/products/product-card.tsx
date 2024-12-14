import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui'
import { Title } from '../title'

interface Props {
	id: number
	name: string
	price: number
}

export const ProductCard = ({ id, name = 'Product#1', price = 400 }: Props) => {
	return (
		<div className='w-min'>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 bg-gray-50 rounded-lg size-[260px]' />

				<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

				<p className='text-sm text-gray-400'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
					doloribus ipsa nobis culpa consectetur cum unde quidem optio laborum
					officiis.
				</p>

				<div className='flex justify-between items-center mt-4'>
					<span className='text-xl font-bold'>{price} $</span>

					<Button variant='secondary' className='text-base font-bold'>
						<Plus size={20} className='mr-1' /> Add
					</Button>
				</div>
			</Link>
		</div>
	)
}
