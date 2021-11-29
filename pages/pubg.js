import Games from '../public/game_info.json'

const game_details = Games['pubg'];

const maps = [
    {
        "image_url": "/pubg_erangel_map.png",
        "name": "Erangel"
    },
    {
        "image_url": "/pubg_miramar_map.png",
        "name": "Miramar"
    },
    {
        "image_url": "/pubg_vikendi_map.png",
        "name": "Vikendi"
    },
    {
        "image_url": "/pubg_sanhok_map.png",
        "name": "Sanhok"
    },
];

export default function Pubg() {
    return (
        <div>
            <div className="flex items-center h-64 bg-center bg-cover bg-no-repeat border-b-[12px] border-pubg" style={{ backgroundImage: `url('${game_details?.banner}')` }}>
                <div className="container max-w-5xl mx-auto text-center">
                    <div className="px-16 py-4 w-max rounded bg-pubg mx-auto">
                        <p className="text-white text-3xl font-bold drop-shadow"> { game_details?.name } </p>
                    </div>
                </div>
            </div>

            <div className="py-16 container max-w-5xl mx-auto">
                <div className="text-center">
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> PlayerUnknown's Battlegrounds (also known as PUBG: Battlegrounds) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of Bluehole. The game is based on previous mods that were created by Brendan "PlayerUnknown" Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round. </p>
                </div>

                <div className="mt-12">
                    <p className="text-gray-700 text-2xl font-semibold text-center"> Available maps </p>

                    <div className="grid grid-cols-4 gap-2 mt-4">
                        { maps.map(map => (
                            <div className="w-full h-36 bg-cover bg-center bg-no-repeat flex items-end justify-center rounded-md overflow-hidden" style={{ backgroundImage: `url('${map.image_url}')` }} key={map.name}>
                                <div className="w-full px-3 py-1 bg-pubg bg-opacity-60 backdrop-blur-lg text-center">
                                    <p className="text-white text-lg font-semibold"> { map.name } </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-700 text-2xl font-semibold"> Game modes </p>

                    <p className="text-gray-700 text-xl font-semibold mt-4"> Battle Royale Solo </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> The classic game mode. Complete free for all, kill everyone, be the last one alive. Solo, a game mode where you spawn into the world alone and you just rely on your own tactics and skill to push you to the end and be the last player alive. </p>
                    <img src="pubg_solo.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-700 text-xl font-semibold mt-8"> Battle Royale Duos </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> For this game mode, you will be paired up with another individual and will compete to be the last ones alive. </p>
                    <img src="pubg_duo.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-700 text-xl font-semibold mt-8"> Battle Royale Squads </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> Squad is a gameplay type where players are organized into teams which are then pitted against each other. This is distinct from the classic Free For All (FFA) gameplay mode, where players are free to kill whomever they wish. SQUAD, a game mode where you can team up in groups of 2, 3 or 4 players, or if you prefer, you can still play solo and take on everyone alone in the match. </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> Note: No matter the size of your party when you enter a match, you'll be matched with teams of 4. </p>
                    <img src="pubg_squad.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}
