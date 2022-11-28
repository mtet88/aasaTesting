/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
function trackEvent(name, params) {

  triggerDebug("Track init");

  if (!name) {
    triggerDebug("Track out");
    return;
  }

  triggerDebug("Track handler choosing");
  if (window.AnalyticsWebInterface) {

    triggerDebug("Track android");
    // Call Android interface
    window.AnalyticsWebInterface.logEvent(name, JSON.stringify(params));
  } else if (window.webkit
      && window.webkit.messageHandlers
      && window.webkit.messageHandlers.iOSMessageHandler) {

    triggerDebug("Track ios");
    // Call iOS interface
    var message = {
      command: 'trackEvent',
      name: name,
      parameters: params
    };
    window.webkit.messageHandlers.iOSMessageHandler.postMessage(message);
  } else {
    // No Android or iOS interface found
    triggerDebug("No native APIs found.");
  }
}
 */

function trackEvent(name, params) {

  triggerDebug("[Track] Start");

  if (!name) {
    triggerDebug("Track aborted, command name missing 🆘");
    return;
  }

  triggerDebug("[Track] Name confirmed ✅");

  if (!window.webkit) {
    triggerDebug("Track aborted, webkit missing 🤖");
    return;
  }

  triggerDebug("[Track] Webkit confirmed 📱");

  if (!window.webkit.messageHandlers) {
    triggerDebug("Track aborted, 0 handlers found 📭");
    return;
  }

  triggerDebug(window.webkit.messageHandlers);
  triggerDebug("Message handlers available 📲");

  if (!window.webkit.messageHandlers.iOSMessageHandler) {
    triggerDebug("Track aborted, no handler name matches expected iOSMessageHandler 🧩");
    return;
  }

  triggerDebug("Message handler found 🙋🏾‍♂️");
  triggerDebug("Track from iOS triggered");

  // Call iOS interface
  var message = {
  command: 'trackEvent',
  name: name,
  parameters: params
  };
  window.webkit.messageHandlers.iOSMessageHandler.postMessage(message);
}

function triggerDebug(message) {
  console.log(message);
  alert(message);
}

document.getElementById("event1").addEventListener("click", function() {
    triggerDebug("event1");
    trackEvent("daEvent", { foo: "bar", baz: 123 });
});
