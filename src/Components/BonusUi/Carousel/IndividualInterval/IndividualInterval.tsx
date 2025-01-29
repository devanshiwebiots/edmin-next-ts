//@ts-nocheck
import { Card, CardBody, Col } from 'reactstrap'
import { ImagePath, IndividualCarouselItemIntervals } from '@/Constant'
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import { itemIntervalData, itemIntervalDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapCarousel";
import CardHeaderCommon from '@/CommonComponent/CommonCardHeader/CardHeaderCommon'
import RatioImage from '@/CommonComponent/RatioImage';

const IndividualInterval = () => {
   const swiperRef = useRef(null);

   useEffect(() => {
     if (!swiperRef.current) return;

     const swiperInstance = swiperRef.current.swiper;

     // Function to update autoplay delay dynamically
     const updateAutoplayDelay = () => {
       const currentSlideIndex = swiperInstance.realIndex;
       const currentInterval = itemIntervalDataList[currentSlideIndex].interval;
       swiperInstance.params.autoplay.delay = currentInterval;
       swiperInstance.autoplay.stop();
       swiperInstance.autoplay.start();
     };

     // Update autoplay delay when slide changes
     swiperInstance.on("slideChange", updateAutoplayDelay);

     // Cleanup on component unmount
     return () => {
       swiperInstance.off("slideChange", updateAutoplayDelay);
     };
   }, [itemIntervalDataList]);
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={IndividualCarouselItemIntervals} span={itemIntervalData} headClass="pb-0" />
        <CardBody>
          <Swiper ref={swiperRef} modules={[Autoplay, Navigation]} navigation loop autoplay={{ delay: itemIntervalDataList[0].interval }} slidesPerView={1}>
            {itemIntervalDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <RatioImage className="d-block w-100" src={`${ImagePath}/${item.image}`} alt="drawing-room" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
}

export default IndividualInterval