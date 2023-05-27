import NpcConfiguration from "../apps/NpcConfiguration.mjs";

export function getActorHeaderButtons(sheet, buttons) {

    // Push a new button to the front of the list
    buttons.unshift({
        class: "configure-intelligent-npc",
        icon: "fas fa-thought-bubble",
        onclick: (event) => {
            let configurationApp = new NpcConfiguration(sheet.actor);
            configurationApp.render(true);
        },
        label: "Intelligent NPC"
    });
}
