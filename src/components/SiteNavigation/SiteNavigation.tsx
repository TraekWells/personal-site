import Link from "next/link";

const SiteNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Writing</Link>
        </li>
        <li>
          <Link href="/design-tips">Design Tips 🔥</Link>
        </li>
        <li>
          <Link href="/journal/impossible-list">Impossible List</Link>
        </li>
        <li>
          <Link href="/now">Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNavigation;
