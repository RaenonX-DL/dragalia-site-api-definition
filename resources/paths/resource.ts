import {SupportedLanguages} from '../../api/other/lang';

/**
 * Class for resource paths.
 */
export class ResourcePaths {
  static ROOT = process.env.NEXT_PUBLIC_RESOURCE_ROOT;

  static ABILITY_DIR = ResourcePaths.ROOT + '/abilities';
  static ABILITY_EX = ResourcePaths.ABILITY_DIR + '/ex.json';

  static ENUMS_DIR = ResourcePaths.ROOT + '/enums';
  static ENUMS_BUFF_PARAM = ResourcePaths.ENUMS_DIR + '/buffParam.json';
  static ENUMS_CONDITIONS = ResourcePaths.ENUMS_DIR + '/conditions.json';
  static ENUMS_CONDITIONS_ALL = ResourcePaths.ENUMS_DIR + '/allCondition.json';
  static ENUMS_ELEMENTS = ResourcePaths.ENUMS_DIR + '/elements.json';
  static ENUMS_STATUS = ResourcePaths.ENUMS_DIR + '/status.json';
  static ENUMS_SKILL = ResourcePaths.ENUMS_DIR + '/skill.json';
  static ENUMS_WEAPON_TYPES = ResourcePaths.ENUMS_DIR + '/weaponType.json';
  static ENUMS_EX_PARAMS = ResourcePaths.ENUMS_DIR + '/exParam.json';

  static SKILLS_DIR = ResourcePaths.ROOT + '/skills';
  static SKILLS_ATK = ResourcePaths.SKILLS_DIR + '/attacking.json';
  static SKILLS_IDENTIFIERS = ResourcePaths.SKILLS_DIR + '/identifiers.json';

  static INFO_DIR = ResourcePaths.ROOT + '/info';
  static INFO_SIMPLE = ResourcePaths.INFO_DIR + '/simple.json';
  static INFO_CHARA = ResourcePaths.INFO_DIR + '/chara.json';
  static INFO_DRAGON = ResourcePaths.INFO_DIR + '/dragon.json';

  static STORY_DIR = ResourcePaths.ROOT + '/story';

  static MISC_DIR = ResourcePaths.ROOT + '/misc';
  static MISC_ELEM_BONUS = ResourcePaths.MISC_DIR + '/elementBonus.json';

  /**
   * Get the URL of the normal attack info of an unit.
   *
   * @param {number} unitId unit ID of the desired combo info
   * @return {string} URL of the combo info
   */
  static getComboURL(unitId: number): string {
    return `${ResourcePaths.ROOT}/atk/combo/${unitId}.json`;
  }

  /**
   * Get the URL of an advanced unit info.
   *
   * @param {number} unitId unit ID of the unit info
   * @return {string} URL of the advanced unit info
   */
  static getAdvancedInfoURL(unitId: number): string {
    return `${ResourcePaths.INFO_DIR}/advanced/${unitId}.json`;
  }

  /**
   * Get the URL of the story data in `lang` of `unitId`.
   *
   * @param {SupportedLanguages} lang language of the story data
   * @param {number} unitId unit ID of the story
   * @return {string} URL of the story data
   */
  static getStoryDataURL(lang: SupportedLanguages, unitId: number): string {
    return `${ResourcePaths.STORY_DIR}/localized/${lang}/${unitId}.json`;
  }
}
