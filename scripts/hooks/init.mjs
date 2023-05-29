export async function init() {
    game.settings.register("intelligent-npcs", "apiKey", {
        name: "Intelligent NPCs API Key",
        hint: "You can get an API key by being a Patreon supporter at https://www.patreon.com/ironmoose.",
        scope: "world",
        config: true,
        type: String
    });

    game.settings.register("intelligent-npcs", "maxBackAndForthLength", {
        name: "Maximum NPC Back-and-Forth",
        hint: "You can get an API key by being a Patreon supporter at https://www.patreon.com/ironmoose.",
        scope: "world",
        config: true,
        type: Number,
        default: 15
    });
}
