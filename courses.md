---
layout: default
title: Courses
permalink: /courses/
---

<div class="page-intro">
  <p class="eyebrow">Curriculum</p>
  <h1>Courses I Teach</h1>
  <p>Technical foundations for people who want to understand systems deeply and build with intention.</p>
</div>

<ul class="entry-list">
  {% assign sorted_courses = site.courses | where_exp: "course", "course.topic != true" | sort: "order" %}
  {% for course in sorted_courses %}
  <li>
    <h3>{% if course.link == false %}{{ course.title }}{% else %}<a href="{{ course.url | relative_url }}">{{ course.title }}</a>{% endif %}</h3>
    <p class="entry-meta">{{ course.term }}{% if course.level %} · {{ course.level }}{% endif %}</p>
    <p class="entry-excerpt">{{ course.excerpt | strip_html | truncatewords: 25 }}</p>
  </li>
  {% endfor %}
</ul>
