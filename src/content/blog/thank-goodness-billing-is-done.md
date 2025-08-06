---
date: 2025-08-05 23:59:00
title: Thank Goodness Billing is Done
author: Josh Pullen
description: Integrating subscription billing into my app was unpleasant, but it feels great to be on the other side.
---

Today was day two of [building a pro tier in one week](/blog/one-week-to-build-a-pro-tier) for Shuffle Buddy. The goal for today was to set up billing through Stripe so that people could subscribe monthly or yearly and then manage and cancel their subscription.

# Billing is messy

I ended [yesterday's post](/blog/maximum-ui-per-hour) with a prediction: "I expect billing to be a high-stakes, complicated integration. The output, ultimately, will be a small amount of code that is very challenging to write."

That mostly came true, except that the amount of code wasn't that small.

Billing is complicated. Partly because the logic is weird–although Stripe does a good job of simplifying it as much as possible. Worse, you're integrating together different services, which is the kind of nightmare programming I enjoy the least.

# The Dip

About 25% of the way into the day, I hit a tough emotional dip. Life frustrations didn't help, but it was mostly the code that made me feel hopeless.

I spent most of the morning migrating from Preact to React, a surprise task I didn't know would be needed. Then, I started to try to integrate Firebase with Stripe and the complexity was getting away from me. I was setting up local Firebase emulators to run Firebase functions, which–if deployed to production–would duplicate my infrastructure to include two separate serverless environments (Firebase and Vercel), deployed as two separate projects. Bleh. I was definitely generating "low volume, high effort" [as predicted](/blog/maximum-ui-per-hour).

# Running away from my problems

When I hit the dip this morning, I started to recognize the feeling. Too much coding, detached from reality, for more than 24 hours, has made me feel this way before. I knew not to be surprised, and the answer was not to double down on code. So I went for a run.

It's annoying how well exercise works as an emotional regulator.

# Taking tangents

During my time as a supremely average high school cross country runner, I learned to "take tangents", which is a fancy way to say _cut corners as much as you can without breaking the rules_.

When I returned from my run, I realized it was time to cut some corners. Instead of insisting on building my own checkout form and writing my own backend integration, which is my typical preference, today's time pressure meant that I needed to do things the easy way.

I decided to give the [Firebase/Stripe integration extension](https://extensions.dev/extensions/invertase/firestore-stripe-payments) a try, and although it's not perfect, it got the job done. I also gave up on embedding the checkout form into my app and just kicked users out to the Stripe-hosted page instead.

My app has been successful in large part because I put a lot of extra hours into making it as clean and easy as possible. But hand-crafting every detail isn't _always_ the right choice. I think that taking a few shortcuts today was a good, pragmatic choice.

Once I gave in, everything got easier. (Not easy. But easier.)

# I'm thrilled!

Despite the morning dip–or maybe because of it–I am totally stoked to have completed the billing integration today. Everything works and it feels incredible. I finally feel like I can take a deep breath, and the satisfaction of closing tabs in my brain is unbeatable.

Tomorrow I get to attend a teacher PD on Building Thinking Classrooms, so I can let my mind relax. I'm really looking forward to a professional work day so I can take a break from all this _work_.
