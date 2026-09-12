import HeaderHome from "../../header/HeaderHome";
import SideNav from "../../sidenav/sidenav";

function PassengerPrincessLifePage() {
  return (
    <div className="container mx-auto">
      <HeaderHome />
      <SideNav/>
      <div className="mt-15">
        <h1>Passenger Princess Life</h1>

        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/DdF2C4buUyS/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 3,
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: 1,
            maxWidth: 540,
            minWidth: 326,
            padding: 0,
            width: "calc(100% - 2px)",
          }}
        >
            </blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
    </div>
  );
}

export default PassengerPrincessLifePage;
