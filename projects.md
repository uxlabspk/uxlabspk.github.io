---
layout: default
title: Projects
permalink: /projects/
---

<div class="page-intro">
  <p class="eyebrow">Open source and experiments</p>
  <h1>Projects</h1>
  <p>A selection of things I have built, researched, and released through <a href="https://github.com/uxlabspk" target="_blank" rel="noopener">GitHub</a>.</p>
</div>

<ul class="entry-list">
  {% for project in site.projects %}
  <li>
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p class="entry-meta">
      {% if project.tech %}{% for t in project.tech %}<span class="tag">{{ t }}</span>{% endfor %}{% endif %}
    </p>
    <p class="entry-excerpt">{{ project.excerpt | strip_html | truncatewords: 25 }}</p>
  </li>
  {% endfor %}
</ul>
