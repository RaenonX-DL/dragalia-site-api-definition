import {BaseResponse} from '../../base/response';
import {InputDataPreset} from './elements';


export type AtkSkillPresetResponse = BaseResponse & {
  preset: InputDataPreset,
}
