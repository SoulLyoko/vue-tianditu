import { Props } from "../types";

export function useInit(props: Props) {
  const { position } = props;
  const instance = new T.Control({ position });
  return instance;
}
