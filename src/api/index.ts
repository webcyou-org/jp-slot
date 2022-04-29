import {
    BEING_ELECTED_LIST,
    BEING_ELECTED_WEIGHT_LIST,
    MINOR_ROLE_BEING_ELECTED_LIST,
    MINOR_ROLE_BEING_ELECTED_WEIGHT_LIST,
    weightedRandom
} from '../utils'

export function drawing() {
    return weightedRandom(BEING_ELECTED_LIST, BEING_ELECTED_WEIGHT_LIST);
}

export function minorRoleDrawing() {
    return weightedRandom(MINOR_ROLE_BEING_ELECTED_LIST, MINOR_ROLE_BEING_ELECTED_WEIGHT_LIST);
}
