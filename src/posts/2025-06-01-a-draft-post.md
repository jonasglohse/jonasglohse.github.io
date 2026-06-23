---
title: "A Draft Post"
description: "This post is marked as a draft and should not appear in production builds."
date: 2025-06-01
tags:
  - writing
draft: true
---

This post has `draft: true` in its front matter.

In development (`npm start`) it is visible and appears in the post list. In a production build (`npm run build`) it is excluded — it will not appear in the list and its URL returns a 404.

This is how you keep work-in-progress posts out of the live site.
