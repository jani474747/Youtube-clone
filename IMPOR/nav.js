function navbar() {
  return `     <nav>
     <div id="ICO">
      <div id="ICO_1"><i class="fas fa-bars"></i></div>
      <img src="./RESOURCES/logo.png.png" alt="" /><sup>IN</sup>
     </div>
     <div id="SR">
      <form id="form">
       <input type="text" id="srch" placeholder="Search" /><button
       type="submit"
       value="search"
       >
       <i class="fas fa-search"></i>
      </button>
     </form>
    </div>
    <div id="INF">
     <img src="./RESOURCES/video_plus_icon_136058.png.png" alt="" />
     <div><i class="fas fa-th"></i></div>
     <div><i class="far fa-bell"></i></div>
     <div><i class="far fa-user-circle"></i></div>
    </div>
   </nav>`
}
export default navbar
