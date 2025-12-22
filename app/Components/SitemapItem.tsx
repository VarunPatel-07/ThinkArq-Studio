import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

interface SitemapItemProps {
  label: string;
  href: string;
}

export const SitemapItem = ({ label, href }: SitemapItemProps) => {
  return (
    <Link
      href={href}
      target={"_blank"}
      title={label}
      className="bg-[#191A23] rounded-full  flex items-center justify-end flex-nowrap  w-fit overflow-hidden group px-6 py-4 gap-10">
      <span className="text-white font-medium text-base text-nowrap">{label}</span>
      <HiArrowRight className="-translate-x-1/2 min-w-6 min-h-6 group-hover:-rotate-45 transition-all duration-300 text-white" />
    </Link>
  );
};
