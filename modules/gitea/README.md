# gitea

> Deploy [Gitea] on [homecloud].

[gitea]: https://gitea.io
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Base

Deploy a StatefulSet which embeds the Gitea monolith.

## Components

- [claim-templates](components/claim-templates) replaces the `emptyDir` volumes by `volumeClaimTemplates` entries
- [claimed-volumes](components/claimed-volumes) replaces the `emptyDir` volumes by `persistentVolumeClaim` entries
- [ingressroute-traefik](components/ingressroute-traefik) add an IngressRoute managed by Traefik
- [longhorn-mounts](components/longhorn-mounts) enhances the liveness probe with a check on the volume config
