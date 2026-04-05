# Politique de sécurité

## Versions prises en charge

WeBot est en phase de mise en place du dépôt. Lorsque des versions du logiciel seront publiées, cette section indiquera quelles branches ou tags reçoivent des correctifs de sécurité.

> [!CAUTION]
> **Ne signale pas** une vulnérabilité en créant une issue publique si cela pourrait aider à exploiter le problème avant qu’un correctif soit disponible.

## Signaler une vulnérabilité

Si tu penses avoir trouvé une faille de sécurité liée à WeBot ou à son déploiement documenté dans ce dépôt :

1. **Contacte en privé** les mainteneurs du dépôt (par exemple via l’option **Security** → **Report a vulnerability** sur GitHub pour [youtsuhodev/WeBot](https://github.com/youtsuhodev/WeBot), si elle est activée).
2. Décris le problème avec le **maximum de détails utiles** (étapes de reproduction, impact estimé), sans exploiter les systèmes d’autrui.
3. Accorde un **délai raisonnable** avant toute divulgation publique, pour permettre l’analyse et un éventuel correctif.

Nous nous efforcerons d’accuser réception et de te tenir informé·e de l’avancement du traitement.

## Bonnes pratiques pour les contributeurs

- Ne commite jamais de **jetons Discord**, clés API, mots de passe ou fichiers `.env`.
- Révise le code des PR avec un œil sur les **injections**, **fuites de données** et **permissions** (notamment côté bot Discord).
