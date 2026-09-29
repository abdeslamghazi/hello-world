const SALUTATIONS = { fr: "Bonjour", ar: "مرحبا" };

export function hello(name, lang = "fr") {
  const mot = SALUTATIONS[lang] ?? SALUTATIONS.fr;
  return `${mot}, ${name} !`;
}
