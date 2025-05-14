---
date: 2025-05-14 23:00:00
title: "Teachers Want a Website"
author: "Josh Pullen"
---

**tl;dr** _If you are making a tool for teachers, try to avoid distributing it as a Chrome extension. Publish to the web instead._

[Shuffle Buddy](https://www.shufflebuddy.com/) is no longer a Chrome extension. Instead, it is a website.

When I first tested Shuffle Buddy–my randomized seating chart generator–with real teachers, folks took issue with the tool being distributed as a Chrome extension. [I was surprised.](/blog/you-dont-know-your-users-until-you-watch-them) Shuffle Buddy didn't _need_ to be a Chrome extension, but I didn't think it mattered much.

**As it happens, many school districts block all Chrome extensions except for a certain allowed list.** By distributing my tool as an extension, I was making it more difficult for teachers to access. If you are building a tool for teachers, I strongly encourage you to distribute it as a website instead if at all possible.

The original motivation for creating an extension was to allow users to import seating charts into their student information system (gradebook, etc). It turns out that this feature was not that important. And even if I add it back in the future, it can be done via a _companion_ chrome extension that enhances the functionality of the website. There's no need to trap the rest of the functionality behind an install-wall.

I would not have known this without observing real teachers use my tool. I continue to be obsessed with [the need for real-world user testing](/blog/you-dont-know-your-users-until-you-watch-them). Five stars for The Design of Everyday Things by Don Norman.
