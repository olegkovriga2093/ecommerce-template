import { pagesConfig } from '@/config/pages.config'
import Link from 'next/link'
import { Title } from '../title'

export const Logo = () => (
	<Link href={pagesConfig.home}>
		<Title text='Shop' size='2xl' className='font-black uppercase' />
	</Link>
)
