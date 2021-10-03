import {AllPossibleLanguages, SupportedLanguages} from '../../../api/other/lang';


export type MultiLangText = {
  [lang in SupportedLanguages]: string
}

export type MultiLangTextExtended = {
  [lang in AllPossibleLanguages]: string
}
