Codemirror and HTMLHint Integration
===================

Want to use [HTMLHint](http://htmlhint.com/js/htmlhint.js) for syntax validation for your html code? 

**NOTE:** If you're using [Ace Editor](http://ace.c9.io/) please refer to [htmlhint.com](http://htmlhint.com/). This release is strictly a [Codemirror](http://codemirror.net/) Integration.

[Try it on Codepen!](http://codepen.io/mikethedj4/pen/PqgrBY)

Rules Specified for Validation
-------------

    var ruleSets = {
      "tagname-lowercase": true,
      "attr-lowercase": true,
      "attr-value-double-quotes": true,
      "doctype-first": false,
      "tag-pair": true,
      "spec-char-escape": true,
      "id-unique": true,
      "src-not-empty": true,
      "attr-no-duplication": true
    };

