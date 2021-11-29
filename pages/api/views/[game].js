import fs from 'fs'

export default function handler(req, res) {
    let storage = { views: {} };
    let { game } = req.query;

    if (fs.existsSync('../storage.json')) {
        storage = JSON.parse(fs.readFileSync('../storage.json'));
    }

    if (req.method === 'GET') {
        res.json({
            views: views[game] || 0
        });
    } else if (req.method === 'POST') {
        if (!storage.views[game]) {
            storage.views[game] = 0;
        }

        storage.views[game]++;

        res.status(200).end();

        fs.writeFile('../storage.json', JSON.stringify(storage));
    }
}