import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  dateSent?: Date | null;
  provider?: ProviderWhereUniqueInput | null;
  tokenCount?: number | null;
};
