/**
 * Class for API endpoints.
 */
export enum ApiEndPoints {
  ROOT = '/',

  HOME = '/home',

  PAGE_META_GENERAL = '/meta/general',
  PAGE_META_POST = '/meta/post',
  PAGE_META_UNIT = '/meta/unit',
  PAGE_META_DATA = '/meta/data',

  POST_QUEST_PUBLISH = '/posts/quest/publish',
  POST_QUEST_LIST = '/posts/quest',
  POST_QUEST_GET = '/posts/quest/get',
  POST_QUEST_EDIT = '/posts/quest/edit',
  POST_QUEST_ID_CHECK = '/posts/quest/id-check',

  POST_MISC_PUBLISH = '/posts/misc/publish',
  POST_MISC_LIST = '/posts/misc',
  POST_MISC_GET = '/posts/misc/get',
  POST_MISC_EDIT = '/posts/misc/edit',
  POST_MISC_ID_CHECK = '/posts/misc/id-check',

  POST_ANALYSIS_PUBLISH_CHARA = '/posts/analysis/publish/chara',
  POST_ANALYSIS_PUBLISH_DRAGON = '/posts/analysis/publish/dragon',
  POST_ANALYSIS_GET = '/posts/analysis/get',
  POST_ANALYSIS_EDIT_CHARA = '/posts/analysis/edit/chara',
  POST_ANALYSIS_EDIT_DRAGON = '/posts/analysis/edit/dragon',
  POST_ANALYSIS_ID_CHECK = '/posts/analysis/id-check',

  DATA_UNIT_NAME_REF = '/data/unit-name-ref',
  DATA_KEY_POINT = '/data/tier/points',

  INFO_UNIT_LOOKUP = '/info/unit/lookup',
  INFO_UNIT_LOOKUP_LANDING = '/info/unit/landing',

  TIER_NOTES = '/tier/notes',
  TIER_UNIT = '/tier/unit',
  TIER_KEY_POINTS = '/tier/points',

  MANAGE_UNIT_NAME_REF = '/manage/unit/name',
  MANAGE_TIER_NOTE = '/manage/tier/notes',
  MANAGE_TIER_POINTS = '/manage/tier/points',

  PRESET_ATK_SKILL_INPUT = '/preset/atk-skill',

  USER_SUBSCRIPTIONS_UPDATE = '/user/subscriptions/update',
  USER_SUBSCRIPTIONS_ADD = '/user/subscriptions/add',
  USER_SUBSCRIPTIONS_REMOVE = '/user/subscriptions/remove',

  // These shouldn't be used in any cases besides CI
  NOT_EXISTS = '/404',
  ERROR_TEST = '/500',
}
