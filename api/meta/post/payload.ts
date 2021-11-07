import {PostType} from '../../post/types';
import {PageMetaPayload} from '../general/payload';


export type PostPageMetaPayload = PageMetaPayload & {
  postIdentifier: number | string,
  postType: PostType,
};
