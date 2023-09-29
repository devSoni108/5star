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
import CTA from '../components/CTA'

const hire = () => {
  return (
    <div className="text-black z-[2] text-center bg-gray-100">
      <div className="p-5">
        <Navbar />
      </div>
      <h1 className="pt-5 text-7xl">Items for hire</h1>
      <h4 className="py-5 text-5xl">View our curated list of items for hire</h4>
      <div className='flex justify-center py-8'>
        <div className="h-0.5 w-60 bg-pink-300"/>
      </div>
      <Centerpieces slides={CenterpiecesData}/>
      <Stages slides={StagesData} />
      <Draping slides={DrapingData} />
      <TableSetting slides={TableSettingData} />
      <CTA />
      <Footer />
    </div>
  )
}

export default hire
