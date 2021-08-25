import blockReport from './generated/blocks.js';
import registryReport from './generated/registries.js';

// COMMON FUNCTIONS
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
function getRegistryKeys(entriesObject, splitBy) {
    let object = Object.keys(
        entriesObject
    )
    object.forEach((el, i) => {
        object[i] = el.split(splitBy ?? ':')[1];
    })
    return JSON.stringify(
        object,
        undefined,
        4
    )
}
// BLOCK STATES
function getBlockStatesObject() {
    let generateAppliesTo = document.querySelector('#getBlockStatesObject-generateAppliesTo').checked;
    let blockStateList = {};
    let blockWithBlockStateList = {};
    let blockList = [];
    for (let block in blockReport) {
        const blockData = blockReport[block];
        block = block.split(':')[1];
        blockList.push(block);
        let blockProperties = blockData.properties;
        //temporary break
        // if (block == "minecraft:cobblestone") break;
        if (blockProperties) {
            let blockObjectEntry = {};
            for (const property in blockProperties) {
                const stateList = blockProperties[property];
                if (Object.keys(blockStateList).includes(property)) {
                    let typeAlreadyExists = false;
                    blockStateList[property].forEach((valueType, i) => {
                        if ((!generateAppliesTo && valueType.equals(stateList)) || (generateAppliesTo && valueType.possibleValues.equals(stateList))) {
                            if (generateAppliesTo) {
                                blockStateList[property][i].appliesTo.push(block);
                            }
                            typeAlreadyExists = true;
                            blockObjectEntry[property] = i;
                        }
                    });
                    if (!typeAlreadyExists) {
                        if (generateAppliesTo) {
                            blockStateList[property].push(
                                {
                                    possibleValues: stateList,
                                    appliesTo: [
                                        block,
                                    ]
                                }
                            );
                        }
                        else {
                            blockStateList[property].push(stateList);
                        }
                        blockObjectEntry[property] = blockStateList[property].length - 1;
                    }
                }
                else {
                    if (generateAppliesTo) {
                        blockStateList[property] = [
                            {
                                possibleValues: stateList,
                                appliesTo: [
                                    block,
                                ]
                            }
                        ];
                    }
                    else {
                        blockStateList[property] = [stateList];
                    }
                    blockObjectEntry[property] = 0;
                }
            }
            blockWithBlockStateList[block] = blockObjectEntry;
        }
    }
    console.log(JSON.stringify(blockList, undefined, 4));
    console.log(JSON.stringify(blockStateList, undefined, 4));
    console.log(JSON.stringify(blockWithBlockStateList, undefined, 4));
}
document.querySelector('#getBlockStatesObject').addEventListener('click', getBlockStatesObject);

// SOUNDS
function getSoundsNormal() {
    console.log(getRegistryKeys(registryReport["minecraft:sound_event"].entries));
}
function getSoundsFancy() {
    let newObject = {};
    let soundEntries = Object.keys(registryReport["minecraft:sound_event"].entries);
    for (let i = 0; i < soundEntries.length; i++) {
        const sound = soundEntries[i].split(':')[1];
        let soundArr = sound.split('.');
        let curObjectPart = newObject;
        soundArr.forEach((curSoundPart, index) => {
            if (!curObjectPart[curSoundPart]) {
                curObjectPart[curSoundPart] = {};
            }
            if (curObjectPart[curSoundPart]['—'] == 'determineIfThisValueIsTrue' && soundArr[index+1]) {
                curObjectPart[curSoundPart]['—'] = true;
            }
            if (!soundArr[index+1]) {
                curObjectPart[curSoundPart]['—'] = 'determineIfThisValueIsTrue';
            }
            curObjectPart = curObjectPart[curSoundPart];
        })
    }
    for (let i = 0; i < soundEntries.length; i++) {
        const sound = soundEntries[i].split(':')[1];
        let soundArr = sound.split('.');
        let curObjectPart = newObject;
        soundArr.forEach(curSoundPart => {
            if (curObjectPart[curSoundPart]?.['—'] == 'determineIfThisValueIsTrue') {
                curObjectPart[curSoundPart] = true;
            }
            curObjectPart = curObjectPart[curSoundPart];
        })
    }
    console.log(JSON.stringify(newObject, undefined, 4));
}
function getSounds() {
    if (document.querySelector('#getSounds-isFancy').checked) {
        getSoundsFancy();
    }
    else {
        getSoundsNormal();
    }
}
document.querySelector('#getSounds').addEventListener('click', getSounds);

// EFFECTS
function getEffects() {
    console.log(getRegistryKeys(registryReport["minecraft:mob_effect"].entries));
}
document.querySelector('#getEffects').addEventListener('click', getEffects);

// ITEMS
function getItems() {
    console.log(getRegistryKeys(registryReport["minecraft:item"].entries));
}
document.querySelector('#getItems').addEventListener('click', getItems);

// ENTITIES
function getEntities() {
    console.log(getRegistryKeys(registryReport["minecraft:entity_type"].entries));
}
document.querySelector('#getEntities').addEventListener('click', getEntities);

// ATTRIBUTES
function getAttributes() {
    let allAttributes = JSON.parse(getRegistryKeys(registryReport["minecraft:attribute"].entries, '.'));
    let newObject = {};
    allAttributes.forEach(el => {
        newObject[el] = [];
    })
    console.log(JSON.stringify(newObject, undefined, 4));
    console.log(getRegistryKeys(registryReport["minecraft:attribute"].entries));
}
document.querySelector('#getAttributes').addEventListener('click', getAttributes);

// SCOREBOARD CRITERIA
function getScoreboardCriteria() {
    console.log(JSON.stringify({
        air: true,
        armor: true,
        deathCount: true,
        playerKillCount: true,
        totalKillCount: true,
        dummy: true,
        trigger: true,
        food: true,
        health: true,
        level: true,
        xp: true,
        killedByTeam: 'REPLACE ME! - ALL COLORS',
        teamkill: 'REPLACE ME! - ALL COLORS',
        mined: 'REPLACE ME! - ALL ITEMS',
        broken: 'REPLACE ME! - ALL ITEMS',
        crafted: 'REPLACE ME! - ALL ITEMS',
        used: 'REPLACE ME! - ALL ITEMS',
        picked_up: 'REPLACE ME! - ALL ITEMS',
        dropped: 'REPLACE ME! - ALL ITEMS',
        killed: 'REPLACE ME! - ALL ENTITIES',
        killed_by: 'REPLACE ME! - ALL ENTITIES',
        custom: JSON.parse(getRegistryKeys(registryReport["minecraft:custom_stat"].entries)),
    }, undefined, 4));
}
document.querySelector('#getScoreboardCriteria').addEventListener('click', getScoreboardCriteria);

// PAINTING MOTIVES
function getPaintings() {
    console.log(getRegistryKeys(registryReport["minecraft:motive"].entries));
}
document.querySelector('#getPaintings').addEventListener('click', getPaintings);

// ENCHANTMENTS
function getEnchantments() {
    let allAttributes = JSON.parse(getRegistryKeys(registryReport["minecraft:enchantment"].entries));
    let newObject = {};
    allAttributes.forEach(el => {
        newObject[el] = [];
    })
    console.log(JSON.stringify(newObject, undefined, 4));
}
document.querySelector('#getEnchantments').addEventListener('click', getEnchantments);