export function NBTtoJSON(nbt) {
    try {
        nbt = nbt.replace(/\n/g, ''); //remove newlines
        nbt = nbt.replace(/([_a-zA-Z]+?): ?(["\d\{\[])(?!\s*,\s*)/g, '"$1": $2'); //add quotes to names
        nbt = nbt.replace(/: ?(\d+?)[sfl]/g, ': $1'); //remove value type identifiers
        nbt = nbt.replace(/\d+?\s*:\s*(["\{\[])/g, '$1'); //remove numbers denoting the position in an array
        nbt = nbt.replace(/": ?1b/g, '": true'); //convert 1b to true
        nbt = nbt.replace(/": ?0b/g, '": false'); //convert 0b to false
        return JSON.parse(nbt);
    } catch (e) {
        return null;
    }
}