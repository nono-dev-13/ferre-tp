import { ReactNode, ElementType } from 'react';
('react');
type Variant = 'h1' | 'h2' | 'h3' | 'p';

const variantStyles: Record<Variant, string> = {
  h1: 'text-4xl heading',
  h2: 'text-3xl heading',
  h3: 'text-2xl heading',
  p: 'text-base text',
};

interface Props {
  variant?: Variant;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}
const Text = ({ variant = 'p', as, children, className = '' }: Props) => {
  const Component = as || variant;
  return <Component className={`${variantStyles[variant]} ${className}`}>{children}</Component>;
};

export { Text };
