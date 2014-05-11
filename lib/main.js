var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: [
    self.data.url('jquery.min.js'),
    self.data.url('content_script.js')
  ]
});
