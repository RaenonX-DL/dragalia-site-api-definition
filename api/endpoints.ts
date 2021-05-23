/**
 * Class for API endpoints.
 */
export class ApiEndPoints {
  static ROOT = '/';

  static PAGE_META_GENERAL = '/meta/general';
  static PAGE_META_POST = '/meta/post';

  static USER_LOGIN = '/user/login';
  static USER_IS_ADMIN = '/user/is-admin';

  static POST_QUEST_PUBLISH = '/posts/quest/publish';
  static POST_QUEST_LIST = '/posts/quest';
  static POST_QUEST_GET = '/posts/quest/get';
  static POST_QUEST_EDIT = '/posts/quest/edit';
  static POST_QUEST_ID_CHECK = '/posts/quest/id-check';

  static POST_ANALYSIS_PUBLISH_CHARA = '/posts/analysis/publish/chara';
  static POST_ANALYSIS_PUBLISH_DRAGON = '/posts/analysis/publish/dragon';
  static POST_ANALYSIS_LOOKUP = '/posts/analysis/lookup';
  static POST_ANALYSIS_GET = '/posts/analysis/get';
  static POST_ANALYSIS_EDIT_CHARA = '/posts/analysis/edit/chara';
  static POST_ANALYSIS_EDIT_DRAGON = '/posts/analysis/edit/dragon';
  static POST_ANALYSIS_ID_CHECK = '/posts/analysis/id-check';

  // These shouldn't be used in any cases besides CI
  static NOT_EXISTS = '/404';
  static ERROR_TEST = '/500';
}
