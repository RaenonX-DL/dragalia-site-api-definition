import {PageMetaResponse} from '../general/response';

export type PostPageMetaParams = {
  title: string,
  description: string,
}

export type PostPageMetaResponse = PageMetaResponse & {
  params: PostPageMetaParams,
}
