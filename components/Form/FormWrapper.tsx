'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const ConfirmationModal = dynamic(() =>
    import('reactjs-dialog-modal').then((mod) => mod.Modal),
);

const ModalChildren = dynamic(() => import('@/components/Form/ModalChildren'));
const Form = dynamic(() => import('@/components/Form/Form'))

function FormWrapper() {
    const [refreshKey, setRefreshKey] = useState(0);
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleClose = () => {
        setRefreshKey((prevKey) => prevKey + 1)
        setShowModal(false)
    }

    return (
        <>
            <Form key={refreshKey} setShowModal={setShowModal} />
            <ConfirmationModal
                className={`dialog rounded m-auto opacity-0 text-white bg-brand-dark/100`}
                showModal={showModal}
                animateClass="close">
                <ModalChildren handleClose={handleClose} />
            </ConfirmationModal>
        </>
    )
}

export default FormWrapper