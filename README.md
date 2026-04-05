<div align="center">

# WeBot

**Bot Discord multitool, open source, pensé pour tous les serveurs.**

[![Licence MIT](https://img.shields.io/github/license/youtsuhodev/WeBot?style=flat-square)](LICENSE)
[![Dépôt](https://img.shields.io/badge/dépôt-GitHub-181717?style=flat-square&logo=github)](https://github.com/youtsuhodev/WeBot)

</div>

---

## Pourquoi WeBot ?

WeBot vise à être un **outil unique et extensible** pour la modération, les utilitaires et l’animation de communautés sur **n’importe quel serveur Discord**. Le projet est **100 % open source** (licence MIT) : le code est public, auditable et améliorable par tous.

> [!IMPORTANT]
> **Open source, contributions, qualité** — N’importe qui peut proposer des évolutions (issues, discussions, pull requests). Les changements intégrés à la branche principale sont **revus et validés par les mainteneurs**, pour garder un bot fiable et sûr pour l’ensemble des serveurs qui l’utilisent.

> [!TIP]
> Tu veux participer ? Commence par [CONTRIBUTING.md](CONTRIBUTING.md) et le [Code de conduite](CODE_OF_CONDUCT.md).

---

## État du projet

| Élément        | Statut                                      |
| -------------- | ------------------------------------------- |
| Dépôt & communauté | En place (README, contribution, sécurité) |
| Code applicatif    | Base **Node.js** + **Discord.js** (`src/`)  |

Les fichiers de gouvernance (licence, conduite, contribution, signalement de vulnérabilités) sont prêts pour accueillir le développement du bot.

## Démarrage rapide (développement)

> [!NOTE]
> Prérequis : [Node.js](https://nodejs.org/) **20+** et une application bot sur le [portail développeur Discord](https://discord.com/developers/applications).

1. Clone le dépôt et installe les dépendances :

   ```bash
   npm install
   ```

2. Copie la configuration d’exemple et renseigne le jeton et l’ID d’application :

   ```bash
   cp .env.example .env
   ```

   Sous Windows (PowerShell) : `Copy-Item .env.example .env`

3. Enregistre les **commandes slash** (une fois après ajout ou modification de commandes) :

   ```bash
   npm run deploy-commands
   ```

   Pour un déploiement **instantané** sur un seul serveur, définis `DISCORD_GUILD_ID` dans `.env` avant la même commande.

4. Lance le bot :

   ```bash
   npm start
   ```

La commande `/about` rappelle que le projet est open source et comment contribuer.

---

## Liens utiles

| Ressource | Lien |
| --------- | ---- |
| Dépôt     | [github.com/youtsuhodev/WeBot](https://github.com/youtsuhodev/WeBot) |
| Contribuer | [CONTRIBUTING.md](CONTRIBUTING.md) |
| Sécurité | [SECURITY.md](SECURITY.md) |
| Licence  | [LICENSE](LICENSE) |

---

## Licence

Distribué sous licence **MIT**. Voir le fichier [LICENSE](LICENSE).

---

<div align="center">

**Construit avec la communauté — le dépôt vit grâce aux contributeurs.**

</div>
