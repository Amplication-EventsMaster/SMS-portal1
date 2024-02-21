import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProviderTitle } from "../provider/ProviderTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <DateTimeInput label="Date sent" source="dateSent" />
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="provider"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
