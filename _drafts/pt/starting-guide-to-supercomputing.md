---
title: Guia iniciante para Supercomputação
date: 2020-08-30
permalink: /posts/2020/starting-on-supercomputing/
lang: pt
tags: [supercomputing, programming, parallel, openmp, mpi]
categories: [supercomputing]
---

**Sejam bem-vindos ao meu primeiro post!**

Neste post tentarei apresentar um pouco do que aprendi durante minha primeira iniciação científica no Centro de Supercomputação do [SENAI CIMATEC](http://www.senaicimatec.com.br/). Lá fiz parte do Laboratório de Engenharia de Alto Desempenho, integrando o grupo de otimização e paralelização de sistemas. Estive lá por um ano e pude vislumbrar o quão importante a computação é para a ciência e, muito importante também, que há de se fazer bom uso de recursos computacionais.

<q>_Não adianta ter um foguete se você não sabe dirigi-lo e tenta andar com ele empurrando. Você não vai usufruir do potencial dele e vai impedir um entusiasta de fazer sua viagem pra Marte._</q>

Abaixo, abordo temas relacionados ao uso de sistemas de gerenciamento de recursos em clusters (especificamente o [SLURM](https://slurm.schedmd.com/)). No [próximo post](/posts/2020/c-c++-python-parallel-code/) abordarei a paralelização de códigos, com prova de conceito em C/C++ e Python, e farei o link disso com o conteúdo desse post.


{% include toc %}

## SLURM

O SLURM é um sistema de gerenciamento de recurso computacional. Ele funciona basicamente administrando todas as requisições de recurso feita por todos os usuários de um cluster, as põe em uma fila de prioridade e inicia as requisições quando o recurso estiver disponível.

**O que são recursos?**

R: Aquilo que você pode usar pra fazer processamento. Um cluster, assim como seu laptop, celular, televisão, etc, possui _(de forma bem resumida)_ processador(es) e alguma forma de armazenamento temporário e/ou persistente. Mas, basicamente, você pode pensar em processadores do tipo CPU e GPU, que são os mais comuns ultimamente, e em armazenamentos como a RAM e o HDD/SSD.

**Por que é importante saber isso?**

R: Porque quando você faz uma solicitação ao SLURM, você pede determinado recurso. E o que você pede? Quantos processadores você quer, quantos processadores X você quer, quanta memória você precisa, quantos nós, etc.

**O que são nós?**

R: Pronome pessoal da 1a pessoa do singular :grin:. Brincadeira haha. Se você imaginar um cluster como uma rede (que é composta por [nós](https://pt.wikipedia.org/wiki/V%C3%A9rtice_(teoria_dos_grafos))), cada nó representa algo como se fosse um computador. É como se todos os laptops e celulares das pessoas em sua casa conectados à mesma rede formassem um cluster. E é basicamente isso mesmo. Dá pra você fazer seu cluster pessoal em casa de graça.

No caso de um cluster de alto desempenho, como com os que trabalhei no CIMATEC e os outros com que continuo trabalhando até hoje, cada nó desses é basicamente a placa-mãe de um computador com 1 ou 2 CPUs (podem existir mais, depende do hardware), uma quantidade boa de memória RAM e conexão com todos ou boa parte dos outros nós da rede e também com o sistema de armazenamento persistente compartilhado entre os nós (geralmente são `/home` e `/scratch`).

**Por que eu estou falando disso tudo no tópico do SLURM?** Basicamente porque é nisso que o SLURM se preocupa. Então o usuário precisa ter noção do hardware que está lidando e como pedir corretamente ao SLURM o recurso que precisa.

### Boas-práticas de requisição

Então, para solicitar direitinho, é sempre bom ter em menter se o seu software já está paralelizado e, se estiver, como ele está paralelizado. Esses são dois tipos de paralelização que eu já labutei:

1. Em Threads: Paralelização Intra-nó
2. Em Processos: Paralelização Inter-nó

_As duas não são rigidamente intra ou inter, mas essa separação é útil pra se ter uma idea inicial. Também não são exclusivas, ou seja, é possível fazer uso de ambas._

1. Se ele for paralelizado em Threads, você precisa se preocupar então com o número de Threads que você vai querer utilizar na sua requisição do SLURM. Geralmente, os softwares são desenvolvidos pensando num número 1:1 de Threads por [Core](#core) _(ainda não falei de Core, então clica no link aí se já tá curiosa(o))_, então você pode requisitar nós com quantidade X de Cores. Ou basicamete pedir toda a quantidade de cores disponível nos nós, mas lembrando que mais pra frente você vai precisar se preocupar com isso dentro do programa.

2. Se for paralelizado em [Processos](https://pt.wikipedia.org/wiki/Processo_(inform%C3%A1tica)), é comum se preocupar com o número de nós que você vai precisar. Isso tem dependência direta com o que seu usuário do SLURM dispõe. É também possível o uso desses Processos como se fossem Intra-nó, mas levando em consideração como esses Processos são criados por cada nó e também tendo em mente que um Processo custa mais caro para um processador do que uma Thread. No mais normal que já vi, se utiliza um Processo por nó (e então cada processo cria suas Threads, etc) e eles então se comunicam para transmitir alguma informação que seja necessária (tipo por internet mesmo, mandando uma mensagem no WhatsApp entre si).
