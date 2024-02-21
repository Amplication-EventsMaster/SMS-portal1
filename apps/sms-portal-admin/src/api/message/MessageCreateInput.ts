import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  dateSent?: Date | null;
  provider?: ProviderWhereUniqueInput | null;
  tokenCount?: number | null;
};
