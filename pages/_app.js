import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Games from '../public/game_info.json'

export async function getViews(...args) {
  return fetch(...args).then(res => res.json());
}

export async function registerView(game) {
  return fetch(`/api/views/${game}`, {
    method: 'POST',
  });
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="w-full sticky top-0 bg-white flex items-center justify-center z-10">
        <Link href="/">
          <a>
            <div className="px-4 py-4 hover:bg-gray-50">
              <p className="text-gray-700 font-semibold"> All Games </p>
            </div>
          </a>
        </Link>

        { Object.keys(Games).map(game => (
          <Link href={`/${game}`} key={game}>
            <a>
              <div className="px-4 py-4 hover:bg-gray-50">
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
