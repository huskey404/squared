javascript:  var win = window.open("","_blank","popup=yes");  win.location.origin = 'https://google.com';  win.document.write(`<!DOCTYPE html><html><body><iframe src="about:blank" id="aHR0cHM6Ly9jbG9ja3dvcmstb3MudmVyY2VsLmFwcC9vcy8="></iframe><style>* {margin: 0;padding: 0;overflow-y: hidden;}iframe {width: 100%;height: 100vh;border: none;}</style><script src="https://clockwork-os.vercel.app/assets/scripts/hidden-name.js"></script><script>document.querySelector("iframe").src = atob(document.querySelector("iframe").id);window.onbeforeunload = function (event) { return false };</script></body></html>`);