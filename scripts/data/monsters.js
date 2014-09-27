/* global addMonster */
/* global alignments */
"use strict";

// Custom
addMonster({ name: "CR 0",		cr: "0",	special: true });
addMonster({ name: "CR 1/8",	cr: "1/8",	special: true });
addMonster({ name: "CR 1/4",	cr: "1/4",	special: true });
addMonster({ name: "CR 1/2",	cr: "1/2",	special: true });
addMonster({ name: "CR 1",		cr: "1",	special: true });
addMonster({ name: "CR 2",		cr: "2",	special: true });
addMonster({ name: "CR 3",		cr: "3",	special: true });
addMonster({ name: "CR 4",		cr: "4",	special: true });
addMonster({ name: "CR 5",		cr: "5",	special: true });
addMonster({ name: "CR 6",		cr: "6",	special: true });
addMonster({ name: "CR 7",		cr: "7",	special: true });
addMonster({ name: "CR 8",		cr: "8",	special: true });
addMonster({ name: "CR 9",		cr: "9",	special: true });
addMonster({ name: "CR 10",		cr: "10",	special: true });
addMonster({ name: "CR 11",		cr: "11",	special: true });
addMonster({ name: "CR 12",		cr: "12",	special: true });
addMonster({ name: "CR 13",		cr: "13",	special: true });
addMonster({ name: "CR 14",		cr: "14",	special: true });
addMonster({ name: "CR 15",		cr: "15",	special: true });
addMonster({ name: "CR 16",		cr: "16",	special: true });
addMonster({ name: "CR 17",		cr: "17",	special: true });
addMonster({ name: "CR 18",		cr: "18",	special: true });
addMonster({ name: "CR 19",		cr: "19",	special: true });
addMonster({ name: "CR 20",		cr: "20",	special: true });
addMonster({ name: "CR 21",		cr: "21",	special: true });
addMonster({ name: "CR 22",		cr: "22",	special: true });
addMonster({ name: "CR 23",		cr: "23",	special: true });
addMonster({ name: "CR 24",		cr: "24",	special: true });
addMonster({ name: "CR 25",		cr: "25",	special: true });
addMonster({ name: "CR 26",		cr: "26",	special: true });
addMonster({ name: "CR 27",		cr: "27",	special: true });
addMonster({ name: "CR 28",		cr: "28",	special: true });
addMonster({ name: "CR 29",		cr: "29",	special: true });
addMonster({ name: "CR 30",		cr: "30",	special: true });

// Monster Manual

