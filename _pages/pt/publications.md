---
layout: archive
title: "Publicações"
permalink: /publications/
author_profile: true
lang: pt
---

{% if author.googlescholar %}
  Você pode achar meus artigos também no <u><a href="{{author.googlescholar}}">meu perfil do Google Scholar</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
