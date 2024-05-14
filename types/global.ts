export enum RouterPaths {
  HOME_PAGE = "DASHBOARD",
}

export interface IAnyObject {
  [key: string]: any;
}

export interface IApiOptions{
  baseUrl?: string;
  authRedirect?: boolean;
}