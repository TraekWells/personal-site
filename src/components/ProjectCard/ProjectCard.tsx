import Link from "next/link";
import Icon from "../Icon";

export interface ProjectCardProps {
  previewImage: string;
  title: string;
  slug: string;
  summary: string;
}

const ProjectCard = ({
  previewImage,
  title,
  slug,
  summary,
}: ProjectCardProps) => {
  return (
    <article className="project">
      <div className="project__image">
        <img src={previewImage} alt={title} />
      </div>
      <div className="project__content">
        <h3>
          <Link href={slug}>{title}</Link>
        </h3>
        <p>{summary}</p>
        <Link href={slug} className="read-more">
          Project Details <Icon type="arrowRight" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
