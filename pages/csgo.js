import Games from '../public/game_info.json'

const game_details = Games['csgo'];

const maps = [
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/31/EoWEJNuVQAEtMa2-1024x576.jpg",
        "name": "Ancient"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/30/anubisCS.jpg",
        "name": "Anubis"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/29/Csgo-de-aztec.png",
        "name": "Aztec"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/28/tuscan.png",
        "name": "Tuscan"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/20/Vertigo.png",
        "name": "Vertigo"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/8/Csgo_dust2.0.jpg",
        "name": "Dust2"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/7/Csgo_overpass.jpg",
        "name": "Overpass"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/6/Nuke_csgo.jpg",
        "name": "Nuke"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/5/cobblestone.png",
        "name": "Cobblestone"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/4/Csgo_cache.png",
        "name": "Cache"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/3/Train_csgo.jpg",
        "name": "Train"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/2/De_new_inferno.jpg",
        "name": "Inferno"
    },
    {
        "image_url": "https://cdn.pandascore.co/images/csgo/map/image/1/Csgo_mirage.jpg",
        "name": "Mirage"
    }
];

export default function Game() {
    return (
        <div>
            <div className="flex items-center h-64 bg-center bg-cover bg-no-repeat border-b-[12px] border-csgo" style={{ backgroundImage: `url('${game_details?.banner}')` }}>
                <div className="container max-w-5xl mx-auto text-center">
                    <div className="px-16 py-4 w-max rounded bg-csgo mx-auto">
                        <p className="text-white text-3xl font-bold drop-shadow"> { game_details?.name } </p>
                    </div>
                </div>
            </div>

            <div className="py-8 container max-w-5xl mx-auto">
                <div className="bg-white px-6 py-4 rounded">
                    <p className="text-gray-700 font-semibold leading-7"> Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for Windows, macOS, Xbox 360, and PlayStation 3 in August 2012, and for Linux in 2014. Valve still regularly updates the game, both with smaller balancing patches and larger content additions. </p>
                </div>

                <div className="mt-8">
                    <p className="text-gray-700 text-2xl font-semibold text-center"> Available maps </p>

                    <div className="grid grid-cols-4 gap-2 mt-4">
                        { maps.map(map => (
                            <div className="w-full h-36 bg-cover bg-center bg-no-repeat flex items-end justify-center rounded-md overflow-hidden" style={{ backgroundImage: `url('${map.image_url}')` }} key={map.name}>
                                <div className="w-full px-3 py-1 bg-csgo bg-opacity-50 backdrop-blur-lg text-center">
                                    <p className="text-white text-lg font-semibold"> { map.name } </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-700 text-2xl font-semibold"> Game modes </p>

                    <p className="text-gray-700 text-xl font-semibold mt-4"> Competetive </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> Competitive mode, the primary gameplay experience, pits two teams of five players against each other in a best-of-30 match. When playing Competitive, players have a skill rank based on an Elo rating system and are paired with and against other players around the same ranking. </p>
                    <img src="csgo_match_ended.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-700 text-xl font-semibold mt-8"> Wingman </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> Wingman is a two-on-two bomb defusal game mode taking place over sixteen rounds. Similar to Competitive, players are paired based on a dynamic skill ranking. </p>
                    <img src="csgo_wingman.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-700 text-xl font-semibold mt-8"> Casual & Deathmatch </p>
                    <p className="text-gray-700 font-semibold mt-4 leading-7"> The Casual and Deathmatch modes are less serious than Competitive mode and do not register friendly fire. Both are primarily used as a practice tool. </p>
                    <img src="csgo_casual.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}