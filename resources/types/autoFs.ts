import {CancelUnit} from './common/cancel';
import {MultiLangText} from './common/text';


export type AutoFsCombo = {
  cancelActions: Array<CancelUnit>,
  cancelToNextSec: number | null,
  mods: Array<number>,
  odRate: Array<number>,
  crisisMod: Array<number>,
  sp: number,
  utp: number,
}

export type AutoFsBranchedChain = {
  conditions: Array<number>,
  combos: Array<AutoFsCombo>,
  hasUtp: boolean,
  hasCrisis: boolean,
}

export type AutoFsChain = {
  chainName: MultiLangText,
  chain: Array<AutoFsBranchedChain>,
}

export type AutoFsData = {
  fs: Array<AutoFsChain>,
  auto: Array<AutoFsChain>,
}
