import { useState } from "react";
import CustomForm from "./CustomForm";
import List from "./List";

const Main = () => {
  const [userInfos, setUserInfos] = useState([]);

  const getUserInfo = (userInfoObj) => {
    setUserInfos([...userInfos, userInfoObj]);
  };
  return (
    <section className="main">
      <CustomForm getUserInfo={getUserInfo} />
      <List userInfos={userInfos}/>
    </section>
  );
};

export default Main;
