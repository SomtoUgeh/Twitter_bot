const Twit = require("twit");
const config = require("./config.js");

let T = new Twit(config);

setInterval(tweetIt, 1000 * 2);

function getTweet() {
	let params = { q: "Ugeh since:2017-07-18", count: 100 };
	let getData = (err, data, response) => {
		let tweets = data.statuses;
		for (let i = 0; i < tweets.length; i++) {
			console.log(tweets[i].text);
		}
	};

	T.get("search/tweets", params, getData);
}

function tweetIt() {
	let r = Math.floor(Math.random() * 100);
	let tweet = { status: "hello world!, first bot in coming #" + r };
	let tweeted = (err, data, response) => {
		if (err) {
			console.log("It does not work");
		} else {
			console.log("it works");
		}
	};

	T.post("statuses/update", tweet, tweeted);
}
