import React from "react"
import Link from "next/link"

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="#">The New Library</a>
        </div>
        /
        <div className="links">
          <a href="/">Grid</a>
          <a href="/list">List</a>
          <a href="/timeline">Timeline</a>
        </div>
        /
        <div className="filter">
          <a href="#">Filter</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav
