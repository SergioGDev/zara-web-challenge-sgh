import React from "react";
import styles from "./ErrorMsg.module.scss";

import { ErrorMsgProps } from "./errorMsg.types";

const ErrorMsg = ({ errorMsg }: ErrorMsgProps) => {
  return <div className={styles.container}>{errorMsg}</div>;
};

export default ErrorMsg;
