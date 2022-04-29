import { BEING_ELECTED_LIST, BEING_ELECTED_WEIGHT_LIST, weightedRandom } from '../utils'

export function drawing() {
    return weightedRandom(BEING_ELECTED_LIST, BEING_ELECTED_WEIGHT_LIST);
}
