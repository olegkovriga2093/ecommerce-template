import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/shared'

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
})

export const metadata: Metadata = {
	title: 'Shop | Home',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${nunito.variable} antialiased`}>
				<Header />
				<main className='min-h-screen'>{children}</main>
			</body>
		</html>
	)
}
