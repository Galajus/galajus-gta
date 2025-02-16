mp.events.add("playerChat", (player: PlayerMp, message: string) => {
    if (!message.trim()) return;
    mp.players.broadcast(`<span style="color:yellow">${player.name}</span>: ${message}`);
});