import React, {useState} from "react"
import Link from "next/link"

const Nav = () => {

  function openModal() {
    var element = document.getElementById("modal1");
    element.classList.toggle("open");

    var element2 = document.getElementById("modal");
    element2.classList.toggle("open");
  }

  function openModal2() {
    var element = document.getElementById("modal2");
    element.classList.toggle("open");

    var element2 = document.getElementById("show_more");
    element2.classList.toggle("open");
  }

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
        <div className="search button">Search</div>      
      </div>
      <div className="filter-menu" id="modal">
        <div className="filter-modal columns" id="modal1">
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
        <div className="filter-modal2 columns" id="modal2">
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
        <div className="filter-options" id="filter_options">
          <div className="button" id="show_more" onClick={openModal2}>options</div>
          <div className="button">Clear filters</div>
        </div>
      </div>
    </div>
  )
}

export default Nav
