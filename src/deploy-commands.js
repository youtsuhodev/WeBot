import "dotenv/config";
import { REST, Routes } from "discord.js";
import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name}. Copie .env.example vers .env.`);
  }
  return value;
}

const token = requireEnv("DISCORD_TOKEN");
const clientId = requireEnv("DISCORD_CLIENT_ID");
const guildId = process.env.DISCORD_GUILD_ID?.trim();

const commands = [];
const commandsPath = join(__dirname, "commands");
for (const file of readdirSync(commandsPath).filter((f) => f.endsWith(".js"))) {
  const mod = await import(`./commands/${file}`);
  if (mod.data) {
    commands.push(mod.data.toJSON());
  }
}

const rest = new REST().setToken(token);

if (guildId) {
  await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
  console.log(`Commandes slash enregistrées sur le serveur ${guildId} (${commands.length}).`);
} else {
  await rest.put(Routes.applicationCommands(clientId), { body: commands });
  console.log(
    `Commandes slash enregistrées globalement (${commands.length}). La propagation peut prendre jusqu’à ~1 h.`,
  );
}
