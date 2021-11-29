import dynamic from 'next/dynamic'
import Link from 'next/link'
import useSWR from 'swr'
import Games from '../public/game_info.json'
import { getViews } from './_app.js'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ChartData = await Object.keys(Games).reduce(async (chart_data, game) => {
    return {
        ...await chart_data,
        [game]: (await import(`../public/${Games[game].chart_data}`)).default
    }
}, {})

const sparklineChartOpts = {
    chart: {
        sparkline: {
            enabled: true,
        },
    },
    xaxis: {
        type: 'datetime'
    },
}

function Game(game, link, chartData) {
    let { data: views_data } = useSWR(`/api/views/${link}`, getViews)

    return (
        <div className="bg-white rounded-md shadow flex flex-col justify-between" key={link}>
            <Link href={`/${link}`}>
                <a>
                    <div className="px-5 pt-6 pb-2">
                        <p className="text-gray-700 font-semibold text-2xl"> { game.name } </p>
                        <p className="text-gray-600 fonts-semibold"> { views_data?.views } views </p>
                    </div>
                </a>
            </Link>

            <Chart
                className="w-full"
                height="100px"
                type="area"
                options={{
                    ...sparklineChartOpts,
                    colors: [game.primary_color],
                }}
                series={[
                    {
                        name: 'Player Count',
                        data: chartData.map(e => ({ x: new Date(e[0]), y: e[1] }))
                    }
                ]}
            ></Chart>
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <div className="bg-gray-100 w-full">
                <div className="container max-5xl mx-auto pt-20 pb-32">
                    <p className="text-gray-700 font-black text-5xl text-center"> Most popular E-Sports </p>
                </div>
            </div>

            <div className="container max-5xl mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 -mt-8">
                    { Object.keys(Games).map(game => Game(Games[game], game, ChartData[game])) }
                </div>
            </div>
        </div>
    )
}
