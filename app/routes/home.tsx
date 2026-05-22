import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MSPR Kube Front" },
    { name: "MSPR Kube Front", content: "" },
  ];
}

export default function Home() {
  return <Welcome />;
}
