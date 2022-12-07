import { Header } from "components";
import { withAuthorization } from "hoc";
import { MyAccountPageLayout } from "layout";

function MyAccount() {
  return (
    <>
      <Header />
      <MyAccountPageLayout />
    </>
  );
}

export default withAuthorization(MyAccount);
