import urlJoin from 'url-join';

import {SupportedLanguages} from '../../api/other/lang';


if (!process.env.NEXT_PUBLIC_RESOURCE_ROOT) {
  throw new Error(
    'Define `NEXT_PUBLIC_RESOURCE_ROOT` as the root URL of the resource repository without ending slash.',
  );
}

/**
 * Class for resource paths.
 */
export class ResourcePaths {
  static ROOT = process.env.NEXT_PUBLIC_RESOURCE_ROOT as string;

  static ABILITY_DIR = urlJoin(ResourcePaths.ROOT, 'abilities');
  static ABILITY_EX = urlJoin(ResourcePaths.ABILITY_DIR, 'ex.json');

  static ENUMS_DIR = urlJoin(ResourcePaths.ROOT, 'enums');
  static ENUMS_BUFF_PARAM = urlJoin(ResourcePaths.ENUMS_DIR, 'buffParam.json');
  static ENUMS_CONDITIONS = urlJoin(ResourcePaths.ENUMS_DIR, 'conditions.json');
  static ENUMS_CONDITIONS_ALL = urlJoin(ResourcePaths.ENUMS_DIR, 'allCondition.json');
  static ENUMS_ELEMENTS = urlJoin(ResourcePaths.ENUMS_DIR, 'elements.json');
  static ENUMS_STATUS = urlJoin(ResourcePaths.ENUMS_DIR, 'status.json');
  static ENUMS_SKILL = urlJoin(ResourcePaths.ENUMS_DIR, 'skill.json');
  static ENUMS_WEAPON_TYPES = urlJoin(ResourcePaths.ENUMS_DIR, 'weaponType.json');
  static ENUMS_EX_PARAMS = urlJoin(ResourcePaths.ENUMS_DIR, 'exParam.json');

  static SKILLS_DIR = urlJoin(ResourcePaths.ROOT, 'skills');
  static SKILLS_ATK = urlJoin(ResourcePaths.SKILLS_DIR, 'attacking.json');
  static SKILLS_IDENTIFIERS = urlJoin(ResourcePaths.SKILLS_DIR, 'identifiers.json');

  static INFO_DIR = urlJoin(ResourcePaths.ROOT, 'info');
  static INFO_SIMPLE = urlJoin(ResourcePaths.INFO_DIR, 'simple.json');
  static INFO_CHARA = urlJoin(ResourcePaths.INFO_DIR, 'chara.json');
  static INFO_DRAGON = urlJoin(ResourcePaths.INFO_DIR, 'dragon.json');

  static STORY_DIR = urlJoin(ResourcePaths.ROOT, 'story');

  static MISC_DIR = urlJoin(ResourcePaths.ROOT, 'misc');
  static MISC_ELEM_BONUS = urlJoin(ResourcePaths.MISC_DIR, 'elementBonus.json');

  /**
   * Get the URL of the normal attack info of an unit.
   *
   * @param {number} unitId unit ID of the desired combo info
   * @return {string} URL of the combo info
   */
  static getComboURL(unitId: number): string {
    return urlJoin(ResourcePaths.ROOT, 'atk', 'combo', `${unitId}.json`);
  }

  /**
   * Get the URL of an advanced unit info.
   *
   * @param {number} unitId unit ID of the unit info
   * @return {string} URL of the advanced unit info
   */
  static getAdvancedInfoURL(unitId: number): string {
    return urlJoin(ResourcePaths.INFO_DIR, 'advanced', `${unitId}.json`);
  }

  /**
   * Get the URL of the story data in `lang` of `unitId`.
   *
   * @param {SupportedLanguages} lang language of the story data
   * @param {number} unitId unit ID of the story
   * @return {string} URL of the story data
   */
  static getStoryDataURL(lang: SupportedLanguages, unitId: number): string {
    return urlJoin(ResourcePaths.STORY_DIR, 'localized', lang, `${unitId}.json`);
  }
}
