---
draft: false
previewImage: "/img/moving-from-wordpress-to-forestry.jpg"
title: Moving From WordPress to Forestry
summary: How moving from WordPress to Forestry drastically improved my productivity,
  developer experience and allowed me to work with more modern technology.
createdAt: 2021-08-08T23:00:00.000-06:00

---
<note>This is not an anti-WordPress post. In fact, I think WordPress is a fantastic tool and depending on the needs of the project, could be the perfect solution. This post is simply to promote how amazing Forestry is.</note>

I've been using WordPress for quite a while for any website or project that had any kind of blog-like content. It was my go-to Content Management System (CMS) because it gives you everything you could possibly need to begin creating and managing content out of the box. That's probably why [it's so popular](https://kinsta.com/blog/wordpress-statistics/ "WordPress popularity").

As time went on and I became more and more tech-savvy, I started to realize that WordPress was overkill for what I needed.

## Why I Moved Away From WordPress?

One of my **many** side projects is a [hip-hop website](https://hiphopseason.com/ "Hip Hop Season") where I review non-mainstream hip-hop projects and blog about the culture. It's a passion project that I started as a place for me to not only create content that I'm interested in but also to practice writing.

Being that it wasn't a client project, it also gave me a good place to experiment with different ways of developing the features and trying out different technologies.

As time went on though, I found myself spending a lot more time maintaining plugins, constantly tweaking [RankMath](https://rankmath.com/ "RankMath SEO") settings to maximize SEO, adjusting and optimizing images...

Basically doing everything **EXCEPT** for writing.

This wasn't directly WordPress's fault but it _was_ clear that all of the bells and whistles were very distracting for me.

### I Wanted a More Modern Development Process

Another reason I decided to scout for other options was that I didn't love the developer experience with WordPress and wanted something more modern. Here were a few of my pain points:

* I ran into a bunch of trouble trying to get Prettier to work nice with PHP and eventually just said "F it, it's going to be ugly."
* I couldn't find a good way to use reusable components like you can with JavaScript frameworks (template parts were _ok_ but they aren't as flexible).
* It was more of a pain than I'd like to admin to set up automatic reloading when you save a `.php` or a `.scss` file during development.

I absolutely love [Vue](https://vuejs.org/ "VueJS") and basically use [NuxtJS](https://nuxtjs.org/ "NuxtJS"), which is a static site generator built with Vue, wherever I can. All I had to do was find a CMS that would allow me to use this technology as the base for my project.

This brings me to...

## What is Forestry?

[Forestry.io](https://forestry.io/ "Forestry io") is a Git-based headless CMS that allows you to manage markdown content with a truly beautiful editing experience. They offer a **very generous free plan** that allows you to run up to three sites and each site can have three different editors. Not only that but they have really nailed making getting started as easy as possible (after creating an account):

Click 'Add Site' in the upper right

![](/img/forestry-add-site.png)

Select a static site generator

![](/img/forestry-select-ssg.png)

Select your Git provider

![](/img/forestry-select-git-provider.png)

Select your Git repository

![](/img/forestry-link-repo.png)

**Voila!** Just like that, you're ready to start using the Forestry admin interface.

## Editor Experience

Seeing that Forestry is for markdown-based sites, the editing experience is slimmed down and seamless.

I've used a fair amount CMSs in the past and so far Forestry has the best editing experience I've come across. Everything is super simple and it gives you everything you need including:

* Keyboard shortcuts for many popular formatting and markdown options
* The ability to see and edit values from your post's [front matter](https://forestry.io/docs/settings/front-matter-templates/#what-are-front-matter-templates "What is front matter?")
* An option to preview your post before it's published (although this does take a little bit of configuring depending on the static site generator you're using)

![Forestry editing experience](/img/forestry-editing-experience.png "Forestry editing experience")

_They also give you an option to edit in raw Markdown format if that's what you're into._

Overall, the Forestry user interface allows you to focus on the most important thing, **creating content**.

## Developer Experience

The beauty of using a headless CMS is that you can 'bring your own front-end'. In other words, you can use whatever front-end technology you want to handle for displaying your content.

In my case, I opted to use NuxtJS with its [content module](https://content.nuxtjs.org/ "NuxtJS Content Module") and [SCSS](https://sass-lang.com/ "SCSS") because I'm comfortable with both.

## Other Stuff I Considered

Being that WordPress gave you so many tools to help create and optimize your content, I had some concerns about leaving. There's essentially a plugin that you can use to do virtually anything you need in WordPress but that comes at the cost of more 'stuff' to manage.

### SEO

This was the biggest one.

Setting up basic Search Engine Optimization (SEO) is super easy on WordPress because there are numerous plugins that will handle all of the heavy lifting for you. So how was I going to handle this without the help of a WordPress plugin?

As it turns out, NuxtJS has some fantastic documentation and with their help, I was able to figure out [how to generate meta tags dynamically](https://nuxtjs.org/docs/2.x/features/meta-tags-seo "How to generate dynamic meta tags"), including open-graph tags. With this, I'm able to change the title, description, and image of my content, without relying on a third-party plugin.

More importantly, as I mentioned earlier, with WordPress I found myself spending **far** too much time tweaking SEO settings because they were _right_ there in the editing interface.

Now I can focus on what matters, writing.

### Images

Anytime you upload an image to WordPress, it automatically creates multiple different sizes of that image. By doing this, you're allowing your media folder to swell to be unnecessarily large.

Luckily, NuxtJS offers a module to help optimize images for you automatically.

This is my process for handling images now that I'm not using WordPress anymore:

* I source, resize, and run my image through [ImageOptim](https://imageoptim.com/mac "Image Optim")
* Upload the image to Forestry
* Use [Nuxt Images](https://image.nuxtjs.org/ "Nuxt Images") to further optimize them and deliver them to the user.

Isn't NuxtJS great?

## What I Feel Is Missing From Forestry

As great as Forestry is, there are a few things that I feel would make it even better

### Schedule Posts

It would be amazing if there was a built-in way of scheduling posts to go out. Currently, I set a `draft` boolean and a `publishedDate` in my post's front-matter and when I'm fetching my content, I only fetch and display content that has `draft: false`. I'm sure I could find a way to do this programmatically, but having the option built-in would be fantastic.

### Add A Preview Button

Forestry offers a nice way to allow you to preview your content before you publish it to the World. You can go into settings and start a preview server that will mimic your development command (for me it's the same thing as running `npm run dev`).

![](/img/forestry-preview-settings.png)

After that, on your blog posts, you'll be able to click on this eye icon to open a preview of your post:

![](/img/forestry-preview.png)

The problem is that in order to refresh that Forestry preview page, you have to click on the eye icon again and it's _soooo_ very tempting to click on the big old 'Save' button that's right next to it. But clicking on the 'Save' button will actually publish your post which likely isn't what you want.

I've accidentally published posts a few times when I meant to refresh the preview page.

I wish there was a ghost button that said 'Preview' instead of the eye icon. That might not be the _best_ solution but it would help.

## Wrapping Up

Moving away from WordPress and into Forestry was a great move for the future of my blog and my productivity. The clean user interface allows me to focus on writing without getting caught up in the small details of optimizing and tweaking every little thing.

I can't say I'd recommend Forestry for _every_ project though. Since it's a Git-based CMS, using it on a client project might cause some concerns since their content would have to be on a Git provider (although it could be a private repository). I'd probably opt to use an API-based CMS like [Prismic](https://prismic.io/ "Prismic") or [Contentful](https://www.contentful.com/ "Contentful") instead in that case.

### Bonus

I didn't talk about it much in this post but I use [Netlify](https://www.netlify.com/ "Netlify") to host a few of my sites and they make it **super** simple to set up a site with automatic deployments. This paired with Forestry is a perfect combination for streamlined development.