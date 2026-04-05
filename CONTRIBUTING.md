# Contribuer à WeBot

Merci de t’intéresser à WeBot. Ce dépôt est **open source** : les contributions rendent le projet meilleur pour **tous les serveurs** qui s’en servent.

> [!NOTE]
> WeBot est distribué sous [licence MIT](LICENSE). En contribuant, tu acceptes que tes contributions soient publiées sous les mêmes conditions.

## Avant de commencer

1. Lis le [Code de conduite](CODE_OF_CONDUCT.md) — il s’applique à toutes les interactions (issues, PR, discussions).
2. Vérifie s’il existe déjà une issue ou une discussion sur ton idée pour éviter les doublons.

## Comment contribuer

| Étape | Action |
| ----- | ------ |
| 1 | **Fork** le dépôt [youtsuhodev/WeBot](https://github.com/youtsuhodev/WeBot) |
| 2 | Crée une **branche** depuis `main` avec un nom clair (`feat/…`, `fix/…`, `docs/…`) |
| 3 | Fais tes changements avec des **commits** lisibles (messages en français ou en anglais, cohérents avec le reste du dépôt) |
| 4 | Ouvre une **pull request** vers `main` en remplissant le modèle de PR |

> [!IMPORTANT]
> **Validation par les mainteneurs** — Les PR ne sont pas fusionnées automatiquement. Les mainteneurs **examinent** chaque proposition (qualité, sécurité, cohérence avec la vision multitool). Tu peux recevoir des demandes de modifications : c’est normal et ça protège tout le monde.

## Bonnes pratiques

- **Petites PR** : plus faciles à relire et à intégrer.
- **Décrire le « pourquoi »** : contexte, cas d’usage, capture ou exemple si c’est de l’UI côté bot.
- **Sécurité** : ne commite jamais de jetons, mots de passe ou secrets. Voir [SECURITY.md](SECURITY.md) pour signaler un problème sensible.
- **Fichiers locaux** : ne versionne pas `.env` (ni `DISCORD_CLIENT_ID` / `DISCORD_GUILD_ID` en dur dans le code). Utilise uniquement [`.env.example`](.env.example) comme modèle sans valeurs réelles. Avant un push, vérifie avec `git status` que `.env` n’apparaît pas en « staged ».

## Signaler un bug ou proposer une fonctionnalité

Utilise les **modèles d’issue** GitHub du dépôt (bug, idée de fonctionnalité) pour donner le maximum de contexte.

## Questions

Pour les questions générales qui ne sont pas des bugs, préfère les **Discussions** GitHub du dépôt lorsqu’elles seront activées, ou une issue étiquetée « question » selon la politique de l’équipe.

Merci de contribuer à un bot pensé pour la communauté Discord au sens large.
