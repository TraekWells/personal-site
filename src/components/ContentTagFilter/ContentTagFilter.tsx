import Link from "next/link";

type ContentTagFilterProps = {
  tags: string[];
};

const ContentTagFilter = ({ tags }: ContentTagFilterProps) => {
  return (
    <div className="contentTagFilter">
      <h3>Filter By Tag</h3>
      {tags.map((tag) => {
        return (
          <ul key={tag}>
            <li>
              <Link href="#">{tag}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ContentTagFilter;
