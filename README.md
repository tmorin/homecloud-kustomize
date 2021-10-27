# homecloud-kustomize

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/tmorin/homecloud-kustomize/Continous%20Integration%20-%20Test/main?label=GitHub%20Actions&logo=github+actions&logoColor=black)](https://github.com/tmorin/homecloud-kustomize/actions/workflows/ci-test.yml?query=branch%3Amain)

> A set of [Kustomize] resources dedicated for [homecloud].

[Kustomize]: https://kustomize.io
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Modules

The Kustomize resources are grouped by standalone modules.
Each module is composed of a base, additional components and overlays.

- [homecloud-calibreweb](modules/homecloud-calibreweb)
- [homecloud-nextcloud](modules/homecloud-nextcloud)
