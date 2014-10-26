---
---

Oh my god! I am having so much fun with Jekyll, I can't even come up with one good thing to say about WP anymore. This is not a rant article about WP being crappy. I've been a WP fanboy for 7 years. I've made nearly 100 WP sites over the years. However, since I encountered Jekyll 2 months ago, I don't think that I will ever go back to WP. Here's why.

# There's gotta be a better way
I guess that I had been frustrated with WP for a while, and then I came across this article on Smashing Magazine, [Build A Blog With Jekyll And GitHub Pages](http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/). With in minutes, I had my first Jekyll site up, and I was blown away by dozens of instant advantages it gave me over WP.

## Setup (Local)
Both WP and Jekyll have easy setups.

### WP
1. Create and enter a new project directory
1. Download or CURL WP into that directory
1. Make db and localhost config settings in wp-config
1. Change table prefix and SALT because you're desparate to secure WP by all means necessary
1. Fire up MAMP (or whatever)
1. Create db and local URL
1. Login into WP install from browser
1. *run needed updates if you are simply duplicating a previous install*
1. Off to the races
*Extra points for those that use YeoPress*

### Jekyll
*Gotta use the ol' terminal*
1. cd to whatever directory you want `cd` anywhere
1. `jekyll new projectName`
1. Off to the races
*You can use Yeoman also*

## Development

