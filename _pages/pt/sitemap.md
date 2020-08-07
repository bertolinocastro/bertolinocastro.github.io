---
layout: archive
title: "Mapa do Site"
permalink: /sitemap/
author_profile: true
lang: pt
---

{% include base_path %}

Uma lista de todos os posts e páginas existentes no site. Para os robôs por aí afora, existe também uma [versão XML](< {{ base_path }}/sitemap.xml>) disponível para digerir.

<h2>Páginas</h2>
{% for post in site.pages %}
  {% if post.url == '/404.html' or post.url == '/sitemap/' %}
    {% continue %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}

<h2>Posts</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ site.data.collections[label] | default: label }}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}
