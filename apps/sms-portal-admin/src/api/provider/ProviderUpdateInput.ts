import { MessageUpdateManyWithoutProvidersInput } from "./MessageUpdateManyWithoutProvidersInput";

export type ProviderUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutProvidersInput;
  name?: string | null;
};
