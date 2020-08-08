---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
lang: pt
---

{% include base_path %}

## Formação

- Graduando em Física (Bacharelado), Universidade Federal da Bahia, 2015-2022 (esperado)
- Técnico em Desenvolvimento de Sistemas, SENAI CIMATEC, 2016-2017

## Experiência Profissional

- 2020-2021: Bolsista de Iniciação Científica
  - Instituto de Física - Universidade Federal da Bahia
  - Bolsa da Fundação de Amparo à Pesquisa do Estado da Bahia - FAPESB
  - Capacitação científica em Computação Quântica aplicada à Teoria de Grafos
  - Orientador: José Garcia Vivas Miranda

- 2020-2020: Voluntário no Combate ao Coronavírus
  - GEOCOVID & Instituto de Física - Universidade Federal da Bahia
  - Desenvolvimento de Modelo de previsão da propagação do Coronavírus no Brasil
  - Orientador: José Garcia Vivas Miranda

- 2019-2020: Bolsista de Iniciação Científica
  - Instituto de Física - Universidade Federal da Bahia
  - Bolsa do Conselho Nacional de Desenvolvimento Científico e Tecnológico - CNPq
  - Capacitação científica em Computação Quântica aplicada à Teoria de Grafos
  - Orientador: José Garcia Vivas Miranda

- 2018-2019: Estágio de Iniciação Científica
  - Instituto de Biologia - Universidade Federal da Bahia
  - Bolsa do Instituto Serrapilheira
  - Capacitação científica em Modelagem Computacional interdisciplinar - Projeto Aquifers Microbiome
  - Orientadores: José Garcia Vivas Miranda & Pedro Millet Meirelles

- 2017-2018: Bolsista de Iniciação Científica
  - Centro de Supercomputação para Inovação Industrial - SENAI CIMATEC
  - Bolsa da Empresa Brasileira de Pesquisa e Inovação Industrial - EMBRAPII
  - Capacitação científica em Paralelização e Otimização de software voltado a Sistemas de Alto Desempenho
  - Orientador: André Luis da Cunha Dantas Lima


{% if site.publications.size > 0 %}
## Publicações
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
## Ensino
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% endif %}

{% if site.development.size > 0 %}
## Softwares Científicos Desenvolvidos
  <ul>{% for post in site.development %}
    {% include archive-single-development.html %}
  {% endfor %}</ul>
{% endif %}
