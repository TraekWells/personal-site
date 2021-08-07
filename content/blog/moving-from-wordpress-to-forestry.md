---
draft: true
previewImage: "/img/default-card-image.png"
title: Moving From Wordpress to Forestry
summary: How moving from WordPress to Forestry drastically improved my performance
  and sky-rocketed my developer experience.
createdAt: 2021-08-08T23:00:00.000-06:00

---
<note>This is not an anti-WordPress post. In fact, I think WordPress is a fantastic tool and depending on the needs of the project, could be the perfect solution. This post is to promote how amazing Forestry is.</note>

I've been using WordPress for quite a while for any website or project that had any kind of blog-like content. It was my go-to Content Management System (CMS) because it gives you everything you could possibly need to begin creating and managing content out of the box. That's probably why [it's so popular](https://kinsta.com/blog/wordpress-statistics/ "WordPress popularity").

But as a wise man once said: (is this tasteless)

> Ask and you shall recieve

## Why I Moved Away From WordPress?

One of my **many** side projects is a [hip-hop website](https://hiphopseason.com/ "Hip Hop Season") where I review non-mainstream hip-hop projects and blog about the culture. It's a passion project that I started as a place for me to not only create content that I'm interested in but also to practice writing.

Being that it wasn't a client project, it also gave me a good place to experiment with different ways of developing the features and trying out different technologies.

As time went on though, I found myself spending a lot more time maintaining plugins, constantly tweaking [RankMath](https://rankmath.com/ "RankMath SEO") settings to maximize SEO, adjusting and optimizing images...

Basically doing everything **EXCEPT** for writing.

This wasn't directly WordPress's fault but it _was_ clear that all of the bells and whistles were very distracting for me.

### I Wanted a More Modern Development Process

Another reason I decided to scout for other options was that I didn't love the developer experience with WordPress and wanted something more modern. Some of my pain points:

* I ran into a bunch of trouble trying to get Prettier to work nice with PHP and eventually just said "F it, it's going to be ugly."
* Couldn't find a good way to use components like you can with JavaScript frameworks.
* It was more of a pain than I'd like to admin to set up automatic reloading when you save a `.php` or a `.scss` file during development.

I absolutely love [Vue](https://vuejs.org/ "VueJS") and basically use [NuxtJS](https://nuxtjs.org/ "NuxtJS"), which is a static site generator built with Vue, wherever I can. All I had to do was find a CMS that would allow me to use this technology as the base for my project.

## What is Forestry?

[Forestry.io](https://forestry.io/ "Forestry io") is a Git-based headless CMS that allows you to manage markdown content with a truly beautiful editing experience. They offer a very generous free plan that allows you to run up to three sites and each site can have three different editors. Not only that but they have really nailed making getting started as easy as possible (after creating an account):

Click 'Add Site' in the upper right
Select a static site generator
Select your Git provider
Select your Git repository

**Voila!** Just like that, you're ready to start using the Forestry admin interface.

## Editor Experience

## Developer Experience

The beauty of using a headless CMS is that you can 'bring your own front-end'. In other words, you can use whatever the hell you want to display your content.

## Other Stuff I Considered

### Images

### SEO

### Security