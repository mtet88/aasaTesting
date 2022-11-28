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

  console.log("Track init");

  if (!name) {
    console.log("Track out");
    return;
  }

  console.log("Track handler choosing");
  if (window.AnalyticsWebInterface) {

    console.log("Track android");
    // Call Android interface
    window.AnalyticsWebInterface.logEvent(name, JSON.stringify(params));
  } else if (window.webkit
      && window.webkit.messageHandlers
      && window.webkit.messageHandlers.iOSMessageHandler) {

    console.log("Track ios");
    // Call iOS interface
    var message = {
      command: 'trackEvent',
      name: name,
      parameters: params
    };
    window.webkit.messageHandlers.iOSMessageHandler.postMessage(message);
  } else {
    // No Android or iOS interface found
    console.log("No native APIs found.");
  }
}
 */

function trackEvent(name, params) {

  console.log("[Track] Start");

  if (!name) {
    console.log("Track aborted, command name missing 🆘");
    return;
  }

  console.log("[Track] Name confirmed ✅");

  if (!window.webkit) {
    console.log("Track aborted, webkit missing 🤖");
    return;
  }

  console.log("[Track] Webkit confirmed 📱");

  if (!window.webkit.messageHandlers) {
    console.log("Track aborted, 0 handlers found 📭");
    return;
  }

  console.log(window.webkit.messageHandlers);
  console.log("Message handlers available 📲");

  if (!window.webkit.messageHandlers.iOSMessageHandler) {
    console.log("Track aborted, no handler name matches expected iOSMessageHandler 🧩");
    return;
  }

  console.log("Message handler found 🙋🏾‍♂️");
  console.log("Track from iOS triggered");

  // Call iOS interface
  var message = {
  command: 'trackEvent',
  name: name,
  parameters: params
  };
  window.webkit.messageHandlers.iOSMessageHandler.postMessage(message);
}

funcion triggerDebug(message) {
  console.log(message);
  alert(message);
}

document.getElementById("event1").addEventListener("click", function() {
    console.log("event1");
    trackEvent("daEvent", { foo: "bar", baz: 123 });
});
