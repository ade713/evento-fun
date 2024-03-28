type HeadingH1Props = {
  children: React.ReactNode;
};

export function HeadingH1({ children }: HeadingH1Props) {
  return (
    <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
      {children}
    </h1>
  );
}
