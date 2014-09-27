/* global checkMonster */
/* global crList */
/* global getMultiplier */
/* global getShuffledMonsterList */
/* exported generateRandomEncounter */
"use strict";

function generateRandomEncounter(playerCount, partyLevel, filters) {
	var fudgeFactor = 1.1, // The algorithm is conservative in spending exp, so this tries to get it closer to the actual medium value
		baseExpBudget = playerCount * partyLevel.medium * fudgeFactor,
		encounterTemplate = getEncounterTemplate(),
		multiplier = getMultiplier(playerCount, encounterTemplate.total),
		availableExp = baseExpBudget / multiplier,
		monster,
		monsters = [],
		currentGroup, targetExp;

	while ( encounterTemplate.groups[0] ) {
		// Exp should be shared as equally as possible between groups
		targetExp = availableExp / encounterTemplate.groups.length;
		currentGroup = encounterTemplate.groups.shift();

		// We need to find a monster who, in the correct number, is close to the target exp
		targetExp /= currentGroup;

		monster = getBestMonster(targetExp, filters);

		monsters.push({
			monster: monster,
			qty: currentGroup,
		});

		// Finally, subtract the actual exp value
		availableExp -= currentGroup * monster.cr.exp;
	}

	return monsters;
}

function getEncounterTemplate() {
	var templates = [
			[ 1 ],
			[ 1, 2 ],
			[ 1, 5 ],
			[ 1, 1, 1 ],
			[ 1, 1, 2 ],
			[ 1, 2, 3 ],
			[ 2, 2 ],
			[ 2, 4 ],
			[ 8 ],
		],
		groups = JSON.parse(JSON.stringify(templates[Math.floor(Math.random() * templates.length)])),
		total = groups.reduce(function (a, b) { return a+b; });

	// Silly hack to clone object
	return {
		total: total,
		groups: groups,
	};
}

function getBestMonster(targetExp, filters) {
	var bestBelow = 0,
		bestAbove,
		crIndex,
		currentIndex,
		step = -1,
		monsterList,
		i;

	for ( i = 1; i < crList.length; i++ ) {
		if ( crList[i].exp < targetExp ) {
			bestBelow = i;
		} else {
			bestAbove = i;
			break;
		}
	}

	if ( (targetExp - crList[bestBelow].exp) < (crList[bestAbove].exp - targetExp) ) {
		crIndex = bestBelow;
	} else {
		crIndex = bestAbove;
	}

	currentIndex = crIndex;

	monsterList = getShuffledMonsterList(crList[crIndex].string);

	while ( true ) {
		if ( checkMonster(monsterList[0], filters, { skipCrCheck: true }) ) {
			return monsterList[0];
		} else {
			monsterList.shift();
		}

		// If we run through all the monsters from this level, check a different level
		if ( monsterList.length === 0 ) {
			// there were no monsters found lower than target exp, so we have to start checking higher
			if ( currentIndex === 0 ) {
				// Reset currentIndex
				currentIndex = crIndex;
				// Start looking up instead of down
				step = 1;
			}

			currentIndex += step;
			monsterList = getShuffledMonsterList(crList[currentIndex].string);
		}
	}

}