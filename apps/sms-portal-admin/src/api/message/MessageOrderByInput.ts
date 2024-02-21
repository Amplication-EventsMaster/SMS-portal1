import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  dateSent?: SortOrder;
  id?: SortOrder;
  providerId?: SortOrder;
  updatedAt?: SortOrder;
};
