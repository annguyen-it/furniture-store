import { AccountRole } from "./account-role";

export interface AccountModel {
  uuid: string;
  username: string;
  role: AccountRole;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
}
