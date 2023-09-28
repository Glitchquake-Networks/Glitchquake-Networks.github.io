function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "Welcomes you to Glitchquake Networks!";
say[1] = "Hello!";
say[2] = "Since 2023!";
say[3] = "LGBTQ+ Supporter!";
say[4] = "1 + 1 = 3!";
say[5] = "Hamsters are awesome!";
say[6] = "This took to long to make!";
say[7] = "12345 is not a good password!";
say[8] = "Pickles!";
say[9] = "Never gonna give you up, Never gonna let you down...";
say[10] = "Yes I'm changing this while you reload!";
say[11] = "LOL";
say[12] = "Beware the RIZZLER!";
say[13] = "GQN";
say[14] = "GQN = AWESOME! Internet Censorship = BOT!";
say[15] = "Welcomes you to version Glitchquake Networks";
say[16] = "Welcomes you to version Glitchquake Networks";
say[17] = "Welcomes you to version Glitchquake Networks";
say[18] = "Welcomes you to Glitchquake Networks";
say[19] = "To be honest, I'm running out of things to say XD";
say[20] = "Eggplants r kinda good...";
say[21] = "Sup, my guy!";
say[22] = "MY MAN!";
say[23] = "UwU";
say[24] = "Amogus";
say[25] = "Ping: 10000";
say[26] = "FPS: 0.1";
say[27] = "TECHNOBLADE NEVER DIES";
say[28] = "I wonder if gods r real...";
say[29] = "MESSIS THE GOAT";
say[30] = "RONALDOS DA GOAT";
say[31] = "This website was made using HTML, CSS, and JS!";
say[32] = "Made by Lollipop!";
say[33] = "Made by Lollipop";
say[34] = "If you see this, your destined for greatness!";
say[35] = "AHHHHHHHHHHHHH";
say[36] = "100% Bugs garunteed!";
say[37] = "69";
say[38] = "Watch out for teachers!";
say[39] = "Hi, Goodbye!";
say[40] = "Who tf uses light mode, tbh tho?";
say[41] = "😁";
say[42] = "._.";
say[43] = "Stop the 🧢";
say[44] = "AMOGUS";
say[45] = "0% Bug free!";
say[46] = "WEEEEEEEEE";
say[47] = "Too cool for school I see?";
say[48] = "Open da noor!";
say[49] = "Playing games in school huh?";
say[50] = "Use a pencil to write people! Pens are NOT erasable!";
say[51] = "Discord sucks, so... yeah... jk!";
say[52] = "Best unblocked game site!";
say[53] = "Best game site!";
say[54] = "Bazinga";
say[55] = "Skippity BOPM BODM";
say[56] = "Why don't you go play the games? They fun!";
say[57] = "2 + 2 = 🐟";
say[58] = "Welcomes you to version 1.0 Beta!";
say[59] = "If you microwave your phone it will become faster!";
say[60] = "Welcomes you to version 1.0 Beta!";
say[61] = "The Rizzler is WATCHING YOU!";
say[62] = "Ok, and I know your address now! (JOKING)";
say[63] = "Bababooey";
say[64] = "MERICA F#CK YA 🗽";
say[65] = "Open Da Noor!";
say[66] = "SIUUUUUUUUUUUUUUUUUUUUU";
say[67] = "Stop the 🧢";
say[68] = "Bro, who eats peanuts tho... ?";
say[69] = "This message is number 69";
say[70] = "🐷🐷🐷 Peppa Pig! 🐷🐷🐷";
say[71] = "🤩🤩🤩🤩🤩";







say[72] = "There are 71 of these stupid messsages! (BRUH)";
say[73] = "8===========D over average"


var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}