interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full max-w-[600px] flex flex-col">{children}</div>;
};

export default Container;
