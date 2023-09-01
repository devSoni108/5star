import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Centerpieces from '../components/Centerpieces'
import { CenterpiecesData } from '../components/CenterpiecesData'
import Stages from '../components/Stages'
import { StagesData } from '../components/StagesData'
import Draping from '../components/Draping'
import { DrapingData } from '../components/DrapingData'
import TableSetting from '../components/TableSetting'
import { TableSettingData } from '../components/TableSettingData'

const hire = () => {
  return (
    <div className="p-5 text-black z-[2] text-center">
      <div className="p-5 bg-black">
        <Navbar />
      </div>
      <h1 className="pt-5 text-7xl">Items for hire</h1>
      <h2 className="py-5 text-5xl">View our curated list of items for hire</h2>
      <Centerpieces slides={CenterpiecesData}/>
      <Stages slides={StagesData} />
      <Draping slides={DrapingData} />
      <TableSetting slides={TableSettingData} />
      <Footer />
    </div>
  )
}

export default hire
