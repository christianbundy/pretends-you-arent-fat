var config = {
  channels: ["#bots", "#coffeesh0p"],
        server: "irc.hackthissite.org",
        botName: "pretends-you-arent-fat"
};
 
var irc = require("irc");
 
var bot = new irc.Client(config.server, config.botName, {
        channels: config.channels
});
 
bot.addListener("join", function(channel, who) {
        if (who !== config.botName) {
                bot.say(channel, "Wow, " + who + ", have you lost weight?");
        }
});
