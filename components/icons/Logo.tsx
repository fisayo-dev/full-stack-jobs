import Image from "next/image";
import Link from "next/link";

const Logo = ({ type = "general" }: { type: string }) => {
  return (
    <Link
      href="/"
      className={`text-3xl ${type == "auth" && "flex mx-auto"} lg:text-4xl flex items-center gap-3`}
    >
      <Image
        src="/logos/full-logo.svg"
        alt="Fullstack creators"
        width={120}
        height={120}
      />
      <p className="text-xs px-3 py-1 rounded-full bg-secondary text-white">jobs</p>
    </Link>
  );
};

export default Logo;