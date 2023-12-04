import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/main.scss';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dmitry Ø. Frontend & Design',
	description:
		'Explore Dmitry Ø. s portfolio showcasing innovative front-end development and creative web design. Discover cutting-edge web solutions, visually stunning designs, and seamless user experiences crafted to elevate online presence.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
