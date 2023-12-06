export enum Status {
  WORKING = "Working",
  WORKING_REMOTELY = "Working Remotly",
  ON_VACATION = "On Vacation",
  BUSINESS_TRIP = "Business Trip",
}

export type Employee = {
  _id: string;
  username: string;
  status: string;
  gender: string;
  hashedPassword: string;
};
