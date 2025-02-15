import { Col, Row } from 'reactstrap'
import { SearchPixelStrap } from '@/Constant'
import { searchTabsData } from '@/Data/Application/SearchResult/SearchResult'
import InformationCommon from './InformationCommon'
import SearchBanner from './SearchBanner'
import PagesSort from './PagesSort'

const AllTabs = () => {
  return (
    <Row>
      <Col xxl="8" xl="6" className="box-col-12">
        <h6 className="mb-2">{SearchPixelStrap}</h6>
        {searchTabsData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <SearchBanner />
      <PagesSort />
    </Row>
  )
}

export default AllTabs