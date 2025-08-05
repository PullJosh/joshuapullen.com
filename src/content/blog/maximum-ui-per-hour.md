---
date: 2025-08-04 23:59:00
title: Maximum UI Per Hour
author: Josh Pullen
description: I built a LOT of UI today. The entire authentication system is done, preparing me to set up billing tomorrow.
---

I set a goal to [build a pro tier for Shuffle Buddy in one week](/blog/one-week-to-build-a-pro-tier). Today was the first full work day, and it was insane.

# Authentic Communication

Yesterday evening I published a [TikTok video](https://www.tiktok.com/@josh_pullen/video/7534531565657820429) and [blog post](https://www.shufflebuddy.com/blog/why-im-adding-a-paid-pro-tier-to-shuffle-buddy) announcing the upcoming pro tier. I don't want the new features to come across as a money-grab, so I thought it would be good to communicate proactively about the changes. Not very many people have seen the video/post (at least compared to my new [viral expectations](/blog/shuffle-buddy-found-a-big-audience)), but I remain glad that I did it. Some things are worth doing for the principle.

# Authentication

Hoo boy. This was a big task. [As a reminder](/blog/one-week-to-build-a-pro-tier), this week I need to build authentication, payment processing, the actual pro features, the privacy policy, and the marketing. Today was authentication day, and I got the job done.

Firebase was an _excellent_ choice for this project. I didn't have to build anything on the backend. I just built UI (modals, forms, and lots of state management) for the following features. The actual work for each step happened in a single Firebase function call.

- Register with name, email, and password
- Sign in with email & password
- Sign out
- Verify email address with a confirmation link
- Change your email address and re-verify
- Update your account settings (name)
- Change your password
- "Forgot your password" reset links
- Delete your account

This was a LOT of UI to build, and I'm very impressed by the sheer volume of what I added today.

![A screenshot of the new sidebar sign-in buttons](/images/posts/maximum-ui-per-hour/sidebar-sign-in.png)

![A screenshot of the new registration modal](/images/posts/maximum-ui-per-hour/register-modal.png)

![A screenshot of the new account management modal](/images/posts/maximum-ui-per-hour/account-management-modal.png)

![A screenshot of the new email management modal](/images/posts/maximum-ui-per-hour/email-modal.png)

# Bracing for the hard stuff

Tomorrow's goal is to implement Stripe billing. Today was all about producing a large volume of unsurprising code. In contrast, I expect billing to be a high-stakes, complicated integration. The output, ultimately, will be a small amount of code that is very challenging to write.

Low volume, high effort. I am mentally bracing for this 180° change, but I don't really know what to expect. I'll report back tomorrow.
