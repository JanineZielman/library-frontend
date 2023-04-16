import React, {useState} from "react"
import Link from "next/link"
import Modal from 'react-modal';

const Nav = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function afterOpenModal2() {
    document.getElementById('filter_options').style.display = 'none';
  }

  function afterCloseModal2() {
    document.getElementById('filter_options').style.display = 'flex';
  }


  const customStyles = {
    overlay: {
      backgroundColor: "transparent",
      zIndex: '999',
    },
    content: {
      width: 'fit-content',
      height: 'fit-content',
      backgroundColor: "transparent",
      zIndex: '999',
      top: '100px',
      left: '1vw',
      border: 'none',
      padding: 0,
    },
  };

  const customStyles2 = {
    overlay: {
      backgroundColor: "transparent",
      zIndex: '999',
    },
    content: {
      width: 'fit-content',
      height: 'fit-content',
      backgroundColor: "transparent",
      zIndex: '999',
      top: '225px',
      left: '1vw',
      border: 'none',
      padding: 0,
    },
  };
  

  return (
    <div>
      <nav>
        <div className="logo">
          <a href="#">The New Library</a>
        </div>

        <div className="links">
          <a href="/">Grid</a>
          <a href="/list">List</a>
          <a href="/timeline">Timeline</a>
        </div>
      </nav>
      <div className="filter-search">
        <div className="filter button" onClick={openModal}>Filter</div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="filter-modal columns">
            <div className="column">
              <span className="small">Designer</span>
              <div className="filter-items">
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
              </div>
            </div>
            <div className="column">
              <span className="small">Year</span>
              <div className="filter-items">
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
              </div>
            </div>
            <div className="column">
              <span className="small">Type</span>
              <div className="filter-items">
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
              </div>
            </div>
          </div>
          <div className="filter-options" id="filter_options">
            <div className="button" onClick={openModal2}>More options</div>
            <div className="button">Clear filters</div>
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
          onAfterOpen={afterOpenModal2}
          onAfterClose={afterCloseModal2}
          style={customStyles2}
        >
          <div className="filter-modal2 columns">
            <div className="column">
              <span className="small">Designer</span>
              <div className="filter-items">
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
              </div>
            </div>
            <div className="column">
              <span className="small">Year</span>
              <div className="filter-items">
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
              </div>
            </div>
            <div className="column">
              <span className="small">Type</span>
              <div className="filter-items">
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
              </div>
            </div>
            <div className="column">
              <span className="small">Type</span>
              <div className="filter-items">
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
                <span className="small">Designer</span>
              </div>
            </div>
          </div>
          <div className="filter-options">
            <div className="button" onClick={closeModal2}>Fewer options</div>
            <div className="button">Clear filters</div>
          </div>
        </Modal>

        <div className="search button">Search</div>
      </div>
    </div>
  )
}

export default Nav
