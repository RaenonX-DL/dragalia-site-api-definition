import {CancelUnit} from './common/cancel';
import {MultiLangText} from './common/text';


export type NormalAttackCombo = {
  cancelActions: Array<CancelUnit>,
  cancelToNextSec: number,
  mods: Array<number>,
  odRate: Array<number>,
  crisisMod: Array<number>,
  sp: number,
  utp: number,
}

export type NormalAttackBranchedChain = {
  conditions: Array<number>,
  combos: Array<NormalAttackCombo>,
}

export type NormalAttackChain = {
  chainName: MultiLangText,
  chain: Array<NormalAttackBranchedChain>,
}
