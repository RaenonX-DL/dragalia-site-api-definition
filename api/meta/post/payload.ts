import {PostType} from '../../post/types';
import {PageMetaPayload} from '../general/payload';

export type PostPageMetaPayload = PageMetaPayload & {
  postId: number,
  postType: PostType,
}
