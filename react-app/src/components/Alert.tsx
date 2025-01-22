//rafce - react arrow function componenet export
import React, { ReactNode } from "react";
//inorder to pass a text as a prompt you need to have interface option here
interface Props {
  //once you pass it as a children you can basically pass it as a child component
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
