---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
lang: de
---

{% include base_path %}

## Ausbildung

- Physik Student (Bachelor), Bahia Bundesuniversität, 2015-2022 (voraussichtlich)
- Software Entwicklung Techniker, SENAI CIMATEC, 2016-2017

## Berufserfahrung

- 2020-2021: Wissenschaftlicher Mitarbeiter
  - Physik Institut - Bahia Bundesuniversität
  - Stipendium der Bahia Stiftung zur Unterstützung der Forschung - FAPESB
  - Wissenschaftliche Ausbildung in Quantum Computing in der Graphentheorie
  - Betreuer: José Garcia Vivas Miranda

- 2020-2020: Voluntário no Combate ao Coronavírus
  - GEOCOVID & Physik Institut - Bahia Bundesuniversität
  - Entwicklung eines Coronavirus-Vorhersagemodells in Brasilien
  - Betreuer: José Garcia Vivas Miranda

- 2019-2020: Wissenschaftlicher Mitarbeiter
  - Physik Institut - Bahia Bundesuniversität
  - Bolsa do Conselho Nacional de Desenvolvimento Científico e Tecnológico - CNPq
  - Wissenschaftliche Ausbildung in Quantum Computing in der Graphentheorie
  - Betreuer: José Garcia Vivas Miranda

- 2018-2019: Wissenschaftlicher Mitarbeiter
  - Biologie Institut - Bahia Bundesuniversität
  - Stipendium des Serrapilheira Instituts
  - Wissenschaftliche Ausbildung in interdisziplinärer Computermodellierung - Aquifers Microbiome Projekt
  - Betreuer: José Garcia Vivas Miranda & Pedro Millet Meirelles

- 2017-2018: Wissenschaftlicher Mitarbeiter
  - Supercomputing-Zentrum für industrielle Innovation - SENAI CIMATEC
  - Stipendium des Brasilianisches Unternehmen für industrielle Forschung und Innovation
  - Wissenschaftliche Ausbildung in Software-Parallelisierung und -Optimierung für Hochleistungssysteme
  - Betreuer: André Luis da Cunha Dantas Lima


{% if site.publications.size > 0 %}
## Fachpublikationen
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
## Lehre
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% endif %}

{% if site.development.size > 0 %}
## Entwickelte Wissenschaftliche Softwares
  <ul>{% for post in site.development %}
    {% include archive-single-development.html %}
  {% endfor %}</ul>
{% endif %}
