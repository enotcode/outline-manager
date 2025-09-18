import { type AccessKey as BaseAccessKey } from "outlinevpn-api";

export interface ExtendedAccessKey extends BaseAccessKey {
  dataLimit?: {
    bytes: number;
  };
}

export type AccessKey = ExtendedAccessKey;
