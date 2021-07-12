// NEXT_PUBLIC_* for the use of the frontend
if (!process.env.NEXT_PUBLIC_RESOURCE_ROOT) {
  throw new Error('Specify `NEXT_PUBLIC_RESOURCE_ROOT` as the root of the resources ends w/o slash.');
}
if (!process.env.NEXT_PUBLIC_DEPOT_ROOT) {
  throw new Error('Specify `NEXT_PUBLIC_DEPOT_ROOT` as the root of the depot URL ends w/o slash.');
}

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
  static INFO_CHARA = ResourcePaths.INFO_DIR + '/chara.json';
  static INFO_DRAGON = ResourcePaths.INFO_DIR + '/dragon.json';

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
}


/**
 * Class for the data depot paths. Mostly used for obtaining the images.
 */
export class DepotPaths {
  static ROOT = process.env.NEXT_PUBLIC_DEPOT_ROOT;

  /**
   * Get the URL of an image.
   *
   * @param {string} imagePath path of the image originated from the image directory
   * @return {string} URL of the image
   */
  static getImageURL(imagePath: string): string {
    return `${DepotPaths.ROOT}/assets/_gluonresources/resources/images${imagePath}`;
  }

  /**
   * Get the large character icon URL.
   *
   * @param {string} imageName name of the image without the extension
   * @return {string} URL of the large character icon
   */
  static getCharaIconURL(imageName: string): string {
    return DepotPaths.getImageURL(`/icon/chara/l/${imageName}.png`);
  }

  /**
   * Get the large character illustration URL.
   *
   * @param {string} imageName name of the image without the extension
   * @return {string} URL of the large character illustration
   */
  static getCharaImageURL(imageName: string): string {
    return DepotPaths.getImageURL(`/outgame/unitdetail/chara/${imageName}.png`);
  }

  /**
   * Get the large dragon icon URL.
   *
   * @param {string} imageName name of the image without the extension
   * @return {string} URL of the large dragon icon
   */
  static getDragonIconURL(imageName: string): string {
    return DepotPaths.getImageURL(`/icon/dragon/l/${imageName}.png`);
  }

  /**
   * Get the affliction icon image URL.
   *
   * @param {string} statusIcon name of the status icon
   * @return {string} URL of the status icon image
   */
  static getAfflictionIconURL(statusIcon: string): string {
    return DepotPaths.getImageURL(`/icon/status/${statusIcon}.png`);
  }

  /**
   * Get the skill icon image URL.
   *
   * @param {string} skillIcon name of the skill icon
   * @return {string} URL of the skill icon image
   */
  static getSkillIconURL(skillIcon: string): string {
    return DepotPaths.getImageURL(`/icon/skill/l/${skillIcon}.png`);
  }

  /**
   * Get the ability icon image URL.
   *
   * @param {string} abilityIcon name of the ability icon
   * @return {string} URL of the the ability icon image
   */
  static getAbilityIconURL(abilityIcon: string): string {
    return DepotPaths.getImageURL(`/icon/ability/l/${abilityIcon}.png`);
  }
}