addMonster({
	name: "Aarakocra",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Aarakocra" ],
	size: "Medium",
	environments: [ "mountain", "planar" ],
	alignment: alignments.ng,
});
addMonster({
	name: "Aboleth",
	cr: "10",
	type: "Aberration",
	size: "Large",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Abominable Yeti",
	section: "Yeti",
	cr: "9",
	type: "Monstrosity",
	environments: [ "arctic", "cave", "mountain" ],
	size: "Huge",
	alignment: alignments.ce,
});
addMonster({
	name: "Acolyte",
	section: "NPCs",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "desert", "dungeon", "forest", "grassland", "mountain", "swamp", "underground", "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Adult Black Dragon",
	section: "Dragons",
	cr: "14",
	type: "Dragon",
	size: "Huge",
	environments: [ "swamp" ],
	alignment: alignments.ce,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Blue Dracolich",
	section: "Dracolich",
	cr: "17",
	type: "Undead",
	size: "Huge",
	environments: [ "desert", "dungeon" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Blue Dragon",
	section: "Dragons",
	cr: "16",
	type: "Dragon",
	size: "Huge",
	environments: [ "desert" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Brass Dragon",
	section: "Dragons",
	cr: "13",
	type: "Dragon",
	size: "Huge",
	environments: [ "cave", "underground" ],
	alignment: alignments.cg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Bronze Dragon",
	section: "Dragons",
	cr: "15",
	type: "Dragon",
	size: "Huge",
	environments: [ "coast" ],
	alignment: alignments.lg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Copper Dragon",
	section: "Dragons",
	cr: "14",
	type: "Dragon",
	size: "Huge",
	environments: [ "cave", "desert", "grassland" ],
	alignment: alignments.cg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Gold Dragon",
	section: "Dragons",
	cr: "17",
	type: "Dragon",
	size: "Huge",
	environments: [ "mountain", "ruins" ],
	alignment: alignments.lg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Green Dragon",
	section: "Dragons",
	cr: "15",
	type: "Dragon",
	size: "Huge",
	environments: [ "forest" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Red Dragon",
	section: "Dragons",
	cr: "17",
	type: "Dragon",
	size: "Huge",
	environments: [ "mountain" ],
	alignment: alignments.ce,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult Silver Dragon",
	section: "Dragons",
	cr: "16",
	type: "Dragon",
	size: "Huge",
	environments: [ "arctic", "mountain" ],
	alignment: alignments.lg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Adult White Dragon",
	section: "Dragons",
	cr: "13",
	type: "Dragon",
	size: "Huge",
	environments: [ "arctic", "cave", "underground" ],
	alignment: alignments.ce,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Air Elemental",
	section: "Elementals",
	cr: "5",
	type: "Elemental",
	size: "Large",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Allosaurus",
	section: "Dinosaurs",
	cr: "2",
	type: "Beast",
	size: "Large",
	environments: [ "coast", "grassland", "swamp" ],
});
addMonster({
	name: "Ancient Black Dragon",
	section: "Dragons",
	cr: "21",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "swamp" ],
	alignment: alignments.ce,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient Blue Dragon",
	section: "Dragons",
	cr: "23",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "desert" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient Brass Dragon",
	section: "Dragons",
	cr: "20",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "cave", "underground" ],
	alignment: alignments.cg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient Bronze Dragon",
	section: "Dragons",
	cr: "22",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "coast" ],
	alignment: alignments.lg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient Copper Dragon",
	section: "Dragons",
	cr: "21",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "cave", "desert", "grassland" ],
	alignment: alignments.cg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient Gold Dragon",
	section: "Dragons",
	cr: "24",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "mountain", "ruins" ],
	alignment: alignments.lg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient Green Dragon",
	section: "Dragons",
	cr: "22",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "forest" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient Red Dragon",
	section: "Dragons",
	cr: "24",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "mountain" ],
	alignment: alignments.ce,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient Silver Dragon",
	section: "Dragons",
	cr: "23",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "arctic", "mountain" ],
	alignment: alignments.lg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Ancient White Dragon",
	section: "Dragons",
	cr: "20",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "arctic", "cave", "underground" ],
	alignment: alignments.ce,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Androsphinx",
	section: "Sphinxes",
	cr: "17",
	type: "Monstrosity",
	size: "Large",
	environments: [ "dungeon", "ruins" ],
	alignment: alignments.ln,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Animated Armor",
	section: "Animated Objects",
	cr: "1",
	type: "Construct",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
});
addMonster({
	name: "Ankheg",
	cr: "2",
	type: "Monstrosity",
	size: "Large",
	environments: [ "coast", "forest", "grassland", "underground" ],
});
addMonster({
	name: "Ankylosaurus",
	section: "Dinosaurs",
	cr: "3",
	type: "Beast",
	size: "Huge",
	environments: [ "grassland" ],
});
addMonster({
	name: "Ape",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	size: "Medium",
	environments: [ "forest" ],
});
addMonster({
	name: "Arcanaloth",
	section: "Yugoloths",
	cr: "12",
	type: "Fiend",
	tags: [ "Yugoloth" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Archmage",
	section: "NPCs",
	cr: "12",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "ruins", "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Assassin",
	section: "NPCs",
	cr: "8",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.non_good,
});
addMonster({
	name: "Awakened Shrub",
	section: "Misc Creatures",
	cr: "0",
	type: "Plant",
	size: "Small",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Awakened Tree",
	section: "Misc Creatures",
	cr: "2",
	type: "Plant",
	size: "Huge",
	environments: [ "forest" ],
});
addMonster({
	name: "Axe Beak",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Large",
	environments: [ "grassland" ],
});
addMonster({
	name: "Azer",
	cr: "2",
	type: "Elemental",
	size: "Medium",
	environments: [ "underground", "planar" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Baboon",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Small",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Badger",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "forest" ],
});
addMonster({
	name: "Balor",
	section: "Demons",
	cr: "19",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Huge",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Bandit",
	section: "NPCs",
	cr: "1/8",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "ruins", "urban" ],
	alignment: alignments.non_lawful,
});
addMonster({
	name: "Bandit Captain",
	section: "NPCs",
	cr: "2",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "ruins", "urban" ],
	alignment: alignments.non_lawful,
});
addMonster({
	name: "Banshee",
	cr: "4",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "forest", "ruins", "swamp" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Barbed Devil",
	section: "Devils",
	cr: "5",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Barlgura",
	section: "Demons",
	cr: "5",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Basilisk",
	cr: "3",
	type: "Monstrosity",
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
});
addMonster({
	name: "Bat",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "cave", "forest", "mountain", "underground", "urban" ],
});
addMonster({
	name: "Bearded Devil",
	section: "Devils",
	cr: "3",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Behir",
	cr: "11",
	type: "Monstrosity",
	size: "Huge",
	environments: [ "cave", "mountain", "underground" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Beholder",
	section: "Beholders",
	cr: "13",
	type: "Aberration",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Beholder (in lair)",
	section: "Beholders",
	cr: "14",
	type: "Aberration",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Beholder Zombie",
	section: "Zombies",
	cr: "5",
	type: "Undead",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Berserker",
	section: "NPCs",
	cr: "2",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "cave", "desert", "forest", "grassland", "mountain", "swamp", "urban" ],
	alignment: alignments.any_chaotic,
});
addMonster({
	name: "Black Bear",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	environments: [ "cave", "forest", "grassland", "mountain" ],
	size: "Medium",
});
addMonster({
	name: "Black Dragon Wyrmling",
	section: "Dragons",
	cr: "2",
	type: "Dragon",
	size: "Medium",
	environments: [ "swamp" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Black Pudding",
	section: "Oozes",
	cr: "4",
	type: "Ooze",
	environments: [ "dungeon" ],
	size: "Large",
});
addMonster({
	name: "Blink Dog",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Fey",
	size: "Medium",
	environments: [ "forest", "grassland" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Blood Hawk",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Small",
	environments: [ "coast", "grassland", "mountain" ],
});
addMonster({
	name: "Blue Dragon Wyrmling",
	section: "Dragons",
	cr: "3",
	type: "Dragon",
	size: "Medium",
	environments: [ "desert" ],
	alignment: alignments.le,
});
addMonster({
	name: "Blue Slaad",
	section: "Slaadi",
	cr: "7",
	type: "Aberration",
	size: "Large",
	environments: [ "planar" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Boar",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	environments: [ "forest", "grassland" ],
	size: "Medium",
});
addMonster({
	name: "Bone Devil",
	section: "Devils",
	cr: "9",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Bone Naga",
	section: "Nagas",
	cr: "4",
	type: "Undead",
	size: "Large",
	environments: [ "dungeon", "ruins" ],
	alignment: alignments.le,
});
addMonster({
	name: "Brass Dragon Wyrmling",
	section: "Dragons",
	cr: "1",
	type: "Dragon",
	size: "Medium",
	environments: [ "cave", "underground" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Bronze Dragon Wyrmling",
	section: "Dragons",
	cr: "2",
	type: "Dragon",
	size: "Medium",
	environments: [ "coast" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Brown Bear",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	environments: [ "cave", "forest" ],
	size: "Large",
});
addMonster({
	name: "Bugbear",
	section: "Bugbears",
	cr: "1",
	type: "Humanoid",
	tags: [ "Goblinoid" ],
	size: "Medium",
	environments: [ "cave", "dungeon", "forest", "mountain", "ruins", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Bugbear Chief",
	section: "Bugbears",
	cr: "3",
	type: "Humanoid",
	tags: [ "Goblinoid" ],
	size: "Medium",
	environments: [ "cave", "dungeon", "forest", "mountain", "ruins", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Bulette",
	cr: "5",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "desert", "grassland", "mountain", "underground" ],
});
addMonster({
	name: "Bullywug",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Bullywug" ],
	size: "Medium",
	environments: [ "coast", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Cambion",
	cr: "5",
	type: "Fiend",
	size: "Medium",
	environments: [ "dungeon", "urban", "planar" ],
	alignment: alignments.any_evil,
});
addMonster({
	name: "Camel",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Large",
	environments: [ "desert" ],
});
addMonster({
	name: "Carrion Crawler",
	cr: "2",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
});
addMonster({
	name: "Cat",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "urban" ],
});
addMonster({
	name: "Centaur",
	cr: "2",
	type: "Monstrosity",
	size: "Large",
	environments: [ "coast", "desert", "grassland" ],
	alignment: alignments.ng,
});
addMonster({
	name: "Chain Devil",
	section: "Devils",
	cr: "8",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Chasme",
	section: "Demons",
	cr: "6",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Chimera",
	cr: "6",
	type: "Monstrosity",
	size: "Large",
	environments: [ "mountain" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Chuul",
	cr: "4",
	type: "Aberration",
	size: "Large",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Clay Golem",
	section: "Golems",
	cr: "9",
	type: "Construct",
	environments: [ "dungeon", "ruins", "urban" ],
	size: "Large",
});
addMonster({
	name: "Cloaker",
	cr: "8",
	type: "Aberration",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Cloud Giant",
	section: "Giants",
	cr: "9",
	type: "Giant",
	size: "Huge",
	environments: [ "mountain", "planar" ],
	alignment: { ng: true, ne: true, text: "neutral good (50%) or neutral evil (50%)" },
});
addMonster({
	name: "Cockatrice",
	cr: "1/2",
	type: "Monstrosity",
	size: "Small",
	environments: [ "forest", "grassland", "swamp" ],
});
addMonster({
	name: "Commoner",
	section: "NPCs",
	cr: "0",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Constrictor Snake",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Large",
	environments: [ "forest", "swamp" ],
});
addMonster({
	name: "Copper Dragon Wyrmling",
	section: "Dragons",
	cr: "1",
	type: "Dragon",
	size: "Medium",
	environments: [ "cave", "desert", "grassland" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Couatl",
	cr: "4",
	type: "Celestial",
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Crab",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	environments: [ "aquatic", "coast" ],
	size: "Tiny",
});
addMonster({
	name: "Crawling Claw",
	cr: "0",
	type: "Undead",
	size: "Tiny",
	environments: [ "dungeon", "ruins", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Crocodile",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	size: "Large",
	environments: [ "aquatic", "coast", "swamp" ],
});
addMonster({
	name: "Cult Fanatic",
	section: "NPCs",
	cr: "2",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "dungeon", "urban" ],
	alignment: alignments.non_good,
});
addMonster({
	name: "Cultist",
	section: "NPCs",
	cr: "1/8",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "dungeon", "urban" ],
	alignment: alignments.non_good,
});
addMonster({
	name: "Cyclops",
	cr: "6",
	type: "Giant",
	size: "Huge",
	environments: [ "cave", "coast", "grassland", "mountain", "ruins", "swamp" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Dao",
	section: "Genies",
	cr: "11",
	type: "Elemental",
	size: "Large",
	environments: [ "cave", "dungeon", "mountain", "underground", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Darkmantle",
	cr: "1/2",
	type: "Monstrosity",
	environments: [ "cave", "underground" ],
	size: "Small",
});
addMonster({
	name: "Death Dog",
	section: "Misc Creatures",
	cr: "1",
	type: "Monstrosity",
	size: "Medium",
	environments: [ "desert", "grassland", "underground" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Death Knight",
	cr: "17",
	type: "Undead",
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Death Slaad",
	section: "Slaadi",
	cr: "10",
	type: "Aberration",
	tags: [ "Shapechanger" ],
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Death Tyrant",
	section: "Beholders",
	cr: "14",
	type: "Undead",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Death Tyrant (in lair)",
	section: "Beholders",
	cr: "15",
	type: "Undead",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Deep Gnome (Svirfneblin)",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "Gnome" ],
	size: "Small",
	environments: [ "cave", "dungeon", "underground", "planar" ],
	alignment: alignments.ng,
});
addMonster({
	name: "Deer",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Medium",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Demilich",
	cr: "18",
	type: "Undead",
	size: "Tiny",
	environments: [ "dungeon" ],
	alignment: alignments.ne,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Demilich (in lair)",
	cr: "20",
	type: "Undead",
	size: "Tiny",
	environments: [ "dungeon" ],
	alignment: alignments.ne,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Demilich (Acererak)",
	cr: "21",
	type: "Undead",
	size: "Tiny",
	environments: [ "dungeon" ],
	alignment: alignments.ne,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Deva",
	section: "Angels",
	cr: "10",
	type: "Celestial",
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Dire Wolf",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	environments: [ "arctic", "cave", "forest", "grassland" ],
});
addMonster({
	name: "Displacer Beast",
	cr: "3",
	type: "Monstrosity",
	size: "Large",
	environments: [ "forest", "grassland" ],
	alignment: alignments.le,
});
addMonster({
	name: "Djinni",
	section: "Genies",
	cr: "11",
	type: "Elemental",
	size: "Large",
	environments: [ "arctic", "coast", "dungeon", "grassland", "planar" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Doppelganger",
	cr: "3",
	type: "Monstrosity",
	tags: [ "Shapechanger" ],
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.n,
});
addMonster({
	name: "Draft Horse",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Large",
	environments: [ "urban" ],
});
addMonster({
	name: "Dragon Turtle",
	cr: "17",
	type: "Dragon",
	size: "Gargantuan",
	environments: [ "aquatic" ],
	alignment: alignments.n,
});
addMonster({
	name: "Dretch",
	section: "Demons",
	cr: "1/4",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Small",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Drider",
	cr: "6",
	type: "Monstrosity",
	size: "Large",
	environments: [ "dungeon", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Drow",
	section: "Elves: Drow",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Elf" ],
	size: "Medium",
	environments: [ "dungeon", "underground", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Drow Elite Warrior",
	section: "Elves: Drow",
	cr: "5",
	type: "Humanoid",
	tags: [ "Elf" ],
	size: "Medium",
	environments: [ "dungeon", "underground", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Drow Mage",
	section: "Elves: Drow",
	cr: "7",
	type: "Humanoid",
	tags: [ "Elf" ],
	size: "Medium",
	environments: [ "dungeon", "underground", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Drow Priestess of Lolth",
	section: "Elves: Drow",
	cr: "8",
	type: "Humanoid",
	tags: [ "Elf" ],
	size: "Medium",
	environments: [ "dungeon", "underground", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Druid",
	section: "NPCs",
	cr: "2",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "forest", "grassland", "mountain", "swamp", "underground" ],
	alignment: alignments.any,
});
addMonster({
	name: "Dryad",
	cr: "1",
	type: "Fey",
	size: "Medium",
	environments: [ "forest" ],
	alignment: alignments.n,
});
addMonster({
	name: "Duergar",
	cr: "1",
	type: "Humanoid",
	tags: [ "Dwarf" ],
	size: "Medium",
	environments: [ "dungeon", "underground" ],
	alignment: alignments.le,
});
addMonster({
	name: "Duodrone",
	section: "Modrons",
	cr: "1/4",
	type: "Construct",
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Dust Mephit",
	section: "Mephits",
	cr: "1/2",
	type: "Elemental",
	size: "Small",
	environments: [ "dungeon", "ruins", "urban", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Eagle",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Small",
	environments: [ "arctic", "grassland", "mountain" ],
});
addMonster({
	name: "Earth Elemental",
	section: "Elementals",
	cr: "5",
	type: "Elemental",
	size: "Large",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Efreeti",
	section: "Genies",
	cr: "11",
	type: "Elemental",
	size: "Large",
	environments: [ "desert", "dungeon", "mountain", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Elephant",
	section: "Misc Creatures",
	cr: "4",
	type: "Beast",
	size: "Huge",
	environments: [ "grassland" ],
});
addMonster({
	name: "Elk",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Large",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Empyrean",
	cr: "23",
	type: "Celestial",
	tags: [ "Titan" ],
	size: "Huge",
	alignment: { cg: true, ne: true, text: "chaotic good (75%) or neutral evil (25%)" },
	environments: [ "planar" ],
	legendary: true,
});
addMonster({
	name: "Erinyes",
	section: "Devils",
	cr: "12",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Ettercap",
	cr: "2",
	type: "Monstrosity",
	size: "Medium",
	environments: [ "cave", "dungeon", "forest", "ruins", "swamp", "underground" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Ettin",
	cr: "4",
	type: "Giant",
	size: "Large",
	environments: [ "cave", "grassland", "mountain", "swamp" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Faerie Dragon (red)",
	cr: "1",
	type: "Dragon",
	size: "Tiny",
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Faerie Dragon (orange)",
	cr: "1",
	type: "Dragon",
	size: "Tiny",
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Faerie Dragon (yellow)",
	cr: "1",
	type: "Dragon",
	size: "Tiny",
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Faerie Dragon (green)",
	cr: "2",
	type: "Dragon",
	size: "Tiny",
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Faerie Dragon (blue)",
	cr: "2",
	type: "Dragon",
	size: "Tiny",
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Faerie Dragon (indigo)",
	cr: "2",
	type: "Dragon",
	size: "Tiny",
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Faerie Dragon (violet)",
	cr: "2",
	type: "Dragon",
	size: "Tiny",
	environments: [ "forest", "grassland", "mountain", "ruins", "swamp" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Fire Elemental",
	section: "Elementals",
	cr: "5",
	type: "Elemental",
	size: "Large",
	environments: [ "cave", "coast", "desert", "dungeon", "grassland", "mountain", "ruins", "underground", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Fire Giant",
	section: "Giants",
	cr: "9",
	type: "Giant",
	size: "Huge",
	environments: [ "mountain", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Fire Snake",
	section: "Salamanders",
	cr: "1",
	type: "Elemental",
	size: "Medium",
	environments: [ "forest", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Flameskull",
	cr: "4",
	type: "Undead",
	size: "Tiny",
	environments: [ "dungeon", "ruins" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Flesh Golem",
	section: "Golems",
	cr: "5",
	type: "Construct",
	size: "Medium",
	environments: [ "dungeon", "ruins" ],
});
addMonster({
	name: "Flumph",
	cr: "1/8",
	type: "Aberration",
	size: "Small",
	environments: [ "dungeon", "underground" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Flying Snake",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Tiny",
	environments: [ "forest" ],
});
addMonster({
	name: "Flying Sword",
	section: "Animated Objects",
	cr: "1/4",
	type: "Construct",
	size: "Small",
	environments: [ "dungeon", "ruins", "urban" ],
});
addMonster({
	name: "Fomorian",
	cr: "8",
	type: "Giant",
	size: "Huge",
	environments: [ "cave", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Frog",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "aquatic", "coast", "forest", "swamp" ],
});
addMonster({
	name: "Frost Giant",
	section: "Giants",
	cr: "8",
	type: "Giant",
	size: "Huge",
	environments: [ "arctic", "mountain", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Galeb Duhr",
	cr: "6",
	type: "Elemental",
	size: "Medium",
	environments: [ "cave", "dungeon", "mountain", "underground", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Gargoyle",
	cr: "2",
	type: "Elemental",
	size: "Medium",
	environments: [ "dungeon", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Gas Spore",
	section: "Fungi",
	cr: "1/2",
	type: "Plant",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
});
addMonster({
	name: "Gelatinous Cube",
	section: "Oozes",
	cr: "2",
	type: "Ooze",
	size: "Large",
	environments: [ "dungeon" ],
});
addMonster({
	name: "Ghast",
	section: "Ghouls",
	cr: "2",
	type: "Undead",
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Ghost",
	cr: "4",
	type: "Undead",
	size: "Medium",
	environments: [ "cave", "dungeon", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Ghoul",
	section: "Ghouls",
	cr: "1",
	type: "Undead",
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Giant Ape",
	section: "Misc Creatures",
	cr: "7",
	type: "Beast",
	size: "Huge",
	environments: [ "forest" ],
});
addMonster({
	name: "Giant Badger",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Medium",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Giant Bat",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Large",
	environments: [ "cave", "dungeon", "forest", "ruins", "swamp", "underground" ],
});
addMonster({
	name: "Giant Boar",
	section: "Misc Creatures",
	cr: "2",
	type: "Beast",
	size: "Large",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Giant Centipede",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Small",
	environments: [ "cave", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
});
addMonster({
	name: "Giant Constrictor Snake",
	section: "Misc Creatures",
	cr: "2",
	type: "Beast",
	size: "Huge",
	environments: [ "forest", "grassland", "swamp" ],
});
addMonster({
	name: "Giant Crab",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Medium",
	environments: [ "aquatic", "coast" ],
});
addMonster({
	name: "Giant Crocodile",
	section: "Misc Creatures",
	cr: "5",
	type: "Beast",
	size: "Huge",
	environments: [ "aquatic", "coast", "swamp" ],
});
addMonster({
	name: "Giant Eagle",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	alignment: alignments.ng,
	environments: [ "grassland", "mountain" ],
});
addMonster({
	name: "Giant Elk",
	section: "Misc Creatures",
	cr: "2",
	type: "Beast",
	size: "Huge",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Giant Fire Beetle",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Small",
	environments: [ "cave", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
});
addMonster({
	name: "Giant Frog",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Medium",
	environments: [ "aquatic", "coast", "forest", "swamp" ],
});
addMonster({
	name: "Giant Goat",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	size: "Large",
	environments: [ "forest", "grassland", "mountain" ],
});
addMonster({
	name: "Giant Hyena",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	environments: [ "coast", "desert", "forest", "grassland" ],
});
addMonster({
	name: "Giant Lizard",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Large",
	environments: [ "cave", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
});
addMonster({
	name: "Giant Octopus",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Giant Owl",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Large",
	environments: [ "forest", "grassland", "urban" ],
	alignment: alignments.n,
});
addMonster({
	name: "Giant Poisonous Snake",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Medium",
	environments: [ "forest", "grassland", "swamp" ],
});
addMonster({
	name: "Giant Rat",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Small",
	environments: [ "cave", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
});
addMonster({
	name: "Giant Scorpion",
	section: "Misc Creatures",
	cr: "3",
	type: "Beast",
	size: "Large",
	environments: [ "cave", "coast", "desert", "dungeon", "grassland", "ruins", "swamp", "underground" ],
});
addMonster({
	name: "Giant Sea Horse",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	size: "Large",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Giant Shark",
	section: "Misc Creatures",
	cr: "5",
	type: "Beast",
	size: "Huge",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Giant Spider",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	environments: [ "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
});
addMonster({
	name: "Giant Toad",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	environments: [ "aquatic", "coast", "forest", "swamp" ],
});
addMonster({
	name: "Giant Vulture",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	environments: [ "desert", "grassland", "ruins" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Giant Wasp",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	size: "Medium",
	environments: [ "forest" ],
});
addMonster({
	name: "Giant Weasel",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Medium",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Giant Wolf Spider",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Medium",
	environments: [ "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
});
addMonster({
	name: "Gibbering Mouther",
	cr: "2",
	type: "Aberration",
	size: "Medium",
	environments: [ "cave", "dungeon", "underground", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Githyanki Knight",
	section: "Gith",
	cr: "8",
	type: "Humanoid",
	tags: [ "Gith" ],
	size: "Medium",
	environments: [ "xswamp", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Githyanki Warrior",
	section: "Gith",
	cr: "3",
	type: "Humanoid",
	tags: [ "Gith" ],
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Githzerai Monk",
	section: "Gith",
	cr: "2",
	type: "Humanoid",
	tags: [ "Gith" ],
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Githzerai Zerth",
	section: "Gith",
	cr: "6",
	type: "Humanoid",
	tags: [ "Gith" ],
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Glabrezu",
	section: "Demons",
	cr: "9",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Gladiator",
	section: "NPCs",
	cr: "5",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Gnoll",
	section: "Gnolls",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "Gnoll" ],
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Gnoll Fang of Yeenoghu",
	section: "Gnolls",
	cr: "4",
	type: "Fiend",
	tags: [ "Gnoll" ],
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Gnoll Pack Lord",
	section: "Gnolls",
	cr: "2",
	type: "Humanoid",
	tags: [ "Gnoll" ],
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Goat",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Medium",
	environments: [ "grassland", "urban" ],
});
addMonster({
	name: "Goblin",
	section: "Goblins",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Goblinoid" ],
	size: "Small",
	environments: [ "cave", "dungeon", "forest", "grassland", "mountain", "ruins", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Goblin Boss",
	section: "Goblins",
	cr: "1",
	type: "Humanoid",
	tags: [ "Goblinoid" ],
	size: "Small",
	environments: [ "cave", "dungeon", "forest", "grassland", "mountain", "ruins", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Gold Dragon Wyrmling",
	section: "Dragons",
	cr: "3",
	type: "Dragon",
	size: "Medium",
	environments: [ "mountain", "ruins" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Gorgon",
	cr: "5",
	type: "Monstrosity",
	size: "Large",
	environments: [ "mountain", "ruins" ],
});
addMonster({
	name: "Goristro",
	section: "Demons",
	cr: "17",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Huge",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Gray Ooze",
	section: "Oozes",
	cr: "1/2",
	type: "Ooze",
	size: "Medium",
	environments: [ "dungeon" ],
});
addMonster({
	name: "Gray Slaad",
	section: "Slaadi",
	cr: "9",
	type: "Aberration",
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Green Dragon Wyrmling",
	section: "Dragons",
	cr: "2",
	type: "Dragon",
	size: "Medium",
	environments: [ "forest" ],
	alignment: alignments.le,
});
addMonster({
	name: "Green Hag",
	section: "Hags",
	cr: "3",
	type: "Fey",
	size: "Medium",
	environments: [ "forest", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Green Slaad",
	section: "Slaadi",
	cr: "8",
	type: "Aberration",
	size: "Large",
	environments: [ "planar" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Grell",
	cr: "3",
	type: "Aberration",
	size: "Medium",
	environments: [ "dungeon", "underground" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Grick",
	section: "Grick",
	cr: "2",
	type: "Monstrosity",
	size: "Medium",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.n,
});
addMonster({
	name: "Grick Alpha",
	section: "Grick",
	cr: "7",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.n,
});
addMonster({
	name: "Griffon",
	cr: "2",
	type: "Monstrosity",
	size: "Large",
	environments: [ "arctic", "coast", "grassland", "mountain" ],
});
addMonster({
	name: "Grimlock",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Grimlock" ],
	size: "Medium",
	alignment: alignments.ne,
	environments: [ "cave", "dungeon", "underground" ],
});
addMonster({
	name: "Guard",
	section: "NPCs",
	cr: "1/8",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Guardian Naga",
	section: "Nagas",
	cr: "10",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "coast", "forest", "ruins" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Gynosphinx",
	section: "Sphinxes",
	cr: "11",
	type: "Monstrosity",
	size: "Large",
	environments: [ "dungeon", "ruins" ],
	alignment: alignments.ln,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Half-Ogre",
	section: "Ogres",
	cr: "1",
	type: "Giant",
	size: "Large",
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Half-Red Dragon Veteran",
	cr: "5",
	type: "Humanoid",
	tags: [ "Human" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "grassland", "mountain", "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Harpy",
	cr: "1",
	type: "Monstrosity",
	size: "Medium",
	environments: [ "coast", "forest", "mountain" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Hawk",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "grassland", "mountain" ],
});
addMonster({
	name: "Hell Hound",
	cr: "3",
	type: "Fiend",
	size: "Medium",
	environments: [ "dungeon", "urban", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Helmed Horror",
	cr: "4",
	type: "Construct",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.n,
});
addMonster({
	name: "Hezrou",
	section: "Demons",
	cr: "8",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Hill Giant",
	section: "Giants",
	cr: "5",
	type: "Giant",
	size: "Huge",
	environments: [ "arctic", "coast", "grassland" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Hippogriff",
	cr: "1",
	type: "Monstrosity",
	size: "Large",
	environments: [ "mountain" ],
});
addMonster({
	name: "Hobgoblin",
	section: "Hobgoblins",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "Goblinoid" ],
	size: "Medium",
	environments: [ "arctic", "coast", "grassland", "mountain", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Hobgoblin Captain",
	section: "Hobgoblins",
	cr: "3",
	type: "Humanoid",
	tags: [ "Goblinoid" ],
	size: "Medium",
	environments: [ "arctic", "coast", "grassland", "mountain", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Hobgoblin Warlord",
	section: "Hobgoblins",
	cr: "6",
	type: "Humanoid",
	tags: [ "Goblinoid" ],
	size: "Medium",
	environments: [ "arctic", "coast", "grassland", "mountain", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Homunculus",
	cr: "0",
	type: "Construct",
	size: "Tiny",
	environments: [ "dungeon", "urban" ],
	alignment: alignments.n,
});
addMonster({
	name: "Hook Horror",
	cr: "3",
	type: "Monstrosity",
	size: "Large",
	environments: [ "dungeon", "underground" ],
	alignment: alignments.n,
});
addMonster({
	name: "Horned Devil",
	section: "Devils",
	cr: "11",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Hunter Shark",
	section: "Misc Creatures",
	cr: "2",
	type: "Beast",
	size: "Large",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Hydra",
	cr: "8",
	type: "Monstrosity",
	size: "Huge",
	environments: [ "aquatic", "cave", "coast", "dungeon", "forest", "mountain", "ruins", "swamp", "underground" ],
});
addMonster({
	name: "Hyena",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Medium",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Ice Devil",
	section: "Devils",
	cr: "14",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Ice Mephit",
	section: "Mephits",
	cr: "1/2",
	type: "Elemental",
	size: "Small",
	environments: [ "arctic", "dungeon", "urban", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Imp",
	section: "Devils",
	cr: "1",
	type: "Fiend",
	tags: [ "Demon", "Shapechanger" ],
	size: "Tiny",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Intellect Devourer",
	cr: "2",
	type: "Aberration",
	size: "Tiny",
	environments: [ "dungeon", "underground" ],
	alignment: alignments.le,
});
addMonster({
	name: "Invisible Stalker",
	cr: "6",
	type: "Elemental",
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Iron Golem",
	section: "Golems",
	cr: "16",
	type: "Construct",
	size: "Large",
	environments: [ "dungeon", "ruins", "urban" ],
});
addMonster({
	name: "Jackal",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Small",
	environments: [ "desert", "grassland" ],
});
addMonster({
	name: "Jackalwere",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "Shapechanger" ],
	size: "Medium",
	environments: [ "desert", "grassland", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Kenku",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Kenku" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "ruins", "urban" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Killer Whale",
	section: "Misc Creatures",
	cr: "3",
	type: "Beast",
	size: "Huge",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Knight",
	section: "NPCs",
	cr: "3",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Kobold",
	section: "Kobolds",
	cr: "1/8",
	type: "Humanoid",
	tags: [ "Kobold" ],
	size: "Small",
	environments: [ "cave", "dungeon", "mountain", "underground" ],
	alignment: alignments.le,
});
addMonster({
	name: "Kraken",
	cr: "23",
	type: "Monstrosity",
	tags: [ "Titan" ],
	size: "Gargantuan",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.ce,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Kuo-toa Archpriest",
	section: "Kuo-toa",
	cr: "6",
	type: "Humanoid",
	tags: [ "Kuo-toa" ],
	size: "Medium",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Kuo-toa Whip",
	section: "Kuo-toa",
	cr: "1",
	type: "Humanoid",
	tags: [ "Kuo-toa" ],
	size: "Medium",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Kuo-toa",
	section: "Kuo-toa",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Kuo-toa" ],
	size: "Medium",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Lamia",
	cr: "4",
	type: "Monstrosity",
	size: "Large",
	environments: [ "desert", "ruins" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Lemure",
	section: "Devils",
	cr: "0",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Lich",
	cr: "21",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.any_evil,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Lich (in lair)",
	cr: "22",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.any_evil,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Lion",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	environments: [ "grassland" ],
});
addMonster({
	name: "Lizard",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "cave", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground" ],
});
addMonster({
	name: "Lizard King/Queen",
	section: "Lizardfolk",
	cr: "4",
	type: "Humanoid",
	tags: [ "Lizardfolk" ],
	size: "Medium",
	environments: [ "coast", "dungeon", "forest", "grassland", "swamp" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Lizardfolk",
	section: "Lizardfolk",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "Lizardfolk" ],
	size: "Medium",
	environments: [ "coast", "dungeon", "forest", "grassland", "swamp" ],
	alignment: alignments.n,
});
addMonster({
	name: "Lizardfolk Shaman",
	section: "Lizardfolk",
	cr: "2",
	type: "Humanoid",
	tags: [ "Lizardfolk" ],
	size: "Medium",
	environments: [ "coast", "dungeon", "forest", "grassland", "swamp" ],
	alignment: alignments.n,
});
addMonster({
	name: "Mage",
	section: "NPCs",
	cr: "6",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Magma Mephit",
	section: "Mephits",
	cr: "1/2",
	type: "Elemental",
	size: "Small",
	environments: [ "cave", "dungeon", "mountain", "urban", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Magmin",
	cr: "1/2",
	type: "Elemental",
	size: "Small",
	environments: [ "dungeon", "ruins", "urban", "planar" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Mammoth",
	section: "Misc Creatures",
	cr: "6",
	type: "Beast",
	size: "Huge",
	environments: [ "arctic" ],
});
addMonster({
	name: "Manes",
	section: "Demons",
	cr: "1/8",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Small",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Manticore",
	cr: "3",
	type: "Monstrosity",
	size: "Large",
	environments: [ "arctic", "cave", "coast", "grassland", "mountain", "ruins" ],
	alignment: alignments.le,
});
addMonster({
	name: "Marid",
	section: "Genies",
	cr: "11",
	type: "Elemental",
	size: "Large",
	environments: [ "aquatic", "coast", "dungeon", "swamp", "planar" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Marilith",
	section: "Demons",
	cr: "16",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Mastiff",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Medium",
	environments: [ "urban" ],
});
addMonster({
	name: "Medusa",
	cr: "6",
	type: "Monstrosity",
	size: "Medium",
	environments: [ "cave", "dungeon", "mountain", "ruins", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Merfolk",
	cr: "1/8",
	type: "Humanoid",
	tags: [ "Merfolk" ],
	size: "Medium",
	environments: [ "aquatic" ],
	alignment: alignments.n,
});
addMonster({
	name: "Merrow",
	cr: "2",
	type: "Monstrosity",
	size: "Large",
	environments: [ "aquatic" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Mezzoloth",
	section: "Yugoloths",
	cr: "5",
	type: "Fiend",
	tags: [ "Yugoloth" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Mimic",
	cr: "2",
	type: "Monstrosity",
	tags: [ "Shapechanger" ],
	size: "Medium",
	environments: [ "dungeon" ],
	alignment: alignments.n,
});
addMonster({
	name: "Mind Flayer Arcanist",
	section: "Mind Flayer",
	cr: "8",
	type: "Aberration",
	size: "Medium",
	alignment: alignments.le,
});
addMonster({
	name: "Mind Flayer",
	section: "Mind Flayer",
	cr: "7",
	type: "Aberration",
	size: "Medium",
	environments: [ "dungeon", "underground", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Minotaur",
	cr: "3",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "dungeon", "ruins", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Minotaur Skeleton",
	section: "Skeletons",
	cr: "2",
	type: "Undead",
	size: "Large",
	environments: [ "dungeon", "underground", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Monodrone",
	section: "Modrons",
	cr: "1/8",
	type: "Construct",
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Mud Mephit",
	section: "Mephits",
	cr: "1/4",
	type: "Elemental",
	size: "Small",
	environments: [ "coast", "dungeon", "forest", "swamp", "urban", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Mule",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Medium",
	environments: [ "urban" ],
});
addMonster({
	name: "Mummy",
	section: "Mummies",
	cr: "3",
	type: "Undead",
	size: "Medium",
	environments: [ "desert", "dungeon" ],
	alignment: alignments.le,
});
addMonster({
	name: "Mummy Lord",
	section: "Mummies",
	cr: "15",
	type: "Undead",
	size: "Medium",
	environments: [ "desert", "dungeon" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Myconid Adult",
	section: "Myconids",
	cr: "1/2",
	type: "Plant",
	size: "Medium",
	environments: [ "underground" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Myconid Sovereign",
	section: "Myconids",
	cr: "2",
	type: "Plant",
	size: "Large",
	environments: [ "underground" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Myconid Sprout",
	section: "Myconids",
	cr: "0",
	type: "Plant",
	size: "Small",
	environments: [ "underground" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Nalfeshnee",
	section: "Demons",
	cr: "13",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Needle Blight",
	section: "Blights",
	cr: "1/4",
	type: "Plant",
	size: "Medium",
	environments: [ "forest", "grassland", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Night Hag",
	section: "Hags",
	cr: "5",
	type: "Fiend",
	size: "Medium",
	environments: [ "underground", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Nightmare",
	cr: "3",
	type: "Fiend",
	size: "Large",
	environments: [ "swamp", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Noble",
	section: "NPCs",
	cr: "1/8",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Nothic",
	cr: "2",
	type: "Aberration",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Nycaloth",
	section: "Yugoloths",
	cr: "9",
	type: "Fiend",
	tags: [ "Yugoloth" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Ochre Jelly",
	section: "Oozes",
	cr: "2",
	type: "Ooze",
	size: "Large",
	environments: [ "dungeon" ],
});
addMonster({
	name: "Octopus",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Small",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Ogre",
	section: "Ogres",
	cr: "2",
	type: "Giant",
	size: "Large",
	environments: [ "dungeon", "forest", "mountain", "swamp" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Ogre Zombie",
	section: "Zombies",
	cr: "2",
	type: "Undead",
	size: "Large",
	environments: [ "dungeon", "forest", "mountain", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Oni",
	section: "Ogres",
	cr: "7",
	type: "Giant",
	size: "Large",
	environments: [ "dungeon", "grassland", "ruins", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Orc",
	section: "Orcs",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "Orc" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Orc Eye of Gruumsh",
	section: "Orcs",
	cr: "2",
	type: "Humanoid",
	tags: [ "Orc" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Orc War Chief",
	section: "Orcs",
	cr: "4",
	type: "Humanoid",
	tags: [ "Orc" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Orog",
	section: "Orcs",
	cr: "2",
	type: "Humanoid",
	tags: [ "Orc" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Otyugh",
	cr: "5",
	type: "Aberration",
	size: "Large",
	environments: [ "cave", "dungeon", "ruins", "swamp", "underground" ],
	alignment: alignments.n,
});
addMonster({
	name: "Owl",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "forest", "urban" ],
});
addMonster({
	name: "Owlbear",
	cr: "3",
	type: "Monstrosity",
	size: "Large",
	environments: [ "forest", "mountain" ],
});
addMonster({
	name: "Panther",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Medium",
	environments: [ "forest" ],
});
addMonster({
	name: "Pegasus",
	cr: "2",
	type: "Celestial",
	size: "Large",
	environments: [ "mountain" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Pentadrone",
	section: "Modrons",
	cr: "2",
	type: "Construct",
	size: "Large",
	environments: [ "planar" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Peryton",
	cr: "2",
	type: "Monstrosity",
	size: "Large",
	environments: [ "mountain" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Phase Spider",
	section: "Misc Creatures",
	cr: "3",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "coast", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
});
addMonster({
	name: "Piercer",
	cr: "1/2",
	type: "Monstrosity",
	size: "Medium",
	environments: [ "cave", "underground" ],
});
addMonster({
	name: "Pit Fiend",
	section: "Devils",
	cr: "20",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Pixie",
	cr: "1/4",
	type: "Fey",
	size: "Tiny",
	environments: [ "coast", "forest", "grassland", "swamp" ],
	alignment: alignments.ng,
});
addMonster({
	name: "Planetar",
	section: "Angels",
	cr: "16",
	type: "Celestial",
	size: "Large",
	environments: [ "planar" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Plesiosaurus",
	section: "Dinosaurs",
	cr: "2",
	type: "Beast",
	size: "Large",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Poisonous Snake",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Tiny",
	environments: [ "desert", "forest", "grassland", "swamp" ],
});
addMonster({
	name: "Polar Bear",
	section: "Misc Creatures",
	cr: "2",
	type: "Beast",
	size: "Large",
	environments: [ "arctic", "cave" ],
});
addMonster({
	name: "Poltergeist",
	section: "Specter",
	cr: "2",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Pony",
	section: "Misc Creatures",
	cr: "1/8",
	type: "Beast",
	size: "Medium",
	environments: [ "grassland" ],
});
addMonster({
	name: "Priest",
	section: "NPCs",
	cr: "2",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Pseudodragon",
	cr: "1/4",
	type: "Dragon",
	size: "Tiny",
	environments: [ "urban" ],
	alignment: alignments.ng,
});
addMonster({
	name: "Pteranodon",
	section: "Dinosaurs",
	cr: "1/4",
	type: "Beast",
	size: "Medium",
	environments: [ "mountain" ],
});
addMonster({
	name: "Purple Worm",
	cr: "15",
	type: "Monstrosity",
	size: "Gargantuan",
	environments: [ "underground" ],
});
addMonster({
	name: "Quadrone",
	section: "Modrons",
	cr: "1",
	type: "Construct",
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Quaggoth",
	section: "Quaggoth",
	cr: "2",
	type: "Humanoid",
	tags: [ "Quaggoth" ],
	size: "Medium",
	environments: [ "dungeon", "urban" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Quaggoth Spore Servant",
	section: "Myconids",
	cr: "1",
	type: "Plant",
	size: "Medium",
	environments: [ "underground" ],
});
addMonster({
	name: "Quaggoth Thonot",
	section: "Quaggoth",
	cr: "3",
	type: "Humanoid",
	tags: [ "Quaggoth" ],
	size: "Medium",
	environments: [ "dungeon", "urban" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Quasit",
	section: "Demons",
	cr: "1",
	type: "Fiend",
	tags: [ "Demon", "Shapechanger" ],
	size: "Tiny",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Quipper",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Rakshasa",
	cr: "13",
	type: "Fiend",
	size: "Medium",
	environments: [ "urban", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Rat",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "arctic", "cave", "coast", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
});
addMonster({
	name: "Raven",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Red Dragon Wyrmling",
	section: "Dragons",
	cr: "4",
	type: "Dragon",
	size: "Medium",
	environments: [ "mountain" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Red Slaad",
	section: "Slaadi",
	cr: "5",
	type: "Aberration",
	size: "Large",
	environments: [ "planar" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Reef Shark",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	size: "Medium",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Remorhaz",
	section: "Remorhazes",
	cr: "11",
	type: "Monstrosity",
	size: "Huge",
	environments: [ "arctic" ],
});
addMonster({
	name: "Revenant",
	cr: "5",
	type: "Undead",
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.n,
});
addMonster({
	name: "Rhinoceros",
	section: "Misc Creatures",
	cr: "2",
	type: "Beast",
	size: "Large",
	environments: [ "grassland" ],
});
addMonster({
	name: "Riding Horse",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Large",
	environments: [ "urban" ],
});
addMonster({
	name: "Roc",
	cr: "11",
	type: "Monstrosity",
	size: "Gargantuan",
	environments: [ "coast", "desert", "mountain" ],
});
addMonster({
	name: "Roper",
	cr: "5",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "underground" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Rug of Smothering",
	section: "Animated Objects",
	cr: "2",
	type: "Construct",
	size: "Large",
	environments: [ "dungeon", "ruins", "urban" ],
});
addMonster({
	name: "Rust Monster",
	cr: "1/2",
	type: "Monstrosity",
	size: "Medium",
	environments: [ "dungeon", "underground" ],
});
addMonster({
	name: "Saber-Toothed Tiger",
	section: "Misc Creatures",
	cr: "2",
	type: "Beast",
	size: "Large",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Sahuagin",
	section: "Sahuagin",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "Sahuagin" ],
	size: "Medium",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.le,
});
addMonster({
	name: "Sahuagin Baron",
	section: "Sahuagin",
	cr: "5",
	type: "Humanoid",
	tags: [ "Sahuagin" ],
	size: "Large",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.le,
});
addMonster({
	name: "Sahuagin Priestess",
	section: "Sahuagin",
	cr: "2",
	type: "Humanoid",
	tags: [ "Sahuagin" ],
	size: "Medium",
	environments: [ "aquatic", "coast" ],
	alignment: alignments.le,
});
addMonster({
	name: "Salamander",
	section: "Salamanders",
	cr: "5",
	type: "Elemental",
	size: "Large",
	environments: [ "forest", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Satyr",
	cr: "1/2",
	type: "Fey",
	size: "Medium",
	environments: [ "forest", "grassland", "urban" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Scarecrow",
	cr: "1",
	type: "Construct",
	size: "Medium",
	environments: [ "grassland", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Scorpion",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "cave", "desert", "grassland", "mountain", "swamp" ],
});
addMonster({
	name: "Scout",
	section: "NPCs",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "swamp" ],
	alignment: alignments.any,
});
addMonster({
	name: "Sea Hag",
	section: "Hags",
	cr: "2",
	type: "Fey",
	size: "Medium",
	environments: [ "aquatic", "coast", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Sea Horse",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Shadow",
	cr: "1/2",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "ruins", "swamp", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Shadow Demon",
	section: "Demons",
	cr: "4",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Shambling Mound",
	cr: "5",
	type: "Plant",
	size: "Large",
	environments: [ "forest", "swamp" ],
});
addMonster({
	name: "Shield Guardian",
	cr: "7",
	type: "Construct",
	size: "Large",
	environments: [ "dungeon", "ruins", "urban" ],
});
addMonster({
	name: "Shrieker",
	section: "Fungi",
	cr: "0",
	type: "Plant",
	size: "Medium",
	environments: [ "cave", "dungeon", "swamp" ],
});
addMonster({
	name: "Silver Dragon Wyrmling",
	section: "Dragons",
	cr: "2",
	type: "Dragon",
	size: "Medium",
	environments: [ "arctic", "mountain" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Skeleton",
	section: "Skeletons",
	cr: "1/4",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Slaad Tadpole",
	section: "Slaadi",
	cr: "1/8",
	type: "Aberration",
	size: "Tiny",
	environments: [ "planar" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Smoke Mephit",
	section: "Mephits",
	cr: "1/4",
	type: "Elemental",
	size: "Small",
	environments: [ "dungeon", "urban", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Solar",
	section: "Angels",
	cr: "21",
	type: "Celestial",
	size: "Large",
	environments: [ "planar" ],
	alignment: alignments.lg,
	legendary: true,
});
addMonster({
	name: "Spectator",
	section: "Beholders",
	cr: "3",
	type: "Aberration",
	size: "Medium",
	environments: [ "cave", "dungeon", "ruins", "underground", "urban" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Specter",
	section: "Specter",
	cr: "1",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Spider",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "cave", "coast", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
});
addMonster({
	name: "Spined Devil",
	section: "Devils",
	cr: "2",
	type: "Fiend",
	tags: [ "Devil" ],
	size: "Small",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.le,
});
addMonster({
	name: "Spirit Naga",
	section: "Nagas",
	cr: "8",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "dungeon", "ruins", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Sprite",
	cr: "1/4",
	type: "Fey",
	size: "Tiny",
	environments: [ "forest", "grassland", "swamp" ],
	alignment: alignments.ng,
});
addMonster({
	name: "Spy",
	section: "NPCs",
	cr: "1",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "forest", "grassland", "mountain", "ruins", "swamp", "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Steam Mephit",
	section: "Mephits",
	cr: "1/4",
	type: "Elemental",
	size: "Small",
	environments: [ "dungeon", "urban", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Stirge",
	cr: "1/8",
	type: "Beast",
	size: "Tiny",
	environments: [ "forest", "swamp" ],
});
addMonster({
	name: "Stone Giant",
	section: "Giants",
	cr: "7",
	type: "Giant",
	size: "Huge",
	environments: [ "cave", "mountain", "underground" ],
	alignment: alignments.n,
});
addMonster({
	name: "Stone Golem",
	section: "Golems",
	cr: "10",
	type: "Construct",
	size: "Large",
	environments: [ "dungeon", "ruins", "urban" ],
});
addMonster({
	name: "Storm Giant",
	section: "Giants",
	cr: "13",
	type: "Giant",
	size: "Huge",
	environments: [ "arctic", "coast", "desert", "mountain", "planar" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Succubus/Incubus",
	cr: "4",
	type: "Fiend",
	tags: [ "Shapechanger" ],
	size: "Medium",
	environments: [ "dungeon", "urban", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Swarm of Bats",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	tags: [ "Swarm" ],
	size: "Medium",
	environments: [ "cave", "dungeon", "forest", "ruins", "swamp", "underground", "urban" ],
});
addMonster({
	name: "Swarm of Insects",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	tags: [ "Swarm" ],
	size: "Medium",
	environments: [ "cave", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
});
addMonster({
	name: "Swarm of Poisonous Snakes",
	section: "Misc Creatures",
	cr: "2",
	type: "Beast",
	tags: [ "Swarm" ],
	size: "Medium",
	environments: [ "desert", "dungeon", "forest", "grassland", "swamp" ],
});
addMonster({
	name: "Swarm of Quippers",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	tags: [ "Swarm" ],
	size: "Medium",
	environments: [ "aquatic" ],
});
addMonster({
	name: "Swarm of Rats",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	tags: [ "Swarm" ],
	size: "Medium",
	environments: [ "cave", "dungeon", "forest", "grassland", "ruins", "swamp", "urban" ],
});
addMonster({
	name: "Swarm of Ravens",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	tags: [ "Swarm" ],
	size: "Medium",
	environments: [ "forest", "grassland", "mountain", "ruins", "urban" ],
});
addMonster({
	name: "Tarrasque",
	cr: "30",
	type: "Monstrosity",
	size: "Gargantuan",
	environments: [ "aquatic", "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban", "planar" ],
	legendary: true,
});
addMonster({
	name: "Thri-kreen",
	cr: "1",
	type: "Humanoid",
	tags: [ "Thri-kreen" ],
	size: "Medium",
	environments: [ "desert", "grassland" ],
	alignment: alignments.cn,
});
addMonster({
	name: "Thug",
	section: "NPCs",
	cr: "1/2",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "forest", "grassland", "urban" ],
	alignment: alignments.non_good,
});
addMonster({
	name: "Tiger",
	section: "Misc Creatures",
	cr: "1",
	type: "Beast",
	size: "Large",
	environments: [ "forest", "grassland" ],
});
addMonster({
	name: "Treant",
	cr: "9",
	type: "Plant",
	size: "Huge",
	environments: [ "forest", "swamp" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Tribal Warrior",
	section: "NPCs",
	cr: "1/8",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "arctic", "cave", "desert", "forest", "grassland", "mountain", "swamp" ],
	alignment: alignments.any,
});
addMonster({
	name: "Triceratops",
	section: "Dinosaurs",
	cr: "5",
	type: "Beast",
	size: "Huge",
	environments: [ "grassland", "mountain" ],
});
addMonster({
	name: "Tridrone",
	section: "Modrons",
	cr: "1/2",
	type: "Construct",
	size: "Medium",
	environments: [ "planar" ],
	alignment: alignments.ln,
});
addMonster({
	name: "Troglodyte",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Troglodyte" ],
	size: "Medium",
	environments: [ "cave", "dungeon", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Troll",
	cr: "5",
	type: "Giant",
	size: "Large",
	environments: [ "cave", "dungeon", "forest", "mountain", "swamp" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Twig Blight",
	section: "Blights",
	cr: "1/8",
	type: "Plant",
	size: "Small",
	environments: [ "forest", "grassland", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Tyrannosaurus Rex",
	section: "Dinosaurs",
	cr: "8",
	type: "Beast",
	size: "Huge",
	environments: [ "grassland" ],
});
addMonster({
	name: "Ultraloth",
	section: "Yugoloths",
	cr: "13",
	type: "Fiend",
	tags: [ "Yugoloth" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Umber Hulk",
	cr: "5",
	type: "Monstrosity",
	size: "Large",
	environments: [ "cave", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Unicorn",
	cr: "5",
	type: "Celestial",
	size: "Large",
	environments: [ "forest", "ruins" ],
	alignment: alignments.lg,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Vampire",
	section: "Vampires",
	cr: "13",
	type: "Undead",
	tags: [ "Shapechanger" ],
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Vampire Spawn",
	section: "Vampires",
	cr: "5",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Vampire Spellcaster",
	section: "Vampires",
	cr: "15",
	type: "Undead",
	tags: [ "Shapechanger" ],
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Vampire Warrior",
	section: "Vampires",
	cr: "15",
	type: "Undead",
	tags: [ "Shapechanger" ],
	size: "Medium",
	environments: [ "dungeon", "ruins", "urban" ],
	alignment: alignments.le,
	legendary: true,
	lair: true,
});
addMonster({
	name: "Veteran",
	section: "NPCs",
	cr: "3",
	type: "Humanoid",
	tags: [ "any" ],
	size: "Medium",
	environments: [ "urban" ],
	alignment: alignments.any,
});
addMonster({
	name: "Vine Blight",
	section: "Blights",
	cr: "1/2",
	type: "Plant",
	size: "Medium",
	environments: [ "forest", "grassland", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Violet Fungus",
	section: "Fungi",
	cr: "1/4",
	type: "Plant",
	size: "Medium",
	environments: [ "cave", "dungeon", "underground" ],
});
addMonster({
	name: "Vrock",
	section: "Demons",
	cr: "6",
	type: "Fiend",
	tags: [ "Demon" ],
	size: "Large",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Vulture",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Medium",
	environments: [ "desert", "grassland", "ruins" ],
});
addMonster({
	name: "Warhorse",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Beast",
	size: "Large",
	environments: [ "grassland", "urban" ],
});
addMonster({
	name: "Warhorse Skeleton",
	section: "Skeletons",
	cr: "1/2",
	type: "Undead",
	size: "Large",
	environments: [ "grassland", "ruins" ],
	alignment: alignments.le,
});
addMonster({
	name: "Water Elemental",
	section: "Elementals",
	cr: "5",
	type: "Elemental",
	size: "Large",
	environments: [ "aquatic", "arctic", "cave", "coast", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Water Weird",
	cr: "3",
	type: "Elemental",
	size: "Large",
	environments: [ "cave", "coast", "forest", "mountain", "swamp", "underground", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Weasel",
	section: "Misc Creatures",
	cr: "0",
	type: "Beast",
	size: "Tiny",
	environments: [ "grassland" ],
});
addMonster({
	name: "Werebear",
	cr: "5",
	type: "Humanoid",
	tags: [ "Human", "Shapechanger" ],
	size: "Medium",
	environments: [ "cave", "forest", "mountain", "urban" ],
	alignment: alignments.ng,
});
addMonster({
	name: "Wereboar",
	cr: "4",
	type: "Humanoid",
	tags: [ "Human", "Shapechanger" ],
	size: "Medium",
	environments: [ "forest", "grassland", "swamp", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Wererat",
	cr: "2",
	type: "Humanoid",
	tags: [ "Human", "Shapechanger" ],
	size: "Medium",
	environments: [ "cave", "dungeon", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.le,
});
addMonster({
	name: "Weretiger",
	cr: "4",
	type: "Humanoid",
	tags: [ "Human", "Shapechanger" ],
	size: "Medium",
	environments: [ "forest", "urban" ],
	alignment: alignments.n,
});
addMonster({
	name: "Werewolf",
	cr: "3",
	type: "Humanoid",
	tags: [ "Human", "Shapechanger" ],
	size: "Medium",
	environments: [ "dungeon", "forest", "grassland", "urban" ],
	alignment: alignments.ce,
});
addMonster({
	name: "White Dragon Wyrmling",
	section: "Dragons",
	cr: "2",
	type: "Dragon",
	size: "Medium",
	environments: [ "arctic", "cave", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Wight",
	cr: "3",
	type: "Undead",
	size: "Medium",
	environments: [ "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Will-o'-Wisp",
	cr: "2",
	type: "Undead",
	size: "Tiny",
	environments: [ "swamp" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Winged Kobold",
	section: "Kobolds",
	cr: "1/4",
	type: "Humanoid",
	tags: [ "Kobold" ],
	size: "Small",
	environments: [ "mountain", "underground" ],
	alignment: alignments.le,
});
addMonster({
	name: "Winter Wolf",
	section: "Misc Creatures",
	cr: "3",
	type: "Monstrosity",
	size: "Large",
	environments: [ "arctic", "cave", "forest", "grassland" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Wolf",
	section: "Misc Creatures",
	cr: "1/4",
	type: "Beast",
	size: "Medium",
	environments: [ "arctic", "cave", "forest", "grassland" ],
});
addMonster({
	name: "Worg",
	section: "Misc Creatures",
	cr: "1/2",
	type: "Monstrosity",
	size: "Large",
	environments: [ "arctic", "cave", "forest", "grassland" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Wraith",
	cr: "5",
	type: "Undead",
	size: "Medium",
	environments: [ "dungeon", "ruins", "swamp", "urban" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Wyvern",
	cr: "6",
	type: "Dragon",
	size: "Large",
	environments: [ "arctic", "coast", "grassland" ],
});
addMonster({
	name: "Xorn",
	cr: "5",
	type: "Elemental",
	size: "Medium",
	environments: [ "dungeon", "underground", "planar" ],
	alignment: alignments.n,
});
addMonster({
	name: "Yeti",
	section: "Yeti",
	cr: "3",
	type: "Monstrosity",
	size: "Large",
	environments: [ "arctic", "cave", "mountain" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Yochlol",
	section: "Demons",
	cr: "10",
	type: "Fiend",
	tags: [ "Demon", "Shapechanger" ],
	size: "Medium",
	environments: [ "dungeon", "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Young Black Dragon",
	section: "Dragons",
	cr: "7",
	type: "Dragon",
	size: "Large",
	environments: [ "swamp" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Young Blue Dragon",
	section: "Dragons",
	cr: "9",
	type: "Dragon",
	size: "Large",
	environments: [ "desert" ],
	alignment: alignments.le,
});
addMonster({
	name: "Young Brass Dragon",
	section: "Dragons",
	cr: "6",
	type: "Dragon",
	size: "Large",
	environments: [ "cave", "underground" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Young Bronze Dragon",
	section: "Dragons",
	cr: "8",
	type: "Dragon",
	size: "Large",
	environments: [ "coast" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Young Copper Dragon",
	section: "Dragons",
	cr: "7",
	type: "Dragon",
	size: "Large",
	environments: [ "cave", "desert", "grassland" ],
	alignment: alignments.cg,
});
addMonster({
	name: "Young Gold Dragon",
	section: "Dragons",
	cr: "10",
	type: "Dragon",
	size: "Large",
	environments: [ "mountain", "ruins" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Young Green Dragon",
	section: "Dragons",
	cr: "8",
	type: "Dragon",
	size: "Large",
	environments: [ "forest" ],
	alignment: alignments.le,
});
addMonster({
	name: "Young Red Dragon",
	section: "Dragons",
	cr: "10",
	type: "Dragon",
	size: "Large",
	environments: [ "mountain" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Young Red Shadow Dragon",
	section: "Dragon, Shadow",
	cr: "13",
	type: "Dragon",
	size: "Large",
	environments: [ "planar" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Young Remorhaz",
	section: "Remorhazes",
	cr: "5",
	type: "Monstrosity",
	size: "Large",
	environments: [ "arctic", "cave" ],
});
addMonster({
	name: "Young Silver Dragon",
	section: "Dragons",
	cr: "9",
	type: "Dragon",
	size: "Large",
	environments: [ "arctic", "mountain" ],
	alignment: alignments.lg,
});
addMonster({
	name: "Young White Dragon",
	section: "Dragons",
	cr: "6",
	type: "Dragon",
	size: "Large",
	environments: [ "arctic", "cave", "underground" ],
	alignment: alignments.ce,
});
addMonster({
	name: "Yuan-ti Abomination",
	section: "Yuan-ti",
	cr: "7",
	type: "Monstrosity",
	tags: [ "Shapechanger", "Yuan-ti" ],
	size: "Large",
	environments: [ "desert", "forest", "mountain", "ruins", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Yuan-ti Malison",
	section: "Yuan-ti",
	cr: "3",
	type: "Monstrosity",
	tags: [ "Shapechanger", "Yuan-ti" ],
	size: "Medium",
	environments: [ "desert", "forest", "mountain", "ruins", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Yuan-ti Pureblood",
	section: "Yuan-ti",
	cr: "1",
	type: "Monstrosity",
	tags: [ "Yuan-ti" ],
	size: "Medium",
	environments: [ "desert", "forest", "mountain", "ruins", "swamp" ],
	alignment: alignments.ne,
});
addMonster({
	name: "Zombie",
	section: "Zombies",
	cr: "1/4",
	type: "Undead",
	size: "Medium",
	environments: [ "aquatic", "arctic", "cave", "coast", "desert", "dungeon", "forest", "grassland", "mountain", "ruins", "swamp", "underground", "urban" ],
	alignment: alignments.ne,
});

// Hoard of the Dragon Queen

addMonster({
	name: "Ambush Drake",
	cr: "1/2",
	type: "Dragon",
	size: "Medium",
	environments: [ "cave", "dungeon", "forest", "mountain", "ruins", "swamp", "urban" ],
});
addMonster({
	name: "Dragonclaw",
	cr: "1",
	type: "Humanoid",
	tags: [ "Human" ],
	size: "Medium",
	alignment: alignments.ne,
	environments: [ "dungeon", "urban" ],
});
addMonster({
	name: "Dragonwing",
	cr: "2",
	type: "Humanoid",
	tags: [ "Human" ],
	size: "Medium",
	alignment: alignments.ne,
	environments: [ "dungeon", "urban" ],
});
addMonster({
	name: "Guard Drake",
	cr: "2",
	type: "Dragon",
	size: "Medium",
	environments: [ "dungeon", "urban" ],
});
