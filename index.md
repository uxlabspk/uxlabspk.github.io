---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">Software Engineer · AI Researcher · Pakistan</p>
    <h1>I build intelligent systems that feel <em>human.</em></h1>
    <p class="hero-lede">I'm Muhammad Naveed. I work across mobile, backend, and AI, with a particular interest in Speech AI, LLMs, and the small details that make technology easier to use.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/projects/' | relative_url }}">Explore my work <span aria-hidden="true">↗</span></a>
      <a class="button button-quiet" href="https://www.linkedin.com/in/prog-naveed/" target="_blank" rel="noopener">Let's connect</a>
    </div>
  </div>
  <div class="hero-mark" aria-hidden="true">
    <span class="hero-mark-label">N / 01</span>
    <span class="hero-mark-circle"></span>
    <span class="hero-mark-line"></span>
  </div>
</section>

<section class="signal-grid" aria-label="Areas of focus">
  <div><span class="signal-number">01</span><strong>Build</strong><p>Scalable software from mobile interfaces to backend systems.</p></div>
  <div><span class="signal-number">02</span><strong>Research</strong><p>Speech AI and LLMs that push human-computer interaction forward.</p></div>
  <div><span class="signal-number">03</span><strong>Share</strong><p>Notes, courses, and practical ideas for the next builder.</p></div>
</section>

<div class="home-section split-section">
  <div class="section-heading">
    <p class="eyebrow">From the notebook</p>
    <h2>Thinking in public</h2>
    <p>Writing is how I turn experiments into understanding. Follow along as I explore systems, algorithms, and the craft of building.</p>
    <a class="text-link" href="{{ '/blog/' | relative_url }}">Read the journal <span aria-hidden="true">↗</span></a>
  </div>
  <div>
  <ul class="entry-list">
    {% for post in site.posts limit:3 %}
    <li>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="entry-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <p class="entry-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
    </li>
    {% endfor %}
  </ul>
  </div>
</div>

<div class="home-section split-section course-section">
  <div class="section-heading">
    <p class="eyebrow">Teaching</p>
    <h2>Foundations for curious minds</h2>
    <p>Two courses for understanding what happens beneath the interface, from app architecture to the operating system itself.</p>
    <a class="text-link" href="{{ '/courses/' | relative_url }}">View courses <span aria-hidden="true">↗</span></a>
  </div>
  <div>
  {% assign sorted_courses = site.courses | sort: "order" %}
  <ul class="entry-list">
    {% for course in sorted_courses limit:3 %}
    <li>
      <h3><a href="{{ course.url | relative_url }}">{{ course.title }}</a></h3>
      <p class="entry-meta">{{ course.term }}{% if course.level %} · {{ course.level }}{% endif %}</p>
    </li>
    {% endfor %}
  </ul>
  </div>
</div>

<div class="home-section split-section projects-section">
  <div class="section-heading">
    <p class="eyebrow">Selected work</p>
    <h2>Useful, curious, built</h2>
    <p>Open-source experiments and products spanning productivity, education, accessibility, and developer tooling.</p>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">See all projects <span aria-hidden="true">↗</span></a>
  </div>
  <div>
  <ul class="entry-list">
    {% for project in site.projects limit:3 %}
    <li>
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      <p class="entry-excerpt">{{ project.excerpt | strip_html | truncatewords: 20 }}</p>
    </li>
    {% endfor %}
  </ul>
  </div>
</div>
