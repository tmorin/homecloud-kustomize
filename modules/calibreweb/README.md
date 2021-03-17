# calibreweb

> Deploy [calibre-web] on [homecloud].

[calibre-web]: https://github.com/janeczku/calibre-web
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Components

- [claimed-volumes](components/claimed-volumes) transforms the data volume declaration to a claimed volume
- [ingress-traefik](components/ingress-traefik) add an IngressRoute managed by Traefik
- [longhorn-mounts](components/longhorn-mounts) enhances the liveness probe with a check on the mounted data volume
