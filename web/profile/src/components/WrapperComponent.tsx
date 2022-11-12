import type { ComponentChildren } from 'preact';

interface Props {
  children?: ComponentChildren;
}

export default function WrapperComponent({ children }: Props) {
  return <div style={{ backgroundColor: '#eee' }}>{children}</div>;
}
