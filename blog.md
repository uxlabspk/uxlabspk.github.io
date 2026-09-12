---
layout: default
title: Blog
permalink: /blog/
---

# Blog

<ul class="entry-list">
  {% for post in site.posts %}
  <li>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="entry-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p class="entry-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </li>
  {% endfor %}
</ul>
