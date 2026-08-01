(function () {
  var STORAGE_KEY = "bionicReadingEnabled";

  function bionicWord(word) {
    var match = word.match(/^([A-Za-z']+)([\s\S]*)$/);
    if (!match) return word;
    var letters = match[1];
    var rest = match[2];
    var len = letters.length;
    var boldLen = len <= 3 ? 1 : Math.ceil(len * 0.5);
    return (
      "<b>" + letters.slice(0, boldLen) + "</b>" + letters.slice(boldLen) + rest
    );
  }

  function processTextNode(node) {
    var text = node.nodeValue;
    if (!text || !text.trim()) return;
    var html = text.replace(/\S+/g, bionicWord);
    var span = document.createElement("span");
    span.className = "bionic-wrap";
    span.innerHTML = html;
    node.parentNode.replaceChild(span, node);
  }

  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      processTextNode(node);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    var tag = node.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "NAV") return;
    if (node.classList && node.classList.contains("bionic-toggle")) return;
    Array.prototype.slice.call(node.childNodes).forEach(walk);
  }

  function unwrap() {
    var spans = document.querySelectorAll("span.bionic-wrap");
    spans.forEach(function (span) {
      var text = document.createTextNode(span.textContent);
      span.parentNode.replaceChild(text, span);
    });
  }

  function applyBionic() {
    walk(document.body);
  }

  function removeBionic() {
    unwrap();
  }

  var btn;

  function updateButton() {
    if (!btn) return;
    var on = localStorage.getItem(STORAGE_KEY) === "1";
    btn.textContent = on ? "🧠 Bionic: On" : "🧠 Bionic: Off";
  }

  function setState(on) {
    if (on) applyBionic();
    else removeBionic();
    localStorage.setItem(STORAGE_KEY, on ? "1" : "0");
    updateButton();
  }

  function createButton() {
    btn = document.createElement("button");
    btn.className = "bionic-toggle";
    btn.style.cssText =
      "position:fixed;bottom:16px;right:16px;z-index:9999;padding:8px 14px;" +
      "border:1px solid black;background:white;color:black;" +
      "font-family:Georgia,'Times New Roman',serif;font-size:0.85rem;" +
      "border-radius:6px;cursor:pointer;box-shadow:2px 2px 0 black;";
    btn.addEventListener("click", function () {
      var on = localStorage.getItem(STORAGE_KEY) === "1";
      setState(!on);
    });
    document.body.appendChild(btn);
    updateButton();
  }

  document.addEventListener("DOMContentLoaded", function () {
    createButton();
    if (localStorage.getItem(STORAGE_KEY) === "1") {
      applyBionic();
    }
  });
})();
