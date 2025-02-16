mp.events.addCommand("car", (player: PlayerMp, fullText: string, vehicleName?: string) => {
    if (!vehicleName) {
        return player.outputChatBox("Użycie: /car [nazwa]");
    }

    const pos = player.position;
    const vehicle = mp.vehicles.new(mp.joaat(vehicleName), new mp.Vector3(pos.x + 2, pos.y, pos.z), {
        heading: player.heading,
        numberPlate: "MODDED"
    });

    player.putIntoVehicle(vehicle, 0);
});