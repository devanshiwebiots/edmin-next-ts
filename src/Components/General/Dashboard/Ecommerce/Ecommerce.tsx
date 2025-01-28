import { Container, Row } from "reactstrap";
import { Dashboard, EcommerceDashboard } from "@/Constant";
import TotalSale from "./TotalSale/TotalSale";
import ManageOrder from "./ManageOrder/ManageOrder";
import SalesSummary from "./SalesSummary/SalesSummary";
import SaleProgress from "./SaleProgress/SaleProgress";
import BestSellers from "./BestSellers/BestSellers";
import AddProduct from "./AddProduct/AddProduct";
import SalesByProduct from "./SalesByProduct/SalesByProduct";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs/Breadcrumbs";
import ProductOffer from "../../Common/ProductOffer/ProductOffer";

const ContainerEcommerce = () => {
  return (
    <>
      <Breadcrumbs mainTitle={EcommerceDashboard} parent={Dashboard} />
      <Container fluid className="ecommerce-dashboard">
        <Row>
          <TotalSale />
          <ManageOrder />
          <SalesSummary />
          <ProductOffer />
          <SaleProgress />
          <BestSellers />
          <AddProduct />
          <SalesByProduct />
        </Row>
      </Container>
    </>
  );
};

export default ContainerEcommerce;
