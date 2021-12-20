export type PyLocale = 'tw' | 'cn' | 'en' | 'jp';

export type UpdatedIndexSubtask = {
  name: string,
  paths: string[],
};

export type UpdatedIndexTask = {
  name: string,
  subtasks: UpdatedIndexSubtask[],
};

export type UpdatedIndex = {[locale in PyLocale]: UpdatedIndexTask[]};
