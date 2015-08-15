// CodeMirror HTMLHint Integration
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})

(function(CodeMirror) {
  "use strict";

  CodeMirror.registerHelper("lint", "html", function(text) {
    var found = [], message;
    if (!window.HTMLHint) return found;
    var messages = HTMLHint.verify(text, ruleSets);
    for ( var i = 0; i < messages.length; i++) {
      message = messages[i];
      var startLine = message.line -1, endLine = message.line -1, startCol = message.col -1, endCol = message.col;
      found.push({
        from: CodeMirror.Pos(startLine, startCol),
        to: CodeMirror.Pos(endLine, endCol),
        message: message.message,
        severity : message.type
      });
    }
    return found;
  }); 
});