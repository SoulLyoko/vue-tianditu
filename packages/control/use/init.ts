import { Props } from "../types";

export function useInit(props: Props) {
  let { position } = props;
  const instance = new T.Control({ position });
  return instance;
}
