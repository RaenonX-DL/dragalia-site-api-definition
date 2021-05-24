import {SupportedLanguages} from '../../../api/other/lang';

export type MultiLangText = {
  [lang in SupportedLanguages]: string
}
