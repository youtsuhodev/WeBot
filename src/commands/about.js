import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

const REPO_URL = "https://github.com/youtsuhodev/WeBot";

export const data = new SlashCommandBuilder()
  .setName("about")
  .setDescription("WeBot : projet open source, contributions et lien du dépôt.");

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor(0x5865f2)
    .setTitle("WeBot")
    .setURL(REPO_URL)
    .setDescription(
      "Bot **multitool** pensé pour **tous les serveurs Discord** : modération, utilitaires, " +
        "animation — une base qui grandit avec la communauté.",
    )
    .addFields(
      {
        name: "Open source",
        value:
          "WeBot est **100 % open source** ([MIT](https://github.com/youtsuhodev/WeBot/blob/main/LICENSE)). " +
          "Le code est sur GitHub : lecture, fork et **pull requests** les bienvenues.\n\n" +
          "**Tu veux ajouter une fonctionnalité ?** Ouvre une PR : les changements sont **revus et validés** " +
          "par les mainteneurs avant fusion sur la branche principale.",
        inline: false,
      },
      {
        name: "Dépôt",
        value: `[GitHub — ${REPO_URL.replace("https://", "")}](${REPO_URL})`,
        inline: true,
      },
    )
    .setFooter({
      text: "La communauté fait vivre le bot — merci aux contributeurs.",
    });

  await interaction.reply({ embeds: [embed] });
}
