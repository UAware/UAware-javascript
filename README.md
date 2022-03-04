# UAware-Javascript

## Why?

While Russia is brutally attacking our brothers and sisters in Ukraine, it is almost impossible for Russian citizens to get accurate information about these events. While it is simple for Russian ISPs, under pressure from their government, to block certain news sources from outside Russia it is much more difficult to block the whole internet.

We created this script to enable all website owners to display informational messages about the ongoing events to visitors from a Russian IP address. We had a few additional goals:

- It needed to be very lightweight.
- It must not rely on a single domain name that would be easy to block.
- It should not contain any tracker or abuse of personal data.
- Messages should be included in a single small footprint file.

We believe we achieved all these goals.

## What?

The setup is very simple. When the webpage is loaded, it will perform a call to a cloudflare worker instance that verifies if the IP address is within the Russian or Belarussian IP space. If so, a small banner in the Ukrainian national colors will be displayed at the top of the page with a message about the current events.

We are also releasing the `UAware-worker` for those that want to run their own worker. You can find it here: [UAware-worker](https://github.com/UAware/UAware-worker)

## How?

Add the following script tag to your HTML. It can go either in the `head` tag or at the end of the `html` tag. Either way will work fine.

`<script type="text/javascript" src="https://cdn.skypack.dev/uaware-javascript" defer></script>`

## Who?

- [@wimremes](https://twitter.com/wimremes) - I'm quite good at having ideas, but generally bad at coding. Luckily for you I didn't code this :P
- [@Stekkz](https://twitter.com/Stekkz) - I can code, so I coded :)
- [@fildon](https://twitter.com/fildon_dev)

We would additionally like to thank our friend K for collecting the messages and additional native Russian and native Ukrainian reviewers that made sure the messages were linguistically correct.

As these are sensitive times, we are not sure if everybody is happy with being appropriately credited on this type of thing. That's why we chose not to share names. We want this to be used as widely as possible in support of the Ukrainian people, hopefully informing as many of our Russian friends as possible.

Slava Ukraini, Heroyam Slava!
