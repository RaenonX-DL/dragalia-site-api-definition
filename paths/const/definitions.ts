import {DataType} from '../../api/meta/elements/types';


export const PATH_ROOT = '/[lang]';

// Must and only have `id` as the key for data ID
export enum DataPath {
  TIER_KEY_POINT = '/tier/points/[id]',
  GAME_DATAMINE_DETAIL = '/datamine/[id]',
}

export const dataType: {[path in DataPath]: DataType} = {
  [DataPath.TIER_KEY_POINT]: 'tierKeyPoint',
  [DataPath.GAME_DATAMINE_DETAIL]: 'datamine',
};

// Must and only have `id` as the key for story ID
export enum StoryPath {
  UNIT = '/story/unit/[id]',
  MAIN = '/story/main/[id]',
  EVENT = '/story/event/[id]',
}

// Must and only have `id` as the key for unit ID
export enum UnitPath {
  UNIT_INFO = '/info/[id]',
  UNIT_TIER = '/tier/[id]',
  UNIT_TIER_EDIT = '/tier/edit/[id]'
}

// Must and only have `pid` as the key for post identifier
export enum PostPath {
  QUEST = '/quest/[pid]',
  QUEST_EDIT = '/quest/[pid]/edit',
  ANALYSIS = '/analysis/[pid]',
  ANALYSIS_EDIT = '/analysis/[pid]/edit',
  MISC = '/misc/[pid]',
  MISC_EDIT = '/misc/[pid]/edit',
}

export enum GeneralPath {
  // Home
  HOME = '/',
  // Posts
  QUEST_LIST = '/quest',
  QUEST_NEW = '/quest/new',
  MISC_LIST = '/misc',
  MISC_NEW = '/misc/new',
  ANALYSIS_LIST = '/analysis',
  ANALYSIS_NEW_CHARA = '/analysis/new/chara',
  ANALYSIS_NEW_DRAGON = '/analysis/new/dragon',
  TIER_LOOKUP = '/tier',
  TIER_POINTS_INDEX = '/tier/points',
  TIER_POINTS_EDIT = '/tier/points/edit',
  // In-game data
  EX = '/ex',
  INFO_LOOKUP = '/info',
  SKILL_ATK = '/skill/atk',
  SKILL_SUP = '/skill/sup',
  STORY = '/story',
  AMP_LOOKUP = '/amp',
  // Tools
  ROTATION_CALC = '/tools/rotation',
  ENMITY_CALC = '/tools/enmity',
  // Admin
  ADMIN_ANNOUNCEMENT = '/admin/announcement',
  // Others
  UPDATE_UNIT_NAME_REF = '/name',
  GAME_DATAMINE_INDEX = '/datamine',
  USER_SETTINGS = '/user/settings',
  // Not game related
  ABOUT = '/about',
  SPECIAL_THANKS = '/thanks',
}

export enum AuthPath {
  SIGN_IN = '/auth/signin'
}

export const allPaths = ([] as Array<PagePath>).concat(
  ...[DataPath, UnitPath, PostPath, StoryPath, GeneralPath, AuthPath].map(
    (paths) => Object.values(paths),
  ),
);

export type PagePath = DataPath | UnitPath | PostPath | StoryPath | GeneralPath | AuthPath;
