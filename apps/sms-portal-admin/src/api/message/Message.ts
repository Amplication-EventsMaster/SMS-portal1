import { Provider } from "../provider/Provider";

export type Message = {
  content: string | null;
  createdAt: Date;
  dateSent: Date | null;
  id: string;
  provider?: Provider | null;
  tokenCount: number | null;
  updatedAt: Date;
};
