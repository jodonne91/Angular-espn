(function(){
	var espnApp = angular.module('espnApp',[])
	.controller("scoreboardController",function(){

		this.games = currentGames

	})
	.controller("bannerController",function(){

		this.banners = ["myESPN", "NFL", "MLB", "NBA", "NHL", "NCAAF", "NCAAM", "NCAAW", "NASCAR", "SOCCER", "SPORTS"]

	})
	.controller('contentController',["$http",function($http){

	}])
	.controller('topicsController', ["$http", function($http){
		this.topics = []
		var that = this;
		$http.get('http://tiy-espn-info.herokuapp.com/espn/topics').success(function(data){
			that.topics = data
			console.log(data)
		});
	}])
	.controller('highlightController', ["$http", "$timeout", function($http, $timeout){
		var that = this;
		this.stories = [];
		this.showID = 0;

		$http.get('http://tiy-espn-info.herokuapp.com/espn/carousel').success(function(data){
			that.stories = data;
			console.log(data)
		});

		this.selectHighlight = function(item){
			console.log(item.$index)
			this.showID = item.$index;
		};

		this.hide = function(item){
			if(item.$index === this.showID){
				return false;
			};
			return true;
		};

	}])
	.controller('rightController', ["$http",function($http){
		var that = this;
		this.topics = [];
		$http.get('http://tiy-espn-info.herokuapp.com/espn/highlights').success(function(data){
			that.topics = data;
			console.log(data)
		})
	}])
})();

var currentGames = [
	{
		time: 'final',
		teamA: {
			rank: 14,
			name: "NE",
			score: 65
		},
		teamB: {
			rank: 3,
			name: "ND",
			score: 69
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 14,
			name: "UAB",
			score: 60
		},
		teamB: {
			rank: 3,
			name: "ISU",
			score: 59
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 14,
			name: "GAST",
			score: 57
		},
		teamB: {
			rank: 3,
			name: "BAY",
			score: 56
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 15,
			name: "TXSO",
			score: 72
		},
		teamB: {
			rank: 2,
			name: "ARIZ",
			score: 93
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 11,
			name: "TEX",
			score: 48,
		},
		teamB: {
			rank: 6,
			name: "BUT",
			score: 56
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 11,
			name: "UCLA",
			score: 60
		},
		teamB: {
			rank: 6,
			name: "SMU",
			score: 59 
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 11,
			name: "MISS",
			score: 57
		},
		teamB: {
			rank: 6,
			name: "XAV",
			score: 76
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 10,
			name: "OSU",
			score: 75
		},
		teamB: {
			rank: 7,
			name: "VCU",
			score: 72
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 16,
			name: "LAF",
			score: 52
		},
		teamB: {
			rank: 1,
			name: "VILL",
			score: 93
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 9,
			name: "PUR",
			score: 65
		},
		teamB: {
			rank: 8,
			name: "CIN",
			score: 66
		}
	},
	{
		time: 'final',
		teamA: {
			rank: 13,
			name: "HARV",
			score: 65
		},
		teamB: {
			rank: 4,
			name: "UNC",
			score: 67
		}
	}
]