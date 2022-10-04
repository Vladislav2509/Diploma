export type APIError = { message: string; code: number };

export type APIData<DataType = any> = {
  status: string;
  error?: APIError;
  data?: DataType;
};

export enum APIstatus {
  IDLE,
  PENDING,
  REJECTED,
  FULFILLED,
}

export type Response = { data: Response[] }[];
