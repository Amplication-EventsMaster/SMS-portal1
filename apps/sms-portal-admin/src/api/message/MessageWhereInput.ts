import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  dateSent?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: ProviderWhereUniqueInput;
  tokenCount?: IntNullableFilter;
};
