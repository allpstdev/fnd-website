import 'swiper/css'

import './globals.css'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { defaultLocale } from '@/middleware'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
})

const euclid = localFont({
    src: '../public/fonts/euclidcircular.ttf',
    variable: '--font-euclid'
})

export default function RootLayout({ children, params }) {
    return (
        <html
            lang={params.lang ?? defaultLocale}
            className={`${euclid.variable} ${inter.variable}`}
        >
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
