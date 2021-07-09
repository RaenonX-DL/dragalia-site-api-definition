/**
 * Class for API endpoints.
 */
export enum ApiEndPoints {
  ROOT = '/',

  PAGE_META_GENERAL = '/meta/general',
  PAGE_META_POST = '/meta/post',
  PAGE_META_UNIT = '/meta/unit',

  POST_QUEST_PUBLISH = '/posts/quest/publish',
  POST_QUEST_LIST = '/posts/quest',
  POST_QUEST_GET = '/posts/quest/get',
  POST_QUEST_EDIT = '/posts/quest/edit',
  POST_QUEST_ID_CHECK = '/posts/quest/id-check',

  POST_ANALYSIS_PUBLISH_CHARA = '/posts/analysis/publish/chara',
  POST_ANALYSIS_PUBLISH_DRAGON = '/posts/analysis/publish/dragon',
  POST_ANALYSIS_LOOKUP = '/posts/analysis/lookup',
  POST_ANALYSIS_LOOKUP_LANDING = '/posts/analysis/lookup/landing',
  POST_ANALYSIS_GET = '/posts/analysis/get',
  POST_ANALYSIS_EDIT_CHARA = '/posts/analysis/edit/chara',
  POST_ANALYSIS_EDIT_DRAGON = '/posts/analysis/edit/dragon',
  POST_ANALYSIS_ID_CHECK = '/posts/analysis/id-check',

  DATA_UNIT_NAME_REF = '/data/unit-name-ref',

  PRESET_ATK_SKILL_INPUT = '/preset/atk-skill',

  // These shouldn't be used in any cases besides CI
  NOT_EXISTS = '/404',
  ERROR_TEST = '/500',
}
