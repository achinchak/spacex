import React from 'react'
import '../Styles/home.css'
// import Modal from "./Modal";

const DataCard = ({ item, tempData,setOpenModal ,openModal}) => {
  const getData=(capsule_serial,status)=>{
      tempData = [capsule_serial,status];
      return (
      <>
      {setOpenModal(true)}
        {alert(tempData) }
</>);
  }
  return (
    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 spacex_items">
      <div id="item-card" className="item_bg_color">
        <div className='item-text'>
          <span>
            <h5 className="card-title">{item.capsule_serial}</h5>
            <p className="card-text">{item.status}</p>
            <button className='btnn btn-primary' onClick={()=>getData(item.capsule_serial,item.status)}>See Details</button>
            {/* <Modal tempData={tempData} open={openModal}/> */}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DataCard