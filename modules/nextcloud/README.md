# nextcloud

> Deploy [nextcloud] on [homecloud].

[nextcloud]: https://nextcloud.com
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Components

- [claimed-volumes](components/claimed-volumes) transforms the data volume declaration to a claimed volume
- [ingress-traefik](components/ingress-traefik) add an IngressRoute managed by Traefik
- [longhorn-mounts](components/longhorn-mounts) enhances the liveness probe with a check on the mounted data volume
- [mariadb](components/mariadb) declare a MariaDB instance and configure the Nextcloud deployment accordingly
- [mariadb-claimed-volumes](components/mariadb-claimed-volumes) transforms the data volume declaration to a claimed volume
- [mariadb-longhorn-mounts](components/mariadb-longhorn-mounts) enhances the liveness probe with a check on the mounted data volume
- [redis](components/redis) declare a Redis instance and configure the Nextcloud deployment accordingly
