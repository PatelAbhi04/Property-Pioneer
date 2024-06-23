import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  // const [offerListings, setOfferListings] = useState([]);
  // const [saleListings, setSaleListings] = useState([]);
  // const [rentListings, setRentListings] = useState([]);
  const [LatestListings, setLatestListings] = useState([]);

  SwiperCore.use([Navigation, Autoplay]);
 
  useEffect(() => {
    const fetchLatestListings = async () => {
      try {
        const res = await fetch("/api/listing/get?sort=created_at&order=desc");
        const data = await res.json();
        setLatestListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLatestListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="top"></div>

      {/* swiper */}
      <Swiper navigation autoplay={{ delay: 5000 }}>
        {LatestListings &&
          LatestListings.length > 0 &&
          LatestListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  position: "relative",
                  height: "700px",
                }}
                className="relative h-[500px]"
              >
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                    opacity: 0.5, // Reduced opacity for the background image
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1, // Make sure it is behind the text
                  }}
                ></div>
                <div
                  style={{
                    position: "relative",
                    zIndex: 2, // Make sure text is above the background image
                    color: "white",
                    height: "100%", // Ensure the content div takes the full height
                    display: "flex", // Center content
                    flexDirection: "column", // Stack elements vertically
                    alignItems: "flex-start", // Center horizontally
                    justifyContent: "center", // Center vertically
                    padding: "10px",
                    textAlign: "center",
                    marginBottom:'5px' // Center text
                  }}
                  className="flex flex-col gap-6 p-28 px-3  max-w-6xl mx-auto"
                >
                  <h1 className="text-[#3D52A0]  font-bold text-3xl lg:text-6xl animated-text">
                    secure your legacy with{" "}
                    <span className="text-slate-800">Property Pioneer</span>
                  </h1>
                  <div className="text-slate-900 font  sm:text-2xl  animated-text">
                    Property Pioneer is the best place to find your next perfect
                    place to live. We have a wide range of properties for you to
                    choose from.
                  </div>
                  <Link
                    to={"/search"}
                    className="text-xs sm:text-lg text-blue-800 font-bold hover:underline animate-text"
                  >
                    Let's get started...
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results  */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {LatestListings && LatestListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Latest Listings
              </h2>
            </div>
            <div className="flex flex-wrap gap-10">
              {LatestListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="   text-center">
        <Link
          className="text-lg  text-blue-800 hover:underline rounded-lg  p-3 "
          to={"/search?sort=created_at&order=desc"}
        >
          Show more Listings
        </Link>
      </div>
    </div>
  );
}
