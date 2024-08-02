// import React, { useEffect } from 'react';

// const MapComponent = ({ id }) => {
//   useEffect(() => {
//     const loadYandexMaps = () => {
//       const script = document.createElement('script');
//       script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af2d0a3fc3a4d61df6fe47a98d6f3e3318349c4346e34c663962f5c5a4d3b5bdf&width=500&height=400&lang=ru_RU&scroll=true";
//       script.async = true;

//       document.body.appendChild(script);
//     };

//     loadYandexMaps();

//     return () => {
//       const scripts = document.querySelectorAll('script[src*="yandex.ru"]');
//       scripts.forEach(script => script.remove());
//     };
//   }, []);

//   return (
//     <div>
//       <div id={id} style={{ width: '500px', height: '400px' }}></div>
//     </div>
//   );
// };

// export default MapComponent;

import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af2d0a3fc3a4d61df6fe47a98d6f3e3318349c4346e34c663962f5c5a4d3b5bdf&width=500&height=400&lang=ru_RU&scroll=true";
    script.async = true;
    script.charset = "utf-8";

    document.getElementById("yandex-map").appendChild(script);

    return () => {
      document.getElementById("yandex-map").removeChild(script);
    };
  }, []);

  return (
    <section>
      <div id="yandex-map" style={{ width: "500px", height: "400px" }}></div>
      <br />
    </section>
  );
};

export default MapComponent;
