export type Sequenced = {
  seqId: number,
};

export type OptionalSequenced = {
  seqId?: number,
};

export type EmailSendResult = {
  accepted: string[],
  rejected: string[],
};
