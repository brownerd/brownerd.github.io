# Error loading RubyGems plugin

I started to get this error out of nowhere. I tried to install a gem using the `gem` command, and I got a long error message that started with this, "Error loading RubyGems plugin." I'm guessing that it happened after I switched from MacPorts to Homebrew. This is what I did to get `gem` working again.

1. run `rvm implode`
1. I then moved my .rvm directory to the trash because rvm implode couldn't remove it.
1. Restarted my computer because that's what the uninstaller told me to do.
1. Reinstalled rvm `\curl -L https://get.rvm.io | bash -s stable --ruby`
1. Wait for it to finish.
1. Now `gem` works again. I then had to reinstall some gems that I was missing. However, I decided to only reinstalled Sass. I'll do the others when I need them.
1. Done.
