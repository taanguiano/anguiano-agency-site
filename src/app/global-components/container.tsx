import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("block max-w-[120rem] mx-auto", className)}>
      {children}
    </div>
  );
};
