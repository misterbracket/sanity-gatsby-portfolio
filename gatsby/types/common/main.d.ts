/// <reference path="./@block-content-to-react.d.ts" />
/// <reference path="./@convertkit-react.d.ts" />
// <reference path="./interfaces.d.ts" />
// <reference path="./functions.d.ts" />

declare namespace common {
  type MakeRequired<T, K extends keyof T> = Omit<T, K> &
    Required<{ [P in K]: T[P] }>;
}
