import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Layout from './component/layout-view/Layout';
import Home from './pages/home-page/Home';
import { AdminManage, AdvertiseConfig, AnchorTag, EncryptionConfig, ExhangeRule, IncomeRecord, MobileConfig, NickNameConfig, OperationLog, PrivateMessageGift, PurchaseRule, RevenueRecord, RobotAvatar, RoleManege, UserManagement } from './AllPages';
// import ResizableTable from './ResizalbeTabble';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(()=>{
    if(location.pathname == "/" || location.pathname == "/console") return navigate("/console/dashborad") 
  })
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>

      <Route path='/console/dashborad' element={<Home/>}/> 
       
       <Route path='/systemMange/systemConfig/adminConfig' element={<AdvertiseConfig/>}/>
       <Route path='/systemMange/systemConfig/exchangeRule' element={<ExhangeRule/>}/>
       <Route path='/systemMange/systemConfig/purchaseRuleList' element={<PurchaseRule/>}/>

       <Route path='/systemMange/systemMobileConfig/MConfig' element={<MobileConfig/>}/>
       <Route path='/systemMange/systemMobileConfig/nickNameConfig' element={<NickNameConfig/>}/>
       <Route path='/systemMange/systemMobileConfig/keyConfig' element={<EncryptionConfig/>}/>
       
       <Route path='/systemMange/administratorManagement' element={<AdminManage/>}/>
       <Route path='/systemMange/roleManagement' element={<RoleManege/>}/>
       <Route path='/systemMange/deletedSystemLogs' element={<OperationLog/>}/>

       <Route path='/systemUser/systemUserGeneral/userManagement' element={<UserManagement/>}/>
       <Route path='/systemUser/systemUserGeneral/robotAvatar' element={<RobotAvatar/>}/>
       <Route path='/systemUser/systemUserGeneral/messgageStistics' element={<PrivateMessageGift/>}/>
       <Route path='/systemUser/systemUserGeneral/anchorTags' element={<AnchorTag/>}/>
       <Route path='/systemUser/systemUserGeneral/expendituresRecord' element={<IncomeRecord/>}/>
       <Route path='/systemUser/systemUserGeneral/revenueRecord' element={<RevenueRecord/>}/>


      </Route>
    </Routes> 


    {/* <ResizableTable/> */}
    </>
  )
}

export default App
