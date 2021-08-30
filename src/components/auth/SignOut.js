import { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { signOut } from "../../api/auth";
import { signOutSuccess } from "../AutoDismissAlert/messages";

function SignOut(props) {
  useEffect(() => {
    const { msgAlert, history, clearUser, user } = props;
    signOut(user)
      .then(() => {
        msgAlert({
          heading: "Signed Out Successfully",
          message: signOutSuccess,
          variant: "success",
        });
      })
      .then(() => {
        history.push("/");
      })
      .then(() => {
        clearUser();
      });
  }, []);
}

export default withRouter(SignOut);
