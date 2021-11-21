/* Config */
const twitchTvHandle = "Sooomoza";
const PAUSE_DURATION = 30 * 1000; // 30 seconds
const DISPLAY_DURATION = 10 * 1000; // 10 seconds

/* DOM */
const container = document.querySelector(".alerts");
const img = new Image();

// Resolve promise after duration
const wait = async duration => {
  return new Promise(resolve => setTimeout(resolve, duration));
};

ComfyJS.Init(twitchTvHandle);
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  console.log(`!${command} was typed in chat`);
};

ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(user + ":", message);

  console.log(message.toLowerCase())
  console.log(message.toLowerCase().includes("perks"))

  if(message.toLowerCase().includes("perks")) {
    document.getElementById("IMAGE").style.visibility = "visible"
  }
};

function load_home() {
  document.getElementById("includedContent").innerHTML='<object type="text/html" data="test/index.html" width="400px" height="800px" ></object>';
}

window.setInterval(function(){
  document.getElementById("IMAGE").style.visibility = "hidden"
}, 10000);