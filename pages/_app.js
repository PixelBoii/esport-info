import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Games from '../public/game_info.json'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="w-full sticky top-0 bg-white flex items-center z-10">
        <Link href="/">
          <a>
            <div className="px-4 py-3 hover:bg-gray-50">
              <p className="text-gray-700 font-semibold"> All Games </p>
            </div>
          </a>
        </Link>

        { Object.keys(Games).map(game => (
          <Link href={game} key={game}>
            <a>
              <div className="px-4 py-3 hover:bg-gray-50">
                <p className="text-gray-700 font-semibold"> { Games[game].name } </p>
              </div>
            </a>
          </Link>
        )) }
      </div>
      
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
