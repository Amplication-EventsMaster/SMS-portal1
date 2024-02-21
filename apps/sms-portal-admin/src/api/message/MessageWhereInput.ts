import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  dateSent?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: ProviderWhereUniqueInput;
};
