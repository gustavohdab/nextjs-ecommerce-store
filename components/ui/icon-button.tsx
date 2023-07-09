import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
  tooltip?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  tooltip,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
              className
            )}
          >
            {icon}
          </button>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent>
            {tooltip}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default IconButton;
