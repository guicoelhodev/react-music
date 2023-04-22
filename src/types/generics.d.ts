export type INullableValues<T> = {
  [Key in keyof T]: null | T[Key];
};
