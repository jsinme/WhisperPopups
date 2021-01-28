Hooks.once('init', async function() {
    registerSettings();
});

Hooks.once('ready', async function() {

});



function registerSettings() {
    game.settings.register("whisper-popup", "enableWhisperPopups", {
        name: "Display Popups",
        hint: "Set whether or not to display popups when receiving whispers",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => {
            console.log(value)
        }
    });
}