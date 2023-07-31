---
title: Architecture
sidebar_label: Architecture
---

**Note:** All decisions which have been taken so far, and implemented are subject to change.

The project has two repositories as of now.

- [humming-bird-control-plane](https://github.com/sahajsoft/hummingbird-control-plane)
- and [humming-bird-charts](https://github.com/sahajsoft/humming-bird-charts)

The idea is that the first repository can be used for creating the control plane, while the second one can be used to deploy the services we want in the cluster. This way, both of them can change independent of each other. Even though the control plane is subject to (constant) change, as long as we can connect to `kube-api-server` on control plane, we can deploy our services into the cluster.

High level diagram of how things work: ![diagram](../../static/img/cluster-structure.1.png)

### How do you plan to deploy services into the cluster?

For this, there is one manual step you have to do (unfortunately 😬), which is that you have to install `tekton` inside  your cluster. We use `tekton` as our CI tool, mainly because we don't want to be locked down any one git providers and their DSLs (Gitlab, Github).
If you install `tekton` and point it to the charts repository, it will automatically install all the charts. Each chart has its own `tekton` pipeline setup in the git repository.
(How do I choose what charts to install: See )
