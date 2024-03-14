const DiscordRPC = require("discord-rpc");
const fs = require("fs");

function loadConfig() {
    const rawConfig = fs.readFileSync('config.json');
    return JSON.parse(rawConfig);
}

function setActivity(config, PresenceClient) {
    if (!PresenceClient) return;

    const activityDetails = config.activity_details || "Default Details";
    const activityState = config.activity_state || "Default State";

    PresenceClient.setActivity({
        details: activityDetails,
        state: activityState,
        largeImageKey: config.large_image_key || "https://cdn.discordapp.com/attachments/1202492769545883709/1217926475966320691/black-discord-logo.png?ex=6605cd6b&is=65f3586b&hm=c21beadf4afddb54e98556b8328583b48dee165ef572a1a190fcee0d1888ace5&",
        largeImageText: config.large_image_text || "Default Text",
        smallImageKey: config.small_image_key || "https://cdn.discordapp.com/attachments/1202492769545883709/1217926475966320691/black-discord-logo.png?ex=6605cd6b&is=65f3586b&hm=c21beadf4afddb54e98556b8328583b48dee165ef572a1a190fcee0d1888ace5&",
        smallImageText: config.small_image_text || "Default Text",
        instance: false,
        startTimestamp: Date.now(),
        buttons: config.buttons || [{label: "Default Button 1", url: "https://github.com/NoVa-Gh0ul/Discord-Presence#readme"}, {label: "Default Button 2", url: "https://github.com/NoVa-Gh0ul/Discord-Presence#readme"}],
        partySize: config.party_size || undefined,
        partyMax: config.party_max || undefined
    });
}

function main() {
    const config = loadConfig();
    const ID = config.application_id;

    DiscordRPC.register(ID);
    const PresenceClient = new DiscordRPC.Client({ transport: "ipc" });

    PresenceClient.on("ready", async () => {
        console.log("========== RPC ONLINE ==========");
        await setActivity(config, PresenceClient);

        setInterval(async () => {
            await setActivity(config, PresenceClient);
        }, 100000000);
    });

    PresenceClient.login({ clientId: ID });
}

main();