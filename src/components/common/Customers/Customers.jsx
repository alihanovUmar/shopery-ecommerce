import React, { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomersPropis from './CustomersPropis'

const Customers = () => {
  const [newReview, setNewReview] = useState({ name: '', text: '' })
  const [customersData, setCustomersData] = useState(
    JSON.parse(localStorage.getItem('customersData')) || [
      { name: 'Customer A', text: 'Great product, highly recommended!' },
      { name: 'Customer B', text: 'Great product, highly recommended!' },
      { name: 'Customer C', text: 'Yeaaaah! The fastest delivery ever :-D' },
    ]
  )
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    localStorage.setItem('customersData', JSON.stringify(customersData))
  }, [customersData])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }))
  }

  const handleAddReview = () => {
    if (newReview.name.trim() === '' || newReview.text.trim() === '') {
      return
    }

    setCustomersData((prevData) => [...prevData, newReview])
    setNewReview({ name: '', text: '' })
    setShowModal(false)
  }

  const handleDeleteReview = (index) => {
    setCustomersData((prevData) => {
      const newData = [...prevData]
      newData.splice(index, 1)
      return newData
    })
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddReview()
    }
  }

  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    p: 4,
  }

  return (
    <section className="px-4 py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">Our happy customers</h2>
          <Button
            onClick={handleOpen}
            sx={{
              borderRadius: '50%',
              border: '0.5px solid #000',
              color: 'black',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              fontSize: '24px',
            }}
          >
            +
          </Button>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {customersData.map((customer, index) => (
            <CustomersPropis
              key={index}
              name={customer.name}
              text={customer.text}
              onDelete={() => handleDeleteReview(index)}
              buttonClassName="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black transition duration-300 ease-in-out hover:bg-black hover:text-white shadow-md"
              containerClassName="w-full md:w-[400px] h-[200px] p-6 border-solid border-2 border-black-500 shadow-md"
            />
          ))}
        </div>

        <Modal
          open={showModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography variant="h5" align="center" gutterBottom>
              Add Review
            </Typography>
            <div className="space-y-4 flex flex-col items-center justify-center">
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                placeholder="Customer Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="text"
                value={newReview.text}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Customer Review"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
              <div className="flex gap-3">
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-md"
                  onClick={handleAddReview}
                >
                  Add Review
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </section>
  )
}

export default Customers
