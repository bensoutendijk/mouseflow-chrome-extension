import { MessageData } from "./types";

(function() {
  console.log('page script executed');
  const customEvent = document.createEvent("CustomEvent");

  const scrub = function() {
    console.log('scrub');
    const data: MessageData ={
      isInstalled: !!window.mouseflow,
      version: window.mouseflow?.version,
      isRecording: window.mouseflow?.isRecording(),
      recordingRate: window.mouseflow?.recordingRate,
      websiteId: window.mouseflow?.websiteId,
      sessionId: window.mouseflow?.getSessionId(),
      domain: window.location.host,
      mouseflowPath: window.mouseflowPath,
    };

    customEvent.initCustomEvent("mfDataTick", true, true, data);
    document.dispatchEvent(customEvent);
  };

  setInterval(scrub, 500);
})();
