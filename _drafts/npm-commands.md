---
---

NPM is rad. Most of the time you typically run `npm init` to initialize a package. Then you step through the questions prompted in the console.

But I didn't know that I could just run `npm init -y` to skip the prompts altogether. This is great when I'm just messing around and I want to setup a package.json file really quick.

Also, when I clone a repo and I need to get the Dependencies I just run `npm i`, and that will install the Dependencies. But I also need the DevDependencies too. To get those, I run `npm i --dev`.

`npm i` used to do it all, but I think with the latest version of node and npm these are split into separate tasks.
