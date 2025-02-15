import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import UserProfileFirstStyle from "./UserProfileFirstStyle/UserProfileFirstStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle/UserProfileSecondStyle";
import UserProfileThirdStyle from "./UserProfileThirdStyle/UserProfileThirdStyle";
import UserProfileFourthStyle from "./UserProfileFourthStyle/UserProfileFourthStyle";
import UserProfileFifthStyle from "./UserProfileFifthStyle/UserProfileFifthStyle";
import { BonusUi, Tour } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs/Breadcrumbs";

const TourMain = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Tour} parent={BonusUi} />
      <Container fluid className="user-profile">
        <Row>
          <UserProfileFirstStyle />
          <UserProfileSecondStyle />
          <UserProfileThirdStyle />
          <UserProfileFourthStyle />
          <UserProfileFifthStyle />
        </Row>
      </Container>
    </>
  );
};

export default TourMain;
