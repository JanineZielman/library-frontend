import React, {useState} from "react"
import Link from "next/link"
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()

  const [designer, setDesigner] = useState(router.query.designer ? router.query.designer : '');
  const [year, setYear] = useState(router.query.year ? router.query.year : '');
  const [type, setType] = useState(router.query.type ? router.query.type : '');
  const [search, setSearch] = useState(router.query.search ? router.query.search : '');


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

  function searchFilter(){
    var input = document.getElementById("search");
    document.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        window.location.href = `${router.pathname}?search=${input.value}`
      }
    });
  }

  console.log(router)


  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/info">The New Library</a>
        </div>

        <div className="links">
          <a href={`/?${designer && `&designer=${designer}`}${year && `&year=${year}`}${type && `&type=${type}`}${search && `&search=${search}`}`}>Grid</a>
          <a href={`/list?${designer && `&designer=${designer}`}${year && `&year=${year}`}${type && `&type=${type}`}${search && `&search=${search}`}`}>List</a>
          <a href={`/timeline?${designer && `&designer=${designer}`}${year && `&year=${year}`}${type && `&type=${type}`}${search && `&search=${search}`}`}>Timeline</a>
        </div>
      </nav>
      {router.asPath != '/info' &&
        <div className="filter-search">
          <div className="filter button" onClick={openModal}>Filter</div>
          <input className="search button" type="text" id="search" onKeyUp={searchFilter} placeholder="Search..."></input>
        </div>
      }
      <div className="filter-menu" id="modal">
        <div className="filter-modal columns" id="modal1">
          <div className="column">
            <span className="small">Designer</span>
            <div className="filter-items">
              <a className="flex" href={`${router.pathname}?designer=blue${year && `&year=${year}`}${type && `&type=${type}`}`}>
                <div className={`color-dot blue1`}></div>
                <span className="small">Alums</span>
              </a>
              <a className="flex" href={`${router.pathname}?designer=yellow${year && `&year=${year}`}${type && `&type=${type}`}`}>
                <div className={`color-dot yellow1`}></div>
                <span className="small">External</span>
              </a>
              <a className="flex" href={`${router.pathname}?designer=red${year && `&year=${year}`}${type && `&type=${type}`}`}>
                <div className={`color-dot red1`}></div>
                <span className="small">Student</span>
              </a>
              <a className="flex" href={`${router.pathname}?designer=green${year && `&year=${year}`}${type && `&type=${type}`}`}>
                <div className={`color-dot green1`}></div>
                <span className="small">Published</span>
              </a>
            </div>
          </div>
          <div className="column">
            <span className="small">Year</span>
            <div className="filter-items">
            <a className="flex" href={`${router.pathname}?year=gold${designer && `&designer=${designer}`}${type && `&type=${type}`}`}>
                <div className={`color-dot gold2`}></div>
                <span className="small">2021-2030</span>
              </a>
              <a className="flex" href={`${router.pathname}?year=purple${designer && `&designer=${designer}`}${type && `&type=${type}`}`}>
                <div className={`color-dot purple2`}></div>
                <span className="small">2011-2020</span>
              </a>
              <a className="flex" href={`${router.pathname}?year=green${designer && `&designer=${designer}`}${type && `&type=${type}`}`}>
                <div className={`color-dot green2`}></div>
                <span className="small">2001-2010</span>
              </a>
              <a className="flex" href={`${router.pathname}?year=blue${designer && `&designer=${designer}`}${type && `&type=${type}`}`}>
                <div className={`color-dot blue2`}></div>
                <span className="small">1991-2000</span>
              </a>
              <a className="flex" href={`${router.pathname}?year=orange${designer && `&designer=${designer}`}${type && `&type=${type}`}`}>
                <div className={`color-dot orange2`}></div>
                <span className="small">1981-1990</span>
              </a>
              <a className="flex" href={`${router.pathname}?year=black${designer && `&designer=${designer}`}${type && `&type=${type}`}`}>
                <div className={`color-dot black2`}></div>
                <span className="small">… - 1980</span>
              </a>
            </div>
          </div>
          <div className="column">
            <span className="small">Type</span>
            <div className="filter-items">
              <a href={`${router.pathname}?type=book${designer && `&designer=${designer}`}${year && `&year=${year}`}`}>
                <span className="small">Book</span>
              </a>
              <a href={`${router.pathname}?type=dummies${designer && `&designer=${designer}`}${year && `&year=${year}`}`}>
                <span className="small">Dummies</span>
              </a>
              <a href={`${router.pathname}?type=ephemera${designer && `&designer=${designer}`}${year && `&year=${year}`}`}>
                <span className="small">Ephemera</span>
              </a>
              <a href={`${router.pathname}?type=magazine${designer && `&designer=${designer}`}${year && `&year=${year}`}`}>
                <span className="small">Magazine</span>
              </a>
              <a href={`${router.pathname}?type=object${designer && `&designer=${designer}`}${year && `&year=${year}`}`}>
                <span className="small">Object</span>
              </a>
              <a href={`${router.pathname}?type=zine${designer && `&designer=${designer}`}${year && `&year=${year}`}`}>
                <span className="small">Zine</span>
              </a>
            </div>
          </div>
        </div>

        <div className="filter-modal2 columns" id="modal2">
          <div className="column">
            <span className="small">Language</span>
            <div className="filter-items">
              <span className="small">Designer</span>
              <span className="small">Designer</span>
              <span className="small">Designer</span>
              <span className="small">Designer</span>
            </div>
          </div>
          <div className="column">
            <span className="small">Cover</span>
            <div className="filter-items">
              <span className="small">Designer</span>
              <span className="small">Designer</span>
              <span className="small">Designer</span>
              <span className="small">Designer</span>
            </div>
          </div>
          <div className="column">
            <span className="small">Cover Type</span>
            <div className="filter-items">
              <span className="small">Designer</span>
              <span className="small">Designer</span>
              <span className="small">Designer</span>
              <span className="small">Designer</span>
            </div>
          </div>
          <div className="column">
            <span className="small">Spine</span>
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
