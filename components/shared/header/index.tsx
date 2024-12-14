import { AuthButton } from './auth-button'
import { CartButton } from './cart-button'
import { Container } from '../container'
import { Logo } from './logo'

export const Header = () => (
	<header className='border border-b'>
		<Container className='flex items-center justify-between py-2'>
			<Logo />
			<div className='flex items-center gap-3'>
				<AuthButton />
				<CartButton />
			</div>
		</Container>
	</header>
)
