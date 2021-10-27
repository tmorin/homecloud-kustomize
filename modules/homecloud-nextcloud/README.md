# homecloud-nextcloud

> Deploy [nextcloud] on [homecloud].

[nextcloud]: https://nextcloud.com
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Base

Deploy a set of Deployments which embeds the Nextcloud monolith, a MariaDB database and a Redis instance.

The setup relies on three Persistent Volume Claims expected the following volumes:

- `nextcloud-application` : a _RWO_ volume to hosts the Nextcloud resources
- `nextcloud-database` : a _RWO_ volume to hosts the Nextcloud database
- `nextcloud-dnas` : a _RWX_ volume which should be a SAMBA share of the Decentralized NAS

Configuration Map:

- [Configmap-application.env](./base/Configmap-application.env)
- [Configmap-common.env](./base/Configmap-common.env)
- [Configmap-database.env](./base/Configmap-database.env)

Secrets:

- [Secret-application.env](./base/Secret-application.env)
- [Secret-common.env](./base/Secret-common.env)
- [Secret-database.env](./base/Secret-database.env)

## Components

- [backup-duplicity](components/backup-duplicity) handles daily backup of the Nextcloud database with Duplicity
- [ingressroute-traefik](components/ingressroute-traefik) add an IngressRoute managed by Traefik
