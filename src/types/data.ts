export interface IScans {
  Ban: number;
  CreatedAt: string;
  Flags: number;
  ID: number;
  IdentityID: number;
  UserID: string;
  VIP: number;
  VerdictName: string;
  VerdictResult: number;
  VerdictType: number;
  VerdictValue: string;
}

export interface IPersons {
  Address: string;
  Ban: number;
  BanEndAt: string;
  BanReasonID: number;
  BanStartAt: string;
  BannedBy: string;
  Birthday: string;
  City: string;
  CreatedAt: string;
  ExpiresAt: string;
  EyeColor: string;
  FirstName: string;
  FullName: string;
  Gender: string;
  HairColor: string;
  Height: string;
  ID: number;
  IssuedAt: string;
  LastName: string;
  LastScannedAt: string;
  LicenseNumber: string;
  MiddleName: string;
  OrgID: string;
  Orientation: number;
  PostalCode: string;
  ScansInPeriod: number;
  State: string;
  Street: string;
  UID: string;
  UserID: string;
  VIP: number;
  VIPBy: string;
  VIPEndAt: string;
  VIPStartAt: string;
  Visits: number;
  Weight: string;
}

export interface AuthData {
  password: string;
  userName: string;
}

export interface Cards {
  verdictName: string;
  name: string;
  time: string;
  id: number;
  image: string;
}
