import { Modal } from 'antd'
import React from 'react'

function DetailModal({data,isModalOpen,handleOk,handleCancel
}) {
  return (
    <Modal okText="View More" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='m-5'>{data}
            </div>
    </Modal>
  )
}

export default DetailModal