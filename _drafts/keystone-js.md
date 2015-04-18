---
---
Keystone took a while to set up. I ran into every problem.
Problems:

1. Couldn't install without Sudo
- I now that I can do some config work, but didn't have the time to mess with it if I fucked something up.
1. Couldn't get `yo keystone` to run
- I tried a ton of stuff and nothing seemed to work
- I restarted my computer and it ran (WFT)
1. I thought that Keystone supported Stylus out of the box, but it doesn't
- I will roll with Sass for now, but I will be looking to use Stylus instead
1. After the set in the terminal I was excited to run `node keystone` but that failed
- I then ran `sudo chown -R $USER /usr/local` and ran `sudo npm install -g generator-keystone` again just because
1. Then `node keystone` worked but terminated because of MongoDB
- I thought I had that installed. I did, but I hadn't set up the `/data/db` directories at the system root (not the user root)
1. Now it works.

Yes, this was a little frustrating, but problems just show you how the whole thing works. 
