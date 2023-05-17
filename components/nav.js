import React, {useState} from "react"
import Link from "next/link"

const Nav = () => {

  function openModal() {
    var modal = document.getElementById("modal1");
    modal.classList.toggle("open");

    var element = document.getElementById("modal");
    element.classList.toggle("open");

    var modal2 = document.getElementById("modal2");
    modal2.classList.remove("open");
  }

  function openModal2() {
    var modal2 = document.getElementById("modal2");
    modal2.classList.toggle("open");

    var element2 = document.getElementById("show_more");
    element2.classList.toggle("open");
  }


  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/info">The New Library</a>
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
              <a className="flex" href="/?designer=blue1">
                <div className={`color-dot blue1`}></div>
                <span className="small">Alums</span>
              </a>
              <a className="flex" href="/?designer=yellow1">
                <div className={`color-dot yellow1`}></div>
                <span className="small">External</span>
              </a>
              <a className="flex" href="/?designer=red1">
                <div className={`color-dot red1`}></div>
                <span className="small">Student</span>
              </a>
              <a className="flex" href="/?designer=green1">
                <div className={`color-dot green1`}></div>
                <span className="small">Published</span>
              </a>
            </div>
          </div>
          <div className="column">
            <span className="small">Year</span>
            <div className="filter-items">
            <a className="flex" href="/?designer=gold2">
                <div className={`color-dot gold2`}></div>
                <span className="small">2021-2030</span>
              </a>
              <a className="flex" href="/?designer=purple2">
                <div className={`color-dot purple2`}></div>
                <span className="small">2011-2020</span>
              </a>
              <a className="flex" href="/?designer=green2">
                <div className={`color-dot green2`}></div>
                <span className="small">2001-2010</span>
              </a>
              <a className="flex" href="/?designer=blue2">
                <div className={`color-dot blue2`}></div>
                <span className="small">1991-2000</span>
              </a>
              <a className="flex" href="/?designer=orange2">
                <div className={`color-dot orange2`}></div>
                <span className="small">1981-1990</span>
              </a>
              <a className="flex" href="/?designer=black2">
                <div className={`color-dot black2`}></div>
                <span className="small">… - 1980</span>
              </a>
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
