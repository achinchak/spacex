import React from 'react'
import DataCard from './DataCard';

const Posts = ({ currentPosts,tempData,setOpenModal,setTempData,openModal }) => {
    return (
        <>
            <div className="item_list_bg">
                <div className="container item_padding_new">
                    <div className="row">
                        <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                            style={{ border: "solid red 0px" }}
                        >
                            <h1><strong>Capsules</strong></h1>
                            <div className="row">
                                {currentPosts.map((item, i) => (
                                    <DataCard
                                        key={i}
                                        item={item}
                                        tempData={tempData}
                                        setOpenModal={setOpenModal}
                                        setTempData={setTempData}
                                        openModal={openModal}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts