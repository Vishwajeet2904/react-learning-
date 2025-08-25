import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./card";
import Footer from "./footer";
import Header from "./header";
//header
//body
//footer
//card creation

const arr = [
  { cloth: "T-Shirt", Offer: "20-40%Off", img: "https://i.pinimg.com/originals/1b/19/41/1b1941c4049995b37eb529c3cf8bc5e3.jpg" },
  { cloth: "jeans", Offer: "10-40%Off", img: "https://thafd.bing.com/th/id/OIP.6twfwFQIa4lsmxq1OHAL5AHaLk?w=200&h=312&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3" },
  { cloth: "kurta", Offer: "30-40%Off", img: "https://thafd.bing.com/th/id/OIP.1XbpLIoq50tltAVU-FYO9wHaLG?w=208&h=305&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3" },
  { cloth: "jackets", Offer: "40-60%Off", img: "https://tse3.mm.bing.net/th/id/OIP.4AU2BNRoitzLiahscuN9UAHaLG?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { cloth: "tops", Offer: "30-70%Off", img: "https://thafd.bing.com/th/id/OIP.2cd8vql9Ag6PdgcFSAsdAAHaJ4?w=208&h=277&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3" },
  { cloth: "lehnga", Offer: "10-40%Off", img: "https://tse4.mm.bing.net/th/id/OIP.Ay9nN1vqYMHvMv89MdX3tAHaLH?cb=thfvnext&w=800&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { cloth: "shoes", Offer: "25-50%Off", img: "https://thafd.bing.com/th/id/OIP.1RfKeDjiffAd7MnXDykgcQHaFs?w=229&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3" },
  { cloth: "saree", Offer: "20-60%Off", img: "https://thafd.bing.com/th/id/OIP.dXF4uoeHPTa6wt2RoCnTuwHaJ4?w=208&h=277&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3" },
  { cloth: "watch", Offer: "15-35%Off", img: "https://thafd.bing.com/th/id/OIP.fnUIpSvyIKlof48jPF9mrwHaE7?w=241&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3" },
  { cloth: "handbag", Offer: "30-55%Off", img: "https://thafd.bing.com/th/id/OIP.ZjRNSnaY_gbOm1H8mtSJUwHaHa?w=172&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3" }
];

function App() {
  return (
    <>
      <Header />
      <div
        className="middle"
        style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}
      >
        {arr.map((value, index) => (
          <Card key={index} cloth={value.cloth} offer={value.Offer} img={value.img} /> 
        ))}
      </div>

      <Footer/>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
