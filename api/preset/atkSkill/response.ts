import {BaseResponse} from '../../base/response';
import {InputDataPreset} from './elements';


export type GetAtkSkillPresetResponse = BaseResponse & {
  preset: InputDataPreset,
}

export type SetAtkSkillPresetResponse = BaseResponse & {
  presetId: string,
}
