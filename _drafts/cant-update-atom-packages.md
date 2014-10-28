---
---
I got a nasty error while trying to update [Term 2](https://github.com/webBoxio/atom-term2) on Atom. I recently updated to Yosemite also. So here is what I did to fix it:

1. I downloaded and installed the latest version of Atom. I was at v0.8.5.0 and updated to 0.140.0. This fixed it.

*Also* I ran [these commands below](https://github.com/webBoxio/atom-term2/issues/44) prior to updating Atom.

```bash
sudo npm install -g node-gyp
sudo rm -rf ~/.atom/.node-gyp
xcode-select --install
```

It didn't fix the problem, but I probably needed to update the xcode dev tools after updating my OS to Yosemite anyway.

All packages install without problems now.
