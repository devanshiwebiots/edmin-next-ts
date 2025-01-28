import { Container } from "reactstrap";
import { ImagePath, WeAreComingSoon } from "@/Constant";
import CountdownData from "../Common/CountdownData";
import Image from "next/image";

const ComingSoonWithBgImageContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid className="p-0 m-0">
        <div className="comingsoon comingsoon-bgimg">
          <div className="comingsoon-inner text-center">
            <Image width={80} height={71} src={`${ImagePath}/logo/logo-login.png`} alt="comingsoon" />
            {/* <Image width={80} height={71} className="for-dark" src={`${ImagePath}/logo/dark-login-logo.png`} alt="comingsoon" /> */}
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonWithBgImageContainer;
