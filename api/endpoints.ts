/**
 * Class for API endpoints.
 */
export class ApiEndPoints {
  static ROOT = '/';

  static USER_LOGIN = '/user/login';
  static USER_IS_ADMIN = '/user/is-admin';
  static USER_SHOW_ADS = '/user/show-ads';

  static POST_QUEST_PUBLISH = '/posts/quest/publish';
  static POST_QUEST_LIST = '/posts/quest';
  static POST_QUEST_GET = '/posts/quest/get';
  static POST_QUEST_EDIT = '/posts/quest/edit';
  static POST_QUEST_ID_CHECK = '/posts/quest/id-check';

  static POST_ANALYSIS_PUBLISH_CHARA = '/posts/analysis/publish/chara';
  static POST_ANALYSIS_PUBLISH_DRAGON = '/posts/analysis/publish/dragon';
  static POST_ANALYSIS_LIST = '/posts/analysis';
  static POST_ANALYSIS_GET = '/posts/analysis/get';
  static POST_ANALYSIS_EDIT_CHARA = '/posts/analysis/edit/chara';
  static POST_ANALYSIS_EDIT_DRAGON = '/posts/analysis/edit/dragon';
  static POST_ANALYSIS_ID_CHECK = '/posts/analysis/id-check';

  // These shouldn't be used in any cases besides CI
  static NOT_EXISTS = '/404';
  static ERROR_TEST = '/500';
}
