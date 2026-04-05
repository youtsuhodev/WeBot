import "dotenv/config";
import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import { dirname, join } from "node:path";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name}. Copie .env.example vers .env.`);
  }
  return value;
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

const commandsPath = join(__dirname, "commands");
for (const file of readdirSync(commandsPath).filter((f) => f.endsWith(".js"))) {
  const mod = await import(`./commands/${file}`);
  if (!mod.data || typeof mod.execute !== "function") {
    console.warn(`[commands] Ignoré (export data + execute requis) : ${file}`);
    continue;
  }
  client.commands.set(mod.data.name, mod);
}

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Prêt — connecté en tant que ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    const payload = { content: "Une erreur est survenue en exécutant cette commande.", ephemeral: true };
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(payload);
    } else {
      await interaction.reply(payload);
    }
  }
});

await client.login(requireEnv("DISCORD_TOKEN"));
