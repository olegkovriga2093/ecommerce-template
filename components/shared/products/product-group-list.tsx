'use client'

import { useIntersection } from 'react-use'
import { ProductCard } from './product-card'
import { useEffect, useRef } from 'react'
import { useCategoryStore } from '@/store/category'
import { Title } from '../title'

type Item = {
	id: number
	name: string
	price: number
	items: { price: number }[]
}

interface Props {
	title: string
	products: Item[]
	categoryId: number
}

export const ProductGroupList = ({ title, products, categoryId }: Props) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])

	return (
		<div id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div className='grid grid-cols-3 gap-12'>
				{products.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	)
}
