import '../styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'

console.log('xx')

const MyApp: AppType = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

export default MyApp
