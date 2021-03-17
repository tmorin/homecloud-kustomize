# gitea

> Deploy [Gitea] on [homecloud].

[gitea]: https://gitea.io
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Components

- [claimed-volumes](components/claimed-volumes) transforms the data volume declaration to a claimed volume
- [ingress-traefik](components/ingress-traefik) add an IngressRoute managed by Traefik
- [longhorn-mounts](components/longhorn-mounts) enhances the liveness probe with a check on the mounted data volume
