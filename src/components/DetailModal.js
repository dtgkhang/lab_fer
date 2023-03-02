import { Modal,Image } from 'antd'
import React from 'react'

function DetailModal({img,data,isModalOpen,handleOk,handleCancel
}) {
  return (
    <Modal okText="View More" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='m-5 align-content-center justify-content-center'>
        <Image className="img-thumbnail justify-content-center" src={img} width={300} />
          <p>{data}</p>
            </div>
    </Modal>
  )
}

export default DetailModal