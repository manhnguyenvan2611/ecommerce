export default function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="sidebarBtn">
        <img className="icon menu__img" src="./images/icons/menu.png" alt="menu"/>
        All Categories
        <img className="icon arrow__img" src="./images/icons/down-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon cellphone__img" src="./images/icons/cellphone.png" alt="cell phone"/>
        <div className="sidebar__theme">
          Cell phones
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon computer__img" src="./images/icons/computer.png" alt="computer"/>
        <div className="sidebar__theme">
          Computers & Accessories
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon television_img" src="./images/icons/tivi.png" alt="television"/>
        <div className="sidebar__theme">
          Television & Video
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon cellphone__img" src="./images/icons/smartwatch.png" alt="smartwatch"/>
        <div className="sidebar__theme">
          Smartwatches
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon headphones__img" src="./images/icons/headphones.png" alt="headphones"/>
        <div className="sidebar__theme">
          Headphones
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon cellphone__img" src="./images/icons/camera.png" alt="camera"/>
        <div className="sidebar__theme">
          Camera & Photo
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon controller__img" src="./images/icons/controller.png" alt="video games"/>
        <div className="sidebar__theme">
          Video Games
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon football__img" src="./images/icons/football.png" alt="sports"/>
        <div className="sidebar__theme">
          Sports & Outdoors
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon tag__img" src="./images/icons/tag.png" alt="best sellers"/>
        <div className="sidebar__theme">
          Best Sellers
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon top__img" src="./images/icons/top.png" alt="top 100"/>
        <div className="sidebar__theme">
          Top 100 Offers
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
      <button className="sidebarBtn">
        <img className="icon new__img" src="./images/icons/new.png" alt="new arrivals"/>
        <div className="sidebar__theme">
          New Arrivals
        </div>
        <img className="icon arrow__img" src="./images/icons/right-arrow.png" alt="more"/>
      </button>
    </aside>
  );
}