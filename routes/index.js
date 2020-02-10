module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `songs` ORDER BY songName ASC"; // query database to get all the songs

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Song Manager"
                ,players: result
            });
        });
    },
};
