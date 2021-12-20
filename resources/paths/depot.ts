import {UnitType} from '../../api/other/unit';

/**
 * Class for the data depot paths. Mostly used for obtaining the images.
 */
export class DepotPaths {
  static ROOT = process.env.NEXT_PUBLIC_DEPOT_ROOT;

  /**
   * Get the URL of an image. Use `getEmotionURL` for story images.
   *
   * @param {string} imagePath path of the image originated from the image directory
   * @return {string} URL of the image
   */
  static getImageURL(imagePath: string): string {
    return `${DepotPaths.ROOT}/assets/_gluonresources/resources/images${imagePath}`;
  }

  /**
   * Get the URL of an emotion image. Use `getImageURL` for any other non-story images.
   *
   * @param {string} imagePath path of the emotion image originated from the `emotion` directory
   * @return {string} URL of the emotion image
   */
  static getEmotionURL(imagePath: string): string {
    return `${DepotPaths.ROOT}/assets/_gluonresources/resources/emotion${imagePath}`;
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
   * Get the large dragon icon URL.
   *
   * @param {string} imageName name of the image without the extension
   * @return {string} URL of the large dragon icon
   */
  static getDragonIconURL(imageName: string): string {
    return DepotPaths.getImageURL(`/icon/dragon/l/${imageName}.png`);
  }

  /**
   * Get the large unit icon URL.
   *
   * @param {UnitType} unitType type of the unit
   * @param {string} imageName name of the image without the extension
   * @return {string} URL of the large unit icon
   */
  static getUnitIconURL(unitType: UnitType, imageName: string): string {
    switch (unitType) {
    case UnitType.CHARACTER:
      return DepotPaths.getCharaIconURL(imageName);
    case UnitType.DRAGON:
      return DepotPaths.getDragonIconURL(imageName);
    }
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
   * Get the large dragon illustration URL.
   *
   * @param {string} imageName name of the image without the extension
   * @return {string} URL of the large dragon illustration
   */
  static getDragonImageURL(imageName: string): string {
    return DepotPaths.getImageURL(`/outgame/unitdetail/dragon/${imageName}.png`);
  }

  /**
   * Get the large unit illustration URL.
   *
   * @param {UnitType} unitType type of the unit
   * @param {string} imageName name of the image without the extension
   * @return {string} URL of the large unit illustration
   */
  static getUnitImageURL(unitType: UnitType, imageName: string): string {
    switch (unitType) {
    case UnitType.CHARACTER:
      return DepotPaths.getCharaImageURL(imageName);
    case UnitType.DRAGON:
      return DepotPaths.getDragonImageURL(imageName);
    }
  }

  /**
   * Get the affliction icon image URL.
   *
   * @param {string} statusIcon name of the status icon
   * @return {string} URL of the status icon
   */
  static getAfflictionIconURL(statusIcon: string): string {
    return DepotPaths.getImageURL(`/icon/status/${statusIcon}.png`);
  }

  /**
   * Get the skill icon image URL.
   *
   * @param {string} skillIcon name of the skill icon
   * @return {string} URL of the skill icon
   */
  static getSkillIconURL(skillIcon: string): string {
    return DepotPaths.getImageURL(`/icon/skill/l/${skillIcon}.png`);
  }

  /**
   * Get the ability icon image URL.
   *
   * @param {string} abilityIcon name of the ability icon
   * @return {string} URL of the ability icon
   */
  static getAbilityIconURL(abilityIcon: string): string {
    return DepotPaths.getImageURL(`/icon/ability/l/${abilityIcon}.png`);
  }

  /**
   * Get the story speaker icon image URL.
   *
   * @param {string} imagePath path of the speaker icon rooted from all `emotion` images
   * @return {string} URL of the story speaker icon
   */
  static getStorySpeakerIconURL(imagePath: string): string {
    return DepotPaths.getEmotionURL(`/${imagePath}`);
  }

  /**
   * Get the updated file index catalog URL.
   *
   * @return {string} URL of the updated file index catalog
   */
  static getUpdatedFileIndexCatalogURL(): string {
    return `${DepotPaths.ROOT}/updated/index.json`;
  }

  /**
   * Get the updated file index file URL.
   *
   * @param {string} fileName name of the updated index file
   * @return {string} URL of the story speaker icon
   */
  static getUpdatedFileIndexURL(fileName: string): string {
    return `${DepotPaths.ROOT}/updated/${fileName}.json`;
  }

  /**
   * Get the URL of the file listed in the updated file index.
   *
   * @param {string} path file path listed in the updated file index
   * @return {string} URL of the updated file
   */
  static getURLofUpdatedFile(path: string): string {
    return path.replace(/\.\.\//g, '');
  }
}
