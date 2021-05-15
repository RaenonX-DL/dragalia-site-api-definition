import {PostType} from '../../post/types';
import {PageMetaLangSensitivePayload} from '../general/payload';

export type PostPageMetaPayload = PageMetaLangSensitivePayload & {
  postId: number,
  postType: PostType,
}
