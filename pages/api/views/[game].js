let views = {};

export default function handler(req, res) {
    let { game } = req.query;

    if (req.method === 'GET') {
        res.json({
            views: views[game] || 0
        });
    } else if (req.method === 'POST') {
        if (!views[game]) {
            views[game] = 0;
        }

        views[game]++;

        res.status(200).end();
    }
}