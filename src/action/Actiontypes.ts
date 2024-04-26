export enum UserActionTypes {
  UPDATE_NAME = "UPDATE_NAME",
}
interface updatenNameAction {
  type: UserActionTypes.UPDATE_NAME;
}
export const updateName = (name: string) => ({
  type: UserActionTypes.UPDATE_NAME,
  payload:name
});
export type Action = updatenNameAction;
