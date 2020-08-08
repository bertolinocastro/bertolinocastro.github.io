---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
lang: en
---

{% include base_path %}

## Education

- Undergraduate in Physics, Bahia Federal University, 2015-2022 (expected)
- Technical Level in Software Development, SENAI CIMATEC, 2016-2017

## Professional Experience

- 2020-2021: Undergraduate Research Assistant
  - Physics Institute - Bahia Federal University
  - Scholarship provided by Bahia State Research Support Foundation - FAPESB
  - Scientific training in Quantum Computing applied to Graph Theory
  - Advisor: José Garcia Vivas Miranda

- 2020-2020: Volunteer in Scientific Effort against Coronavirus
  - GEOCOVID & Physics Institute - Bahia Federal University
  - Development of Coronavirus Prediction Model in Brazil
  - Advisor: José Garcia Vivas Miranda

- 2019-2020: Undergraduate Research Assistant
  - Physics Institute - Bahia Federal University
  - Scholarship provided by the National Council for Scientific and Technological Development - CNPq
  - Scientific training in Quantum Computing applied to Graph Theory
  - Advisor: José Garcia Vivas Miranda

- 2018-2019: Undergraduate Research Assistant
  - Biology Institute - Bahia Federal University
  - Scholarship provided by the Serrapilheira Institute
  - Scientific training in interdisciplinary Computational Modeling - Aquifers Microbiome Project
  - Advisors: José Garcia Vivas Miranda & Pedro Millet Meirelles

- 2017-2018: Undergraduate Research Assistant
  - Supercomputing Center for Industrial Innovation - SENAI CIMATEC
  - Scholarship provided by the Brazilian Company of Research and Industrial Innovation - EMBRAPII
  - Scientific training in software Parallelization and Optimization aimed at High Performance Systems
  - Advisor: André Luis da Cunha Dantas Lima

{% if site.publications.size > 0 %}
## Publications
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% endif %}

{% if site.talks.size > 0 %}
## Talks
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
{% endif %}

{% if site.teaching.size > 0 %}
## Teaching
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% endif %}

{% if site.development.size > 0 %}
## Developed Scientific Softwares
  <ul>{% for post in site.development %}
    {% include archive-single-development.html %}
  {% endfor %}</ul>
{% endif %}
