import { cn } from "@/app/utils/cn";
import { BackgroundGradient } from "../background-gradient/background-gradient";

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <BackgroundGradient
      containerClassName={cn(
        "row-span-1 rounded-2xl group/bento transition duration-200 shadow-2xl justify-between flex flex-col space-y-4 cursor-pointer",
        className
      )}
    >
      <div
        className={cn(
          "row-span-1 rounded-2xl group/bento transition duration-200 shadow-2xl p-4 bg-black border border-glass justify-between flex flex-col space-y-4",
          className
        )}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-2xl dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
}
