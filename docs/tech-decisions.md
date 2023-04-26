---
id: tech-decisions
title: Tech Decisions
sidebar_label: Tech Decisions
---

### Rancher

`humming:bird` uses `Rancher` for creating the control plane in HA configuration. We have explored various tools to achieve this and we decided to continue with `rancher` for now. As to why this decision was taken, you can check the table below. If you do not care, you can [skip this and go to next section](#tekton)

<table>
<thead>
<tr>
<th></th>
<th>Pros ✅</th>
<th>Cons ❌</th>
</tr>
</thead>
<tbody>
<tr>
<td>Rancher</td>
<td>
<ul>
<li>Integrates with all major cloud providers, even baremetal</li>
<li>Very nice RBAC + User-Management from Rancher itself</li>
<li>One view to manage multiple clusters</li>
<li>Has various security compliance, can run govt. workloads</li>
<li>Nice UI </li>
<li>Sets up services such as Calico/Canard and few other services in the cluster by default</li>
</ul>
</td>
<td>
<ul>
<li>Rancher does not create autoscaling groups natively in cloud provider. Instead it constantly polls the control plane nodes in the clod and recreates It when a node goes down.</li>
<li>Setting up HA control plane cluster requires some work (and it is not easy to implement)</li>
<li>Things can improve in terms of IaaC (Terraform)</li>
</ul>
</td>
</tr>
<tr>
<td>Charmed K8s (Ubuntu)</td>
<td>
<ul>
<li>Integrates with few cloud providers only</li>
<li>Supports HA out of the box</li>
<li>YAML based config (Like kOPS)</li>
</ul>
</td>
<td>
<ul>
<li>In beta</li>
<li>Documentation is not great</li>
<li>Not adopted by community (as of now) so very difficult to debug errors</li>
</ul>
</td>
</tr>
<tr>
<td>KubeSpray</td>
<td>
<ul>
<li>Claims to work with everything out of the box</li>
<li>Like Rancher, also install sensible defaults</li>
<li>Good amount of adoption and usage by the community</li>
</ul>
</td>
<td>
<ul>
<li>Does not do provisioning only set up of kubernetes</li>
<li>Working with dynamic infra which is not provisioned very hard</li>
<li>Integration is sparse with IaaC</li>
</ul>
</td>
</tr>
<tr>
<td>kOPS</td>
<td>
<ul>
<li>Tried and tested tool</li>
<li>Integrates with major cloud provider and support for other cloud providers are in beta or alpha</li>
<li>Probably the fallback tool of choice if rancher does not work out</li>
</ul>
</td>
<td>
<ul>
<li>Lacks support for few cloud providers or baremetal</li>
</ul>
</td>
</tr>
<tr>
<td>Other tools</td>
<td>❌ Have not explored ❌</td>
<td></td>
</tr>
</tbody>
</table>

### Tekton

Tekton was an obvious choice. We decided early on we do not want lock-in with any Git providers. Tekton had good community adoption and a nice plugin hub.

### ArgoCD (Not Implemented)

### Tech used inside the cluster

This is a non-exhaustive list of tech used inside the cluster
- prometheus-grafana-alertmanager-thanos
- kube-hunter