import {DataType} from '../elements/types';
import {PageMetaPayload} from '../general/payload';


export type DataPageMetaPayload = PageMetaPayload & {
  type: DataType,
  id: string,
};
