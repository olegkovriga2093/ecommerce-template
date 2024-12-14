import {
	Container,
	Filters,
	ProductGroupList,
	TopBar,
} from '@/components/shared'

const products = [
	{ id: 0, name: 'Product#1', price: 100, items: [{ price: 100 }] },
	{ id: 1, name: 'Product#2', price: 200, items: [{ price: 200 }] },
	{ id: 2, name: 'Product#3', price: 300, items: [{ price: 300 }] },
	{ id: 3, name: 'Product#4', price: 400, items: [{ price: 400 }] },
	{ id: 4, name: 'Product#5', price: 500, items: [{ price: 500 }] },
	{ id: 5, name: 'Product#6', price: 600, items: [{ price: 600 }] },
]

const categories = [
	{ id: 1, name: 'Cat#1', products },
	{ id: 2, name: 'Cat#2', products },
]

export default function Home() {
	return (
		<>
			<TopBar categories={categories} />

			<Container className='mt-5 pb-14'>
				<div className='flex justify-between gap-20'>
					<div className='min-w-64'>
						<Filters />
					</div>
					<div className='flex flex-col gap-16'>
						{categories.map(({ id, name, products }) => (
							<ProductGroupList
								key={id}
								title={name}
								products={products}
								categoryId={id}
							/>
						))}
					</div>
				</div>
			</Container>
		</>
	)
}
