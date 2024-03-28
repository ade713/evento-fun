import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        alt="EVENTO logo"
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        height={12}
        width={53}
      />
    </Link>
  );
}
