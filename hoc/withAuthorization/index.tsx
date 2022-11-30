import { useAuth } from "context";
import { ComponentType, useEffect } from "react";
import { useRouter } from "next/router";
import { paths } from "constants/routes";

// eslint-disable-next-line max-len
export const withAuthorization = <P extends object>(Component: ComponentType<P>) => function (props: P) {
  const auth = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!auth?.isSigned) {
      router.push(paths.auth);
    }
  }, []);

  return <Component {...props} />;
};
