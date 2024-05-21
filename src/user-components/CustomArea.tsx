import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";

interface CustomAreaProps {
  isShowButton: boolean;
  className?: string;
  title?: string;
}

export const CustomArea: FC<CustomAreaProps> = ({
  isShowButton,
  className,
  title,
}) => {
  return (
    <div className="flex flex-col w-full gap-2 items-start">
      {title && <Label>{title}</Label>}
      <Textarea className={className} placeholder="Type your message here." />
      {isShowButton && <Button>Send message</Button>}
    </div>
  );
};
