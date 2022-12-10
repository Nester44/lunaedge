export interface IState {
  step: number;
  email: string;
  name: string;
  password: string;
  shopToken: string;
  googleToken: string;
}

export enum Inputs {
  email,
  name,
  password,
  shopToken,
  googleToken,
}