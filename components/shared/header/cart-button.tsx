import { ArrowRight, Loader2, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'

const placeholderArray = {
	totalAmount: 520,
	items: [1, 2, 3],
	loading: false,
}

export const CartButton = () => {
	const { totalAmount, items, loading } = placeholderArray
	return (
		<div>
			<Button
				className={cn('group relative', {
					'w-[105px]': loading,
				})}
			>
				{loading && <Loader2 className='animate-spin' />}
				{!loading && (
					<>
						<b>{totalAmount} $</b>
						<span className='w-[1px] h-full bg-white/30' />
						<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
							<ShoppingCart className='relative' />
							<b>{items.length}</b>
						</div>
						<ArrowRight
							size={20}
							className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
						/>
					</>
				)}
			</Button>
		</div>
	)
}
