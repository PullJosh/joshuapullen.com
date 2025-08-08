---
date: 2025-08-07 23:00:00
title: The Icing on The Cake (Building the fun features)
author: Josh Pullen
description: Today I built the fun features for my app, nearly completing my week-long spring to launch Shuffle Buddy Pro. As I look forward to the launch, I can't help but consider how my life might change when it is released.
---

Today I resumed [my one-week plan](/blog/one-week-to-build-a-pro-tier) to add a pro tier to Shuffle Buddy. This was the most fun I've had all week.

As a reminder, on Monday [I added password-based authentication](/blog/maximum-ui-per-hour) so that users could sign in. On Tuesday [I added subscription payments](/blog/thank-goodness-billing-is-done) using Stripe. Wednesday was a coding break; I attended a day-long professional development session (where I was recognized in-person by another Shuffle Buddy TikTok viewer!)

# The Fun Stuff!

With infrastructure out of the way, today was all about adding the _actual pro features_.

I built cloud syncing of seating charts–which feels surprisingly speedy & solid. I credit Firebase for being incredibly seamless for my use-case.

Next, I added the ability to color-code desks and assign labels/numbers to desks. Here's an example dummy seating chart I generated during testing:

![A generated seating chart with colorful desks and labels](/images/posts/the-icing-on-the-cake-building-the-fun-features/test-seating-chart.png)

Adding pretty colors is way more fun than infrastructure.

# In-App Marketing

The remaining goals–which must be accomplished tomorrow in order to achieve my dream of releasing Shuffle Buddy Pro in one week–are to set up the in-app marketing for the pro tier and to write an official privacy policy.

![A screenshot of the Shuffle Buddy app home screen including text in the left sidebar that says "Want to sync your classes across multiple devices? Try Shuffle Buddy Pro"](/images/posts/the-icing-on-the-cake-building-the-fun-features/in-app-marketing-sync.png)

I've already started to do some in-app marketing, such as the sidebar in the screenshot above. I feel extraordinarily good about these gentle inline sales offers.

My hypothesis–for which I have no data (yet)–is that these little placeholders where helpful features _could_ go if you just pay a few bucks a month will be highly effective sales vehicles.

I have very strong opinions about keeping the product simple and not overwhelming the interface. When I experimented with stronger in-app pitches (even just a darker purple button) I was repulsed by the noise. I think many teachers would react the same way. I believe strongly in the value of subtle, tasteful sales integrations that quietly offer the perfect feature at the opportune moment.

Here's another example:

![A screenshot of the Shuffle Buddy room layout editor with the desk labeling and coloring features locked](/images/posts/the-icing-on-the-cake-building-the-fun-features/in-app-marketing-desks.png)

Instead of a hard pitch, the features you want–labeling and color-coding the desks–are in sight but not available. Click on the word "pro" or any of the lock icons and you'll be shown the registration popup with pricing details.

I don't have data, but these designs appeal strongly to my tastes.

# 🚀 Launch Day Tomorrow!

Everything has already been deployed to ShuffleBuddy.com behind a feature flag. I can flip the switch and turn on the pro tier any time.

Tomorrow will be launch day. The only remaining work is to finish setting up the marking information and the official privacy policy. Everything always takes longer than you think it will, but this is a legitimately managable polishing day. I feel extremely confident that I can flip the switch tomorrow and feel good about it.

# I don't know what's next

When Shuffle Buddy Pro goes live, I don't know what to expect. I've been trying my best to napkin-math the income it might bring in, but there is a lot of uncertainty. I don't know how many users I'll have. I don't know how many of them will convert to pro.

My best attempt at the math says that some very good things could happen. As in... The income from Shuffle Buddy _could_ be within ±$10,000 of my teaching salary, nearly doubling my yearly income. Or, also very realistically, that could totally not happen.

It has been said that **Happiness = Results - Expectations**. It's easy, when life [changes quickly](/blog/oops-im-a-famous-tiktoker-now), to immediately change your expectations and not appreciate what you have. As I'm riding an upward wave of success, I'm doing my best to appreciate it now and to be prepared for what happens after the wave has passed. I might ride it out for a long time, or maybe it will go away.

I am certainly angling to be as successful as I can possibly be. But I also want to appreciate this wave as it happens (and after it's over)–however big or small it turns out to be.

I've already been incredibly fortunate. I shared something with the world, and the world smiled back. That is enough. But I have to be honest... it looks like there might be a lot of icing on this cake too.
