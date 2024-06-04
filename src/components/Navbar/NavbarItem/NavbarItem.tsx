import Link from "next/link";

type NavbarItemProps = {
  href: string;
  title: string;
  itemClass: string;
  linkClass: string;
};

const NavbarItem = ({ href, title, itemClass, linkClass }: NavbarItemProps) => {
  return (
    <li className={itemClass}>
      <Link href={href}>
        <span className={linkClass}>{title}</span>
      </Link>
    </li>
  );
};

export default NavbarItem;
