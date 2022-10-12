import { useTheme } from "context";
import ContentLoader from "react-content-loader";

export function Loader() {
  const theme = useTheme();

  return (
    <ContentLoader
      width={161}
      height={72}
      viewBox="0 0 161 72"
      backgroundColor={theme?.theme?.colors?.background}
      foregroundColor={theme?.theme?.colors?.foreground}
    >
      <circle cx="16" cy="56" r="16" fill="#D9D9D9" />
      <circle cx="59" cy="56" r="16" fill="#D9D9D9" />
      <circle cx="102" cy="56" r="16" fill="#D9D9D9" />
      <circle cx="145" cy="56" r="16" fill="#D9D9D9" />
      <rect width="91" height="16" fill="#D9D9D9" />
    </ContentLoader>
  );
}
