# nextcloud

> Deploy [nextcloud] on [homecloud].

[nextcloud]: https://nextcloud.com
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Base

Deploy a StatefulSet which embeds the Nextcloud monolith.

## Components

Base

- [claim-templates](components/claim-templates) replaces the `emptyDir` volumes by `volumeClaimTemplates` entries
- [claimed-volumes](components/claimed-volumes) replaces the `emptyDir` volumes by `persistentVolumeClaim` entries
- [ingressroute-traefik](components/ingressroute-traefik) add an IngressRoute managed by Traefik
- [longhorn-mounts](components/longhorn-mounts) enhances the liveness probe with a check on the volume config

MariaDB

- [mariadb](components/mariadb) adds a StatefulSet to the manifest which embeds MariaDB and configures Nextcloud accordingly
- [mariadb-claim-templates](components/mariadb-claim-templates) replaces the `emptyDir` volumes by `volumeClaimTemplates` entries to the StatefulSet MariaDB
- [mariadb-claimed-volumes](components/mariadb-claimed-volumes) replaces the `emptyDir` volumes by `persistentVolumeClaim` entries to the StatefulSet MariaDB
- [mariadb-longhorn-mounts](components/mariadb-longhorn-mounts) enhances the liveness probe with a check on the volume config to the StatefulSet MariaDB

Redis

- [redis](components/redis) adds a StatefulSet to the manifest which embeds Redis and configures Nextcloud accordingly
