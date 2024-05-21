import { Button } from "@/components/ui/button";
import { FC } from "react";

interface CustomButtonProps {
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  textContent?: string;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const CustomButton: FC<CustomButtonProps> = ({
  variant,
  textContent = "Button",
  size,
  className = "",
}) => {
  return (
    <Button className={className} variant={variant} size={size}>
      {textContent}{" "}
    </Button>
  );
};
