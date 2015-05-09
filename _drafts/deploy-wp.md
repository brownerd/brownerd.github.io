---
---
# Versioning, deploying, hosting and managing Wordpress
The three nightmares of WP solved.

Holy shit! Versioning, deploying, hosting and managing  WP can be an an absolute nightmare! But that shit is going to end today! Here is how you handle all three and live a life that doesn't suck.

## Step one
DON'T TRACK THE WHOLE FUCKING WP DIRECTORY!

Just track what you work on. Run `git init` in your root WP directory, but Gitignore everything but the plugin you're deving or the theme you are making.

## Step two
FUCKING USE WPENGINE!

Holy fuck! WP has special needs. It can be slow, hackable and crashable. WPEngine solves all of these issues for you. You can spend hours/days/weeks/months fighting to craft settings for caching, security and stability. OR, you can just let WPE handle all of this right out of the box for you.



# My workflow

WPE

1. starter that I manage (all the settings and plugins)
1. I clone this for every new project
1. I pull all of this down to local to set up my local project

MAMPPro
1. Set up dev url and directory
1. Get .gitignore file from WPE and add customizations (ignore all but theme)
1. Import db and change urls

GIT
1. `git init` and root of wp directory
1. Add and commit

GitHub/BitBucket
1. Create remote repo for WP site
1. push local repo to remote

CODESHIP
1. Create new project from GitHub/BitBucket repo
1. Get PubKey from codeship
1. Paste PubKey in WPE for git push ability, then wait 10 mins
1. Use SSH debug to manually run push to confirm that it works
1. Paste in deploy script for automatic use

DEV

1. Work locally.
1. Commit code
1. Deploy to CodeShip whenever Master branch is pushed

TEAM
1. Master branch is always deployable
1. All deployment get pushed to WPE's staging for review by QA and Client
1. Push to Live (WPE or Git)

MANAGEMENT
1. Git workflow for all theme related updates
1. WPE for all plugin/core related updates

DONE AND DONE
