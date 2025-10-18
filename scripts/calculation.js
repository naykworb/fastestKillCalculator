function getDmgMultiplierFromPartialTimeInTicks(partial, full) {
    let dmgMult = 0.2 + ((partial + 0.5) / full) ** 2 * 0.8;
    return dmgMult;
}

function getDmgFromPartialTimeInTicks(partial, full, fullDmg) {
    return getDmgMultiplierFromPartialTimeInTicks(partial, full) * fullDmg;
}

function getTimeInTicksForPartialHit(dmg, fullDmg, fullTime) {
    let multNeeded = dmg / fullDmg;
    let partialTime = fullTime * Math.sqrt((multNeeded - 0.2)/0.8) - 0.5;
    return partialTime;
}

function getRecoveryTicksFromAttackSpeed(attackSpeed) {
    let recoveryTicks = 20 / attackSpeed;
    return recoveryTicks;
}

function canCrit(partial, full) {
    return partial == full;
}

function criticalHit(fullDmg) {
    return fullDmg * 1.5;
}


// find highest dps for critical hits, typically swords
// find the amount of time it will take to only use that weapon
// see if you add in a crit from another weapon if it makes it faster
// see if you add in a full hit from another weapon if it makes it faster
// see if you add in a partial hit from another weapon if it makes it faster
// see if you add a partial hit from the weapon if it makes it faster
// combine all of the times with the new hits and pick the lowest one

function getBestNextHitCombo(currentHealth, weapons) {
    // made up of attack objects that contain a weapon, type, dmg, and time
    let dmgCombo = [];
    let timeForHit = 0;
    let dmgForHit = 0;    

    for(let i = 0; i < weapons.length; i++) {
        let weapon = weapons[i];
        let attackSpeed = weapon["attackSpeed"];
        let dmg = weapon["damage"];

        let recovery = getRecoveryTicksFromAttackSpeed(attackSpeed);
    
        if(currentHealth >= criticalHit(dmg)) {
            if(criticalHit(dmg) >= dmgForHit || recovery <= timeForHit) {

            }
        }else if(currentHealth > dmg) {
            
        }else {
            // find partial hit
        }
    }
}

// now for the brunt of the code to find out what combination deals the quickest death

function quickestKillMobIncludingFirstHit(mob, weapons) {
    health = getHealth(mob);

    let bestFirstHit = 0;
    let bestFirstHitIndex = 0;
    for(let i = 0; i < weapons.length; i++) {
        if(weapons[i][])
    }
}

function quickestKillMobNotIncludingFirstHit(mob, weapons) {

}