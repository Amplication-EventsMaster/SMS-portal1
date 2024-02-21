import { MessageCreateNestedManyWithoutProvidersInput } from "./MessageCreateNestedManyWithoutProvidersInput";

export type ProviderCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutProvidersInput;
  name?: string | null;
};
