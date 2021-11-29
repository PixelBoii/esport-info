import Games from '../public/game_info.json'
import { useEffect } from 'react'
import { registerView } from './_app.js'

const game_details = Games['dota-2'];

export default function Dota2() {
    useEffect(() => registerView('dota-2'))

    return (
        <div>
            <div className="flex items-center h-64 bg-center bg-cover bg-no-repeat border-b-[12px] border-dota2" style={{ backgroundImage: `url('${game_details?.banner}')` }}>
                <div className="container max-w-5xl mx-auto text-center">
                    <div className="px-16 py-4 w-max rounded bg-dota2 mx-auto">
                        <p className="text-white text-3xl font-bold drop-shadow"> { game_details?.name } </p>
                    </div>
                </div>
            </div>

            <div className="py-16 container max-w-5xl mx-auto">
                <div className="text-center">
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character, known as a "hero", who all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's "Ancient", a large structure located within their base. </p>
                </div>

                <div className="mt-12 max-w-3xl mx-auto">
                    <p className="text-gray-700 text-2xl font-semibold text-center"> The map </p>

                    <div className="flex items-center space-x-6 mt-6">
                        <p className="text-gray-700 font-semibold text-right leading-7 w-7/8"> The Map is the playing field for all Dota 2 matches. It is comprised of two sides, one for the Radiant icon.png Radiant faction, and one for the Dire icon.png Dire faction. To win, players must destroy the opposing side's Ancient, an important building at the center of each team's base. The map is represented in the interface by the minimap. </p>

                        <img src="/dota2_map.png" className="w-1/4 rounded-md" />
                    </div>
                </div>

                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-700 text-2xl font-semibold"> Game modes </p>

                    <p className="text-gray-700 text-xl font-semibold mt-4"> Ranked All Pick </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> In this mode all heroes are available. Players may pick any hero as long as another player has not already chosen it. The same rule is applied in Unranked Matchmaking. This includes a ban phase before the picking phase. </p>
                    <img src="dota2_ranked_all_pick.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-700 text-xl font-semibold mt-8"> Captains Mode </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> The standard mode for competitive play. In Captains Mode, two team captains go through phases of banning heroes from the pool and picking heroes for their team. After all 10 heroes are selected, each team's players pick their hero from the five their captain had chosen. Each captain has 30 seconds to make a pick and 35 seconds to select a ban when it is their turn. Each team's allotted 130 second reserve time depletes any time their captain takes longer than allotted to make a pick or ban. If reserve time runs out before a pick, a random hero will be selected. If it runs out before a ban, no hero will be banned. </p>
                    <img src="dota2_captains_mode.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-700 text-xl font-semibold mt-8"> Random Draft </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> In this mode, 50 heroes are randomly chosen to be available. The players on each team take turns picking heroes from the pool, and only have 20 seconds to make their selection when it is their turn. </p>
                    <img src="dota2_random_draft.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}
