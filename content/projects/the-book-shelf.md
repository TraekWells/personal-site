---
title: The Bookshelf
summary:
  A website that allows users to discover new books, create a list of books
  to read later and review the books they've read.
previewImage: "/img/the-bookshelf-devices.jpg"
linkToCode: https://github.com/TraekWells/the-bookshelf
technology: Vue, Google Firebase, Google Books API, Tailwind CSS
featured: false
draft: false
---

One of my best friends reads quite a bit of books. He told me that currently, he doesn't really have a good system for keeping track of the books he's read (except for keeping them in a stack somewhere).

Being the good friend that I am, I offered to build something that would help solve these problems knowing that it would take skills that were **JUST** outside of my skill set. This would force myself out of my comfort zone and test my problem solving skills.

From the beginning, my plan was to use [Vue](https://vuejs.org/) since I'm infatuated with that framework. Everything about it just makes sense to me. That's not to say that I'm an expert in it, because I'm **far** from it, but Vue just calls to me.

## Goals

Besides leveraging the Vue ecosystem, I did have a few specific goals that I wanted to accomplish for this project.

- I wanted to user to select their favorite reading genres and ping some API with a query of those genres to keep things fresh and unique per user
- I wanted to use Tailwind CSS for the first time so I could see what the hype was about
- The user needed to be able to save books _somewhere_
- The user needed to be able to save the books that they read and review them
- Most importantly, finish the damn project

## Challenges

This was a challenging project for me. Things didn't go **exactly** as planned, although I barely planned at all (more on this later).

My original intention was to use local storage to handle keeping the books organized, but I quickly realized that it local storage couldn't handle what I wanted to do with this project. I ended up using Google Firebase since I had _some_ familiarity with it.

### Learning Google Firebase

Learning how to use Google Firebase wasn't necessarily a challenge but it introduce a bunch of new issues I had to work out. Some of these included:

- User authentication
- Data structuring
- Updating specific instances of data in the database
- Querying data

## Lessons Learned

I came out of the project with a newfound appreciation for JavaScript frameworks, specifically Vue in this case. This would have taken a Herculean effort if it was written in vanilla JavaScript.

The fact that I was building this project for someone besides myself to use, it drove me to consider much more use cases. This allowed me to focus on making the User Experience (UX) as good as possible.

### Planning Is My Friend

I barely planned at all for this project. I kind of just jumped in and started coding which led to a handful of headaches. I am **SO** much more efficient if I have a clear plan of action before I dive into the code. I spent way too much time adjusting Tailwind classes to get things to look at least a little bit as I was picturing it.

A typical workflow for me looks something like this:

1. Open Spotify and turn on Lofi Hip Hop or Otis Redding
2. I'll sketch a **very** rough layout (_This might literally be just one box containing other boxes_)
3. Open up [Sketch](https://www.sketch.com/) and add some life, color and structure to it
4. Open up VS Code and go on my merry way trying to implement the design

This list is super high-level and there's normally a few more steps but the point is, typically, I'll have a design that I'm trying to build.

This time, I thought I'd try to "design in the browser" and skip the design phase.

From reading on Twitter, it seems that some people can do this effectively but I've learned that this doesn't work for me. I get fixed on making the most un-important aspect of a design perfect, which takes away time from actually getting the _thing_ built. Good to know.

### I Don't Love Tailwind CSS

I'll admit that this is probably a bit unfair since this was my first time ever using [Tailwind CSS](https://tailwindcss.com/) in a real project but handling your styles with classes feels weird to me. Tailwind isn't the first utility-first CSS framework I've used and I'm sure I'll use others in the future.

Even though I expected slower results because I had to learn how to use their system, I **massively** underestimated how much time would be spent referring to their docs for guidance. With that being said, [their docs](https://tailwindcss.com/docs) are top-notch and extremely well-written.

I will use Tailwind CSS again in the near future to give it another proper shot, but as of now, I prefer to write the CSS myself.

### Google Firebase is Amazing

Salute to Google Firebase for the service it provides, free of charge to a limit. They don't have the best docs but they make that up with a tremendous onboarding process. Getting up and running with a database and hosting is easy peasy.

## Results

I'm extremely happy with how this turned out in the end. It took a bit longer than I expected but I'm proud of this one. There was nothing more satisfying than typing in `firebase deploy` and watching the progress bars fill up. The design could use some polishing but done is better than perfect.

The amount of confidence this project gave me is invaluable. I learned a ton about building a fairly large project from scratch and the complexities of passing data as `props` from one Vue component to another.

On to the next.
