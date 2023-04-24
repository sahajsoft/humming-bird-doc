---
id: hummingbird
title: Humming:bird
sidebar_label: Humming:bird
---
# What is humming:bird?

TL;DR: `humming:bird` is the fastest way to create (an opinionated) kubernetes cluster with a set of tools and services which we use in our day-to-day life.

At Sahaj, we work with a variety of clients. A non-trivial amount of time is spent setting up the infrastructure and shaping it up to a level that we like. It is also true that across projects, we make use of similar set of services (mostly open-source 😄) to make our lives easier. Project `humming:bird` is aimed at automating this repetitive task.

Humming-Bird therefore achieves the following:

* reduce dev time required to set up infra
* standardise the set of tools and services we use across clients, so we are assured that the infra is robust and follows good practises
* prefer convention over configuration so that we can get up and running as soon as possible, while leaving the infra malleable to changes at a later time.

## How does `humming-bird` plan to achieve this?

For starters, we are assuming that we deploy into a containerised environment. There are few challenges in standardising infra and automating this task

* we cannot be sure if we want to create a cluster and deploy our services or re-use an existing cluster given to us by the client.
* the control plane can change at any given time. For instance client may change cloud provider, or move from managed to self-managed service.
* Some services which we want to deploy are not wanted in the project or may already exist in the project.

`humming:bird` is designed keeping all of this in mind.
