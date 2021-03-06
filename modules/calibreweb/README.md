# calibreweb

> Deploy [calibre-web] on [homecloud].

[calibre-web]: https://github.com/janeczku/calibre-web
[homecloud]: https://github.com/tmorin/homecloud-ansible

## Base

Deploy a StatefulSet which embeds the calibre-web monolith.

## Components

- [claim-templates](components/claim-templates) replaces the `emptyDir` volumes by `volumeClaimTemplates` entries
- [claimed-volumes](components/claimed-volumes) replaces the `emptyDir` volumes by `persistentVolumeClaim` entries
- [homecloud-claims](modules/calibreweb/components/homecloud-volumes) configure the volumes for the reference homecloud deployment 
- [ingressroute-traefik](components/ingressroute-traefik) add an IngressRoute managed by Traefik
