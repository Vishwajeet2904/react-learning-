function Header() {
  return (
    <div className="heading">
      <img
        className="images"
        src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"
        height="60px"
        width="60px"
        alt="logo"
      />
      <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>
      <input
        className="searchbar"
        placeholder="Search for product and more"
      ></input>
       {/* Profile Section */}
      <div className="Profile">
        <button className="pro">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            height="20px"
          /> Profile
        </button>
        <button className="pro">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="wishlist"
            height="20px"
          /> Wishlist
        </button>
        <button className="pro">
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="bag"
            height="20px"
          /> Bag
        </button>
      </div>
    </div>
  );
}


export default Header;