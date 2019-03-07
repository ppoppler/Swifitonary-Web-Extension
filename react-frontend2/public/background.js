chrome.contextMenus.create({
  id: "Swift",
  title: "Swiftionary",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Definition",
  title: "Definition",
  parentId: "Swift",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Synonym",
  title: "Definition",
  parentId: "Swift",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(clickedData => {
  if (clickedData.menuItemId === "Definition" && clickedData.selectionText) {
    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      //type: "normal"
      type: "popup",
      width: 400,
      height: 400
    });

    // chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    //   chrome.tabs.sendMessage(tabs[0].id, { type: "getHeadlines" });
    // });
  }
});
