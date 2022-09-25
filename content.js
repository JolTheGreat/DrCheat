function requestContent() {
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL('script.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}

async function injectCode() {
    console.log("Injecting code...");
    if (!window.location.href.startsWith("chrome://")) {
        requestContent();
        console.log("Code injected!");
    }
}


injectCode().then(r => console.log("Dr Cheat loaded!"));