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
		var friendMatch = ""; 
		var friendPhoto = "";
		var difference = 40;
       

        
        friendsZone.forEach(function(friends) {
        		
            var matchesArray = [];
            var matchDiff = 40;

          
            function add(total, num) {
                return total + num;
            }

            
            for (var i = 0; i < friendZone.scores.length; i++) {
                matchesArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friendZone.scores[i])));

            }

           matchDiff = matchesArray.reduce(add, 0);

            
            if (totalDifference < difference) {
            		
                difference = matchDiff;
               
                friendMatch = friendZone.name;
                friendPhoto = friendZone.photo;
            }
        });
		res.json({
            name: friendMatch,
            photo: friendPhoto
        });

        // This adds the new users sent data object to friends.js
        friends.push(req.body);
    });
}


