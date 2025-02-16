let chat = mp.browsers.new("package://chat/chat.html");

mp.keys.bind(0x54, false, () => { // T otwiera czat
    chat.execute("openChat()");
});

mp.events.add("playerChat", (msg: string) => {
    mp.events.callRemote("playerChat", msg);
});

mp.events.add("playerChat", (text) => {
    mp.gui.chat.push(text);
});

export {};