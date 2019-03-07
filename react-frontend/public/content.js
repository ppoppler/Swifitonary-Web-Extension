chrome.runtime.onMessage.addListener(request => {
  if (request.type === "getHeadlines") {
    document.body.innerHTML += `<dialog stlye="height:40%">
        <iframe id="headlinefetcher"style="height:100%"></iframe>
        <button>x</button>
        </div>
        </dialog>`;
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    const iframe = document.getElementById("headlineFetcher");
    iframe.src = chrome.extension.getURL("index.html");
    iframe.frameBorder = 0;
    dialog.querySelector("button").addEventListener("click", () => {
      dialog.close();
    });
  }
});
