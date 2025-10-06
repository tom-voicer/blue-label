import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page at the root, we need to make sure
// the root layout is not rendered. This is a special case for next-intl.
export default function RootLayout({ children }: Props) {
  return children;
}
