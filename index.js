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
        largeImageKey: config.large_image_key || "",
        largeImageText: config.large_image_text || "",
        smallImageKey: config.small_image_key || null,
        smallImageText: config.small_image_text || "",
        instance: false,
        startTimestamp: Date.now(),
        buttons: config.buttons || [],
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