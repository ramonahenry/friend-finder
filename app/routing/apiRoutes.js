var friendsZone = require("../data/friend.js");
var path = require("path");

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friendsZone);
		

		{
			 if (err) console.log(err);
		}
		});

	app.post('/api/friends', function(req, res){
		friendsZone.push(req.body);
		

		{
			 if (err) console.log(err);
		}
		});
	};

	