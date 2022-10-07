# Publikační servis "Nezávislé Publikování"

## Cíl: Umožnit komunitě uživatelů psát vkazy na web.

## Výčet implementovaných stránek
- 1
- 2

## Uživatelské role:
- Nepřihlášení uživatelé.
- Přihlášení uživatelé:
  - Běžní přihlášení uživatelé.
  - Správce fóra (admin)

## Popis:

### Funkce:
- Vzkaz obsahuje titulek, jméno autora, datum přidání a text.
- Vzkazy jsou rozděleny do kategorií.
- Kategorie jsou pevně dané, upravovat je může jenom správce fóra.
- Na hlavní stránce fóra je vypsaných posledních 10 vzkazů a seznam kategorií, každá kategorie obsahuje seznam příslušných vzkazů, seznamy jsou stránkovány.

### Funkce podle rolí:
- Nepřihlášení uživatelé můžou číst všechny vzkazy, registrovat se, případně se přihlásit.
- Běžní přihlášení uživatelé můžou psát vzkazy a můžou mazat a upravovat svoje vlastní vzkazy.
- Správce fóra může psát vzkazy, blokovat nebo povolovat běžné přihlášené uživatele, vytvářet, editovat a mazat kategorie, mazat a editovat všechny příspěvky.