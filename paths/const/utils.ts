import {PostType} from '../../api/post/types';
import {allPaths, DataPath, PagePath, PostPath, UnitPath} from './definitions';


export const isDataPath = (path: string): path is DataPath => {
  return Object.values(DataPath).includes(path as DataPath);
};

export const isUnitPath = (path: string): path is UnitPath => {
  return Object.values(UnitPath).includes(path as UnitPath);
};

export const isPostPath = (path: string): path is PostPath => {
  return Object.values(PostPath).includes(path as PostPath);
};

export const isPagePath = (path: string): path is PagePath => {
  return allPaths.includes(path as PagePath);
};

export const toPostPath: {[type in PostType]: PostPath} = {
  [PostType.ANALYSIS]: PostPath.ANALYSIS,
  [PostType.QUEST]: PostPath.QUEST,
  [PostType.MISC]: PostPath.MISC,
};
