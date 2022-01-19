import {SupportedLanguages} from '../../api/other/lang';
import {DataPath, GeneralPath, PostPath, StoryPath, UnitPath} from '../const/definitions';


const generateUrl = (path: string, args: {[key in string]: string | number}): string => {
  Object
    .keys(args)
    .forEach((key) => {
      path = path.replace(`[${key}]`, args[key].toString());
    });

  return path;
};

type PathArgs = {
  lang: SupportedLanguages,
};

export const makeGeneralUrl = (path: GeneralPath, args: PathArgs): string => {
  return generateUrl(`/${args.lang}${path}`, args);
};

// Needs to match the key names used in `DataPath`
type DataPathArgs = PathArgs & {
  id: string,
};

export const makeDataUrl = (path: DataPath, args: DataPathArgs): string => {
  return generateUrl(`/${args.lang}${path}`, args);
};

// Needs to match the key names used in `PostPath`
type PostPathArgs = PathArgs & {
  pid: number,
};

export const makePostUrl = (path: PostPath, args: PostPathArgs): string => {
  return generateUrl(`/${args.lang}${path}`, args);
};

// Needs to match the key names used in `UnitPath`
type UnitPathArgs = PathArgs & {
  id: number,
};

export const makeUnitUrl = (path: UnitPath, args: UnitPathArgs): string => {
  return generateUrl(`/${args.lang}${path}`, args);
};

// Needs to match the key names used in `StoryPath`
type StoryPathArgs = PathArgs & {
  id: number,
};

export const makeStoryUrl = (path: StoryPath, args: StoryPathArgs): string => {
  return generateUrl(`/${args.lang}${path}`, args);
};
