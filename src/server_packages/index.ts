import './chat' //You need all imports inside index to run other scripts, otherwise they don't run/work
import './commands'

mp.events.add("playerJoin", (player: PlayerMp) => {
    console.log(`${player.name} dołączył do serwera!`);
    player.outputChatBox(`Witaj, ${player.name}!`);
});