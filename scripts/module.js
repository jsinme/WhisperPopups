Hooks.once("init", async function () {
  registerSettings();
});

Hooks.on("createChatMessage", (message, options, userId) => {
  let popup = game.settings.get("whisper-popup", "enableWhisperPopups");
  let autoDismiss = game.settings.get("whisper-popup", "autoDismissWhispers");
  let dismissInterval = game.settings.get("whisper-popup", "dismissInterval");

  if (!popup) return;

  if (message.data.whisper.length > 0 && message.data.whisper.find((el) => el == game.userId) != undefined) {
    let d = new Dialog({
      title: "Test",
      content: "<p>" + game.users.get(userId).data.name + "</p>" +
        "<p>" + message.data.content + "</p>",
      buttons: {
        one: {
          label: "test",
          callback: () => console.log("testing")
        }
      },
      default: "one"
    });
    d.render(true);

    if (autoDismiss) {
      setTimeout(() => {
        d.close();
      }, dismissInterval*1000);
    }

  }
});

function registerSettings() {
  game.settings.register("whisper-popup", "enableWhisperPopups", {
    name: "Display Popups",
    hint: "Set whether or not to display popups when receiving whispers",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  game.settings.register("whisper-popup", "autoDismissWhispers", {
    name: "Auto Dismiss",
    hint: "Set whether whisper popups should automatically be dismissed",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  game.settings.register("whisper-popup", "dismissInterval", {
    name: "Dismiss Interval",
    hint: "How long to wait before auto dismissing",
    scope: "world",
    config: true,
    type: Number,
    range: {
      min: 1,
      max: 120,
      step: 1
    },
    default: 10
  });
}
