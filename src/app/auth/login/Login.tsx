import { CreateAccount, DoNotAccount, EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn, SignInAccount, SignInWith } from "@/Constant";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import imageOne from "../../../../public/assets/images/logo/logo.png";
import SocialApp from "./SocialApp";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();
 
  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();                                                                                  
    const result = await signIn("credentials", {
      email,   
      password,  
      redirect: false,
      callbackUrl: "/dashboard/ecommerce",
    });
  
    if (result?.ok) {
      toast.success("successfully Logged in Rediract......")
      router.push("/dashboard/ecommerce");
    } else {     
      toast.error("Invalid Credentaial...");
    }
  };
  return (
    <div>
      <div>
        <Link className="logo text-center" href={Href}>
          <img className="img-fluid" src={imageOne.src} alt="logo" />
        </Link>
      </div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={(e) => formSubmitHandle(e)}>
          <h2 className="text-center">{SignInAccount}</h2>
          <p className="text-center">{"Enter your email & password to login"}</p>
          <FormGroup>
            <Label className="col-form-label">{EmailAddress}</Label>
            <Input type="email" required placeholder="Test@gmail.com" value={email} name="email" onChange={(event) => setEmail(event.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{Password}</Label>
            <div className="form-input position-relative">
              <Input type={show ? "text" : "password"} placeholder="*********" onChange={(event) => setPassword(event.target.value)} value={password} name="password" />
              <div className="show-hide" onClick={() => setShow(!show)}>
                <span className="show"> </span>
              </div>
            </div>
          </FormGroup>
          <FormGroup className="mb-0 checkbox-checked">
            <div className="form-check checkbox-solid-info">
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" htmlFor="checkbox1">
                {RememberPassword}
              </Label>
              <Link href={`/authentication/forgetpassword`}> {ForgotPassword}</Link>
            </div>
            <div className="text-end mt-3">
              <Button color="primary" block className="w-100">
                {SignIn}
              </Button>
            </div>
          </FormGroup>
          <div className="login-social-title">
            <h6>{SignInWith}</h6>
          </div>
          <SocialApp />
          <p className="mt-4 mb-0 text-center">
            {DoNotAccount}
            <Link className="ms-2" href={`/authentication/registersimple`}>
              {CreateAccount}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
