import { ReactNode } from "react";
import "./index.css";

export default function Wrapper(props: { children: ReactNode }) {
  return props.children;
}
