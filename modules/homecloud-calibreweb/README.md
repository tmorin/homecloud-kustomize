# homecloud-calibreweb

> Deploy [calibre-web] on [homecloud].

[calibre-web]: https://github.com/janeczku/calibre-web

[homecloud]: https://github.com/tmorin/homecloud-ansible

## Base

Deploy a Deployments which embeds the calibre-web monolith.

## Components

- [ingressroute-traefik](components/ingressroute-traefik) add an IngressRoute managed by Traefik

## Volumes

The setup relies on two Persistent Volume Claims:

- `calibrweb-config` : the volume which contains the Nextcloud resources
- `calibrweb-books` : should be a SAMBA share of the Decentralized NAS

## Configuration

Configuration Map:

- [Configmap-application.env](base/Configmap-application.env)