### WP
1. Create a new theme
1. Create the files and directory structure you need
1. Install plugins (if that wasn't already part of your setup process)
1. Configure WP-SCSS, even though it's not full featured
1. Enqueue everything *the WP way*
1. Configure functions.php to disable all the crap that WP spits out by default
1. Build your WP site
1. Use Advanced Custom Fields to craft WP admin to client's content needs
1. Use Advanced Custom Field's code to finish pages and post(types)
1. Create a shit load of Custom PostTypes and Taxonomies along the way
1. Code and test, code and test

### Jekyll
1. Customize your _config.yml file
1. Just start writing the code that makes your site
1. Sass and CoffeeScript are already enabled
1. No need for wrestling with Custom PostTypes, Custom Taxonomies and Custom Fields, nor all the Plugins for managing them. All of this is done brainlessly from a .yml file or your page's "front matter." Not only is this powerful—it's so fucking easy!
1. Code and test, code and test


## Integration

### WP
WP has thousands of integrations with other apps through plugins. This is easy and powerful. It's trivial to integrate twitter, instagram or youtube into a WP site.

### Jekyll
Let's not forget that this is just as easy with a static site. Just paste the code in and go. Enjoy less overhead, and more customization. I thought tha I would miss Gravity Forms, but I can do the same stuff with WuFoo.

## Hosting

### WP (Paid)
1. Login to your web host of preference and create a site and db for your site
1. Fire up your FTP app of chiose and transfer all your files to the correct directory on your server.
1. Update the wp-config.php file to connect to db
1. Wrestle with W3 Total Cache, CloudFlare or some other BS to make your WP site's performance less shitty.
1. Bail on all of this and use WPEngine or FlyWheel to manage your WP site's needs. *WPEngine solved all of my WP hosting frustrations. I still love them for anything WP related.*

### Jekyll (FREE)
1. Create a file in your directory called "CNAME"
1. Write in the name of your site without the http:// and save
1. Login to your GitHub account
1. Create a rep with a post fix of `github.io`
1. Jump into your terminal and run:
```bash
git remote add origin <remote repository URL>
git remote -v
git push origin master
```
1. Point desired domain name to GitHub's servers
*GitHub can host open source projects for free. Or you can pay $10/month for private hosting. Or you can use AWS or any other host for that matter.*

## Deployment

### WP
1. This is commonly handled "commando" style through FTP
1. If you have WPEngine, you copy the live site to a hosted staging site. You can make your updates in the remote staging site, and then push them to the live site when ready. However, if you client updates the live site, you will still need to be careful not to overwrite their updates.
1. If you use DeployHQ, FTPLOY, Beanstalk, SpringLoops or Dandelion, you can deploy local code to the live site or a staging server. This can get a little confusing, but same as above, neither protect you against the client updating the live site on their own prior to your code updates.
1. You can attempt to manage your db between deployments with WP Migrate DB Pro

### Jekyll
1. run `git push`


## Client Usability (CMS)

### WP
After years of making WP sites for people, I don't think that WP's CMS is perfect. I think that it is one of the best, and WP has done an amazing job over the years to make it awesome. But it is still another UI that a client has to *learn* how to use and *remember* how it works despite version and plugin updates.

### Jekyll
Jekyll doesn't have a CMS by default. But you can use [Prose.io](http://prose.io) to offer a simple UI for a client to manage their Jekyll site via GitHub. This sound crazy right! GitHub is far too nerdy for a regualr client to use. But it becomes a snap if they(or you) create a Prose account for them.

This actually works brilliantly because a Jekyll site just shows the files in the root directory. Fucking everybody understands this. It's exactly the same as managing docs on your computer. There is nothing to learn or remember here. It's the same as managing files on your own computer.

Blogging is simple from Prose, but managing "custom posttypes" is even easier. A simple data file using the .yml syntax usually does the trick. Now the client can just manage a simple list of text.
```yml
staff:
  - name: Michael Shepard
    position: CEO
    image: mike.jpg

  - name: Alice Wong
    position: CFO
    image: alice.jpg
```

And now they can just order the text however they want. No need for an Advanced Post Order plugin.

It know that it sounds crazy to have a client do this, especially after years of doing (and forcing everyone) to manage their site the WP way. But we all can actually meet in the middle on this. Clients actually understand simple text lists better than ever changing WP UIs. I'll write more about this in another post. All I'm saying is that this has actually reduced support tickets and speed up completing support tickets.


## Security

### WP
Fuck WP security. Seriously. If you install the WordFence plugin to your WP site, you will learn that your site is undergoing hacking attempts ALL FUCKING DAY LONG! Most of these hacking attempts are simply trying to crack weak login credentials. However, this is taxing to your server.

Then there are DDoS attacks. I'm not going to get into this, but hackers can use your WP site to crash other sites.

Then there can be plugin security holes. This can pollute your db and directory.
There is nothing worse than having to change users passwords, reinstall plugins, grep source code for code injections. Many use Securi or WordFence for finding security holes, and I promise you that I've found code injections by hand that neither were able to find.

At best, I'd recommend WPEngine. They promise to do all the hacker sanitation for you. And at worse, you can always revert to a daily backup of the site that doesn't have the malicious code in it. Easy peasy.

### Jekyll
There is nothing to hack. It is a static site without a db.


## Management

### WP
I sitll think that the best tool for managing multiple WP sites is InfiniteWP. It's free and it's awesome. I just login to my IWP account and have it update all my plugins and WP Version in one click. This works great unless there is an update Error. Then I have to make a manual fix. If the update breaks a site, then I would use WPEngine to roll back that site to the previous backup.

The client is free to do all of this on their own, however they rarely do. Often, this process freaks them the fuck out. But someone has to do it, else WP security risks arise.

### Jekyll
None really. There are no plugins or versions to update. You can use Travis-CI free on a GitHub site for "continuous integration." You can configure this to automatically test the site for errors and PREVENT accidental errors from going live. Thus, you can write tests that prevent clients from jacking it up. And for the most part they won't need to mess with anything crucial to the site's operation.

You can even use Use Gulp or Grunt in your CI set up to compress images, SVGs, js and css.


## Speed/Optimization

### WP
Out of the box, WP site speed could be much better. But it's not because most to the WP site speed battle is server side. If you are wrestling with WP caching plugins, then you are wasting your fucking time. Just host your site with WPEngine or Flywheel and your site will be load twice as fast or more. Now that your server speed issues are gone, go optimize image sizes, js files and stylesheets.

### Jekyll
Out if the box a static Jekyll site is faster because it doesn't have to make round trips the the db to grab content. Since you are already in the command line, it is easy to set up build scripts with Gulp or Grunt to optimize code. You can also set up you continuous integration to do this as well.



## Iteration

### WP
If you are using WPEngine, you can use the staging site feature to build a new feature to the site, but now that is tied up until the feature is launched. You can create a new theme and use the Theme Switcher plugin, but then you're still using the same db. Iteration is a pain in the ass in the WP environment.

### Jekyll
Just run `git checkout branch newFeature` and code your ass off.


## Collaboration

### WP
Forget about it. Maybe using Vagrant and VirtualBox is the best? You can use Git. Overall, I hate collaborating on WP sites.

### Jekyll
Fork and Pull requests. Done.

## Backup/Undo

### WP
I've used about a dozen different backup solutions for WP( WP-DBManager, Backup Buddy and Dropbox to name a few). Again, I find WPEngine the easiest for this. Accidentally delete your theme? Log into WPE and active your last back up and the theme is back within seconds.

### Jekyll
Since it's all managed by Git, all of your history is there.


## Side benefits

### WP
WP sites are everywhere. You can always find WP work. WP has excellent open source support. It's a great gateway to PHP and MySQL.

### Jekyll
It's a hackers playground. Just make what you want. Work, collaborate and optimize fast as shit. It's a great gateway to Ruby, JS, CoffeeScript, Sass, Gulp, Grunt, continuous integration and liquid template language. Work modularly. Since you can make whatever you want, you are no longer bound to the page/single/archive/taxonomy/category/tag/partial naming conventions for everything.


## Closing
I'm surpised that I had this much to say. WP has taught me tons over the years. I find that all of my WP knowledge transefers to Jekyll. However, I feel like I'm able to do all the same stuff smarter, faster with more fun.
