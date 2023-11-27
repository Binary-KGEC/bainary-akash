import { ReactNode } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const PageSection = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("h-full md:h-[calc(100dvh-116px)]", className)}>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </div>
  );
};

export default PageSection;
