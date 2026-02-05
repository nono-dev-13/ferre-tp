import { ReactNode, ElementType } from 'react';
('react');
type Variant = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';

const variantStyles: Record<Variant, string> = {
  h1: 'text-4xl [font-family:var(--font-heading)]',
  h2: 'text-3xl [font-family:var(--font-heading)]',
  h3: 'text-2xl [font-family:var(--font-heading)]',
  p: 'text-base [font-family:var(--font-sans)]',
  div: 'text-base [font-family:var(--font-sans)]',
  span: 'text-sm [font-family:var(--font-sans)]',
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
