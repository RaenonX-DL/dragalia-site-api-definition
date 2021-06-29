import {RequestPayloadBase} from '../../base/payload';
import {InputDataPreset} from './elements';


export type GetAtkSkillPresetPayload = RequestPayloadBase & {
  presetId: string,
}

export type SetAtkSkillPresetPayload = RequestPayloadBase & {
  preset: InputDataPreset,
}
