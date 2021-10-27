# homecloud-nextcloud

> Deploy [nextcloud] on [homecloud].

[nextcloud]: https://nextcloud.com
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Base

Deploy a set of Deployments which embeds the Nextcloud monolith, a MariaDB database and a Redis instance.

## Volumes

The setup relies on three Persistent Volume Claims:

- `nextcloud-application` : the volume which contains the Nextcloud resources
- `nextcloud-database` : the volume which contains the database files
- `nextcloud-dnas` : should be a SAMBA share of the Decentralized NAS

## Configuration

Configuration Map:

- [Configmap-application.env](./base/Configmap-application.env)
- [Configmap-common.env](./base/Configmap-common.env)
- [Configmap-database.env](./base/Configmap-database.env)

Secrets:

- [Secret-application.env](./base/Secret-application.env)
- [Secret-common.env](./base/Secret-common.env)
- [Secret-database.env](./base/Secret-database.env)
