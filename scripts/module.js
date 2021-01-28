Hooks.once("init", async function () {
  registerSettings();
});

Hooks.on("createChatMessage", (message) => {
  if (message.data.whisper.length > 0 && message.data.whisper.find((el) => el == game.userId) != undefined) {
    console.log("Success");
  }
});

function registerSettings() {
  game.settings.register("whisper-popup", "enableWhisperPopups", {
    name: "Display Popups",
    hint: "Set whether or not to display popups when receiving whispers",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
    onChange: (value) => {
      console.log(value);
    },
  });
}
