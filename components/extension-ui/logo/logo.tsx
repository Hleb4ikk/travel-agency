import Image from "next/image";
import DefaultLogo from "@/public/logo.png";

export default function Logo({ className }: { className?: string }) {
  return <Image className={className} src={DefaultLogo} alt="logo"></Image>;
}
