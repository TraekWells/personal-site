import styles from "./Icon.module.scss";

export type IconOptions =
  | "twitter"
  | "arrowRight"
  | "instagram"
  | "dribbble"
  | "github"
  | "bluesky";

type IconProps = {
  type: IconOptions;
};

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

const Icon = ({ type }: IconProps) => {
  switch (type) {
    case "twitter":
      return (
        <IconWrapper>
          <g>
            <path d="M2.39 3.43l13 18c.14.19.36.31.6.31h5c.61 0 .96-.7.6-1.19l-13-18c-.15-.2-.37-.32-.61-.32h-5c-.62 0-.97.69-.61 1.18Zm1.21-.88l-.61 1.18h5l-.61-.32 13 18 .6-1.19h-5l.6.31 -13-18Z" />
            <path d="M3.53 21.53l7.55-7.55c.29-.3.29-.77 0-1.07 -.3-.3-.77-.3-1.07 0l-7.55 7.55c-.3.29-.3.76 0 1.06 .29.29.76.29 1.06 0Z" />
            <path d="M13.98 11.08l7.55-7.55c.29-.3.29-.77-.001-1.07 -.3-.3-.77-.3-1.07 0l-7.55 7.55c-.3.29-.3.76 0 1.06 .29.29.76.29 1.06 0Z" />
          </g>
          <title>Twitter</title>
        </IconWrapper>
      );
    case "instagram":
      return (
        <IconWrapper>
          <g>
            <path d="M7.496 3.75h9c2.06 0 3.74 1.67 3.74 3.74v9c0 2.06-1.68 3.74-3.75 3.74H7.47c-2.07 0-3.75-1.68-3.75-3.75V7.47c0-2.07 1.67-3.75 3.74-3.75Zm0-1.5c-2.9 0-5.246 2.34-5.246 5.246V16.5c0 2.89 2.34 5.24 5.246 5.24H16.5c2.89 0 5.24-2.35 5.24-5.25v-9.01c0-2.9-2.35-5.246-5.25-5.246h-9.01Z" />
            <path d="M16.94 5.96c-.6 0-1.09.48-1.09 1.08 0 .6.48 1.08 1.08 1.08 .6 0 1.08-.49 1.08-1.09 0-.6-.49-1.088-1.09-1.088 -.42 0-.75.33-.75.75 0 .41.33.75.75.75 -.23 0-.42-.19-.42-.42 -.01-.23.18-.41.41-.41 .22 0 .41.18.41.41 0 .22-.19.41-.41.41 .41-.01.74-.34.74-.76 -.01-.42-.34-.75-.76-.75Z" />
            <path d="M14.01 9.98c1.11 1.11 1.11 2.91 0 4.03 -1.12 1.11-2.92 1.11-4.04 0 -1.12-1.12-1.12-2.92-.001-4.04 1.11-1.12 2.91-1.12 4.03-.001 .29.29.76.29 1.06-.001 .29-.3.29-.77-.001-1.07 -1.7-1.7-4.46-1.7-6.16 0 -1.7 1.69-1.7 4.45 0 6.15 1.69 1.69 4.45 1.69 6.15 0 1.69-1.7 1.69-4.46 0-6.16 -.3-.3-.77-.3-1.07 0 -.3.29-.3.76 0 1.06Z" />
          </g>
          <path fill="none" d="M0 0h24v24H0Z" transform="rotate(-90 12 12)" />
          <title>Instagram</title>
        </IconWrapper>
      );
    case "dribbble":
      return (
        <IconWrapper>
          <g>
            <path d="M8.45 3.92c3.39 4.92 5.72 10.43 6.9 16.23 .08.4.47.66.88.58 .4-.09.66-.48.58-.89 -1.22-6-3.64-11.71-7.14-16.8 -.24-.35-.71-.43-1.05-.2 -.35.23-.43.7-.2 1.04Z" />
            <path d="M21.13 12.06c-6.09-1.34-12.34.98-16.1 5.83 -.26.32-.2.79.13 1.05 .32.25.79.19 1.05-.14 3.4-4.4 9.07-6.5 14.58-5.29 .4.08.8-.17.89-.58 .08-.41-.17-.81-.58-.9Z" />
            <path d="M2.97 11.78c5.84.62 11.68-1.39 15.91-5.62 .29-.3.29-.77 0-1.07 -.3-.3-.77-.3-1.07-.01 -3.92 3.9-9.3 5.75-14.7 5.18 -.42-.05-.79.25-.83.66 -.05.41.25.78.66.82Z" />
            <path d="M17.83 6.16c3.22 3.22 3.22 8.44 0 11.66 -3.23 3.22-8.45 3.22-11.67 0 -3.23-3.23-3.23-8.45-.01-11.67 3.22-3.23 8.44-3.23 11.66-.01 .29.29.76.29 1.06 0 .29-.3.29-.77 0-1.07 -3.81-3.81-9.99-3.81-13.79-.01 -3.81 3.8-3.81 9.98 0 13.78 3.8 3.8 9.98 3.8 13.78 0 3.8-3.81 3.8-9.99 0-13.79 -.3-.3-.77-.3-1.07-.001 -.3.29-.3.76 0 1.06Z" />
          </g>
          <path fill="none" fillRule="evenodd" d="M0 0h24v24H0Z" />]
          <title>Dribbble</title>
        </IconWrapper>
      );
    case "github":
      return (
        <IconWrapper>
          <g>
            <path d="M9.13 14.69c-2.56-.28-4.47-2.48-4.39-5.05 .01-.94.34-1.82.94-2.52 .11-.14.17-.3.17-.47l.07-2.69c0-.14.11-.25.25-.25 .02 0 .05 0 .07.01l2.87 1.04c.14.05.29.05.43.02 1.58-.4 3.23-.4 4.81 0 .14.03.29.02.43-.03l2.87-1.04c.12-.05.27.02.32.15 0 .02.01.05.01.07l.07 2.67c0 .17.06.33.17.46 .59.69.92 1.58.94 2.5 .08 2.58-1.83 4.78-4.39 5.05 -.42.04-.72.41-.67.82 .04.41.41.71.82.66 3.33-.36 5.83-3.23 5.72-6.59 -.02-1.26-.48-2.48-1.31-3.44l.17.46 -.08-2.68c-.01-.19-.04-.38-.11-.55 -.33-.91-1.34-1.38-2.25-1.06l-2.88 1.03 .43-.03c-1.82-.46-3.73-.46-5.55-.01l.43.02 -2.88-1.05c-.18-.07-.37-.1-.55-.11 -.97-.03-1.78.73-1.8 1.7l-.08 2.68 .17-.47c-.83.96-1.29 2.18-1.31 3.45 -.12 3.34 2.38 6.21 5.72 6.56 .41.04.78-.26.82-.67 .04-.42-.26-.79-.67-.83Z" />
            <path d="M8.8 21v-2.14c.02-1.07.33-2.12.89-3.04 .21-.36.1-.82-.26-1.04 -.36-.22-.82-.11-1.04.25 -.7 1.14-1.08 2.45-1.11 3.79l-.01 2.15c0 .41.33.75.75.75 .41 0 .75-.34.75-.75Z" />
            <path d="M14.3 15.83c.59.97.91 2.08.94 3.22l-.01 1.94c0 .41.33.75.75.75 .41 0 .75-.34.75-.75v-1.96c-.04-1.42-.44-2.79-1.17-3.99 -.22-.36-.68-.47-1.04-.26 -.36.21-.47.67-.26 1.03Z" />
            <path d="M2.25 16.56c0 2.07 1.67 3.75 3.75 3.75h2.05c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75H5.99c-1.25 0-2.25-1.01-2.25-2.25 0-.42-.34-.75-.75-.75 -.42 0-.75.33-.75.75Z" />
          </g>
          <title>GitHub</title>
        </IconWrapper>
      );
    case "arrowRight":
      return (
        <IconWrapper>
          <path fill="none" d="M0 0h24v24H0Z" />
          <g>
            <path d="M4.48 12.73h14.99c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75H4.48c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Z" />
            <path d="M12.95 6.51l6.03 6.01v-1.07l-6.04 6.01c-.3.29-.3.76-.01 1.06 .29.29.76.29 1.06 0l6.03-6.02c.29-.3.29-.77 0-1.07l-6.04-6.02c-.3-.3-.77-.3-1.07 0 -.3.29-.3.76 0 1.06Z" />
          </g>
        </IconWrapper>
      );
    case "bluesky":
      return (
        <IconWrapper>
          <path
            d="M12 8.56675C12 8.56675 7.87619 0.22183 2.70999 1.05903C-0.906331 1.64506 2.17634 10.571 3.21796 12.0702C4.25958 13.5694 6.32331 12.5684 6.32331 12.5684C6.32331 12.5684 0.640808 14.0699 5.29012 18.5743C9.73023 22.876 12 16.0718 12 16.0718"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.1523 8.62388C12.1523 8.62388 16.2762 0.278959 21.4424 1.11616C25.0587 1.70219 21.976 10.6281 20.9344 12.1273C19.8928 13.6265 17.829 12.6255 17.829 12.6255C17.829 12.6255 23.5115 14.127 18.8622 18.6314C14.4221 22.9331 12.1523 16.129 12.1523 16.129"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </IconWrapper>
      );
    default:
      return null;
  }
};

export default Icon;
