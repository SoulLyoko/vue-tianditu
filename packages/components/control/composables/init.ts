import type { ControlProps } from ".";

export function useInit(props: ControlProps) {
  const { position } = props;
  const instance = new T.Control({ position });
  return instance;
}
