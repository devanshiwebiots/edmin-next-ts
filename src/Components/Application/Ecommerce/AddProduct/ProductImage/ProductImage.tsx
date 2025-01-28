import { Card, CardBody, Form } from "reactstrap";
import { BlogDropFilesHereOrClickToUpload, ProductImageHeading } from "@/Constant";
import { useState } from "react";
import SelectSize from "./SelectSize";
import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";

const ProductImage = () => {
   return (
    <Card>
      <CardBody>
        <div className="product-info">
          <h4>{ProductImageHeading}</h4>
          <Form>
           <CommonFileUpload/>
          </Form>
          <SelectSize />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductImage;
