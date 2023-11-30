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
    <div className={cn("min-h-[calc(100dvh-96px)] md:h-[calc(100dvh-116px)] py-3 md:py-5", className)}>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </div>
  );
};

export default PageSection;
