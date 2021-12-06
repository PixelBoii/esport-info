import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import app from '../firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export async function getGames() {
  let db = getFirestore(app);
  let query = await getDocs(collection(db, 'games'));

  return query.docs.reduce((docs, e) => {
    return {
      ...docs,
      [e.id]: {
        ...e.data(),
        id: e.id,
      },
    }
  }, {});
}

function MyApp({ Component, pageProps }) {
  const [games, setGames] = useState({});

  useEffect(async() => {
    setGames(await getGames());
  }, []);

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

        { Object.keys(games).map(game => (
          <Link href={`/${game}`} key={game}>
            <a>
              <div className="px-4 py-4 hover:bg-gray-50">
                <p className="text-gray-700 font-semibold"> { games[game].name } </p>
              </div>
            </a>
          </Link>
        )) }
      </div>

      { Object.keys(games).length > 0 ? (
        <Component {...pageProps} games={games} />
      ) : (
        <div className="flex justify-center items-center w-full h-full text-center">
          <span className="text-gray-700 font-semibold text-lg"> Loading Games.. </span>
        </div>
      )}
    </div>
  )
}

export default MyApp
