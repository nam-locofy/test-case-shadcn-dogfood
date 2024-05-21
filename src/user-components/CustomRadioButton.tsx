import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FC } from "react";

interface CustomRadioButton {
  choices?: string[];
}

const CustomRadioButton: FC<CustomRadioButton> = ({ choices }) => {
  return (
    <RadioGroup defaultValue="comfortable">
      {choices?.map((choice, key) => (
        <div key={key} className="flex items-center space-x-2">
          <RadioGroupItem value={choice} id={"r" + key} />
          <Label htmlFor={"r" + key}>{choice}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default CustomRadioButton;
