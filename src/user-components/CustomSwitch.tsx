import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FC } from "react";

interface CustomSwitchProps {
  text: string;
}

const CustomSwitch: FC<CustomSwitchProps> = ({ text }) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">{text}</Label>
    </div>
  );
};

export default CustomSwitch;
