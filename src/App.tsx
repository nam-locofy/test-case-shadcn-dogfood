import "./App.css";
import { Toaster } from "./components/ui/toaster";
import { CustomArea } from "./user-components/CustomArea";
import { CustomButton } from "./user-components/CustomButton";
import CustomRadioButton from "./user-components/CustomRadioButton";
import CustomSwitch from "./user-components/CustomSwitch";
import { ToastDemo } from "./user-components/ToastDemo";

function App() {
  return (
    <>
      <CustomButton
        variant="destructive"
        textContent="Locofy"
        className="border-separate"
      />
      <CustomArea isShowButton title="Type message" />
      <CustomRadioButton choices={["Default", "Comfortable", "Compact"]} />
      <ToastDemo />
      <Toaster />
      <CustomSwitch text={"Custom Switch"} />
    </>
  );
}

export default App;
