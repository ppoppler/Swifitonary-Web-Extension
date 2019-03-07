chrome.contextMenus.create({
    id: 'HeadlineFetcher',
    title: 'GetHeadlines',
    contexts: ['all']
});

chrome.contextMenus.onClicked.addListener(()=> {
    chrome.tabs.query({active: true, currentWindow: true}, tabs =>{
        chrome.tabs.sendMessage(tabs[0].id, {type: 'getHeadlines'});
    });
});

