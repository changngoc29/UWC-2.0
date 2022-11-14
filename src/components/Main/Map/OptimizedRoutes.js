import React, { useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faXmark } from "@fortawesome/free-solid-svg-icons";

const center = { lat: 10.7734137588, lng: 106.659731458 };

const OptimizedRoutes = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type  React.MutableRefObject<HTMLInputElement>*/
  const MCPRef = useRef();
  /** @type  React.MutableRefObject<HTMLInputElement>*/
  const headquarterRef = useRef();

  async function calculateRoute() {
    if (headquarterRef.current.value === "" || MCPRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: headquarterRef.current.value,
      destination: MCPRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    headquarterRef.current.value = "";
    MCPRef.current.value = "";
  }

  return (
    <div className="h-[100vh] mx-auto rounded-md shadow relative z-0 mt-[4rem]">
      <div className="absolute z-10 bg-white shadow p-2 rounded-md top-[1%] left-[1%] right-[1%] bg-opacity-40">
        <div className="flex justify-between px-2 gap-2 flex-wrap mb-2">
          <div className="flex gap-2 flex-1 flex-wrap">
            <Autocomplete className="flex gap-2 flex-1">
              <input
                ref={headquarterRef}
                className="p-2 focus:outline-blue-400 shadow rounded-md w-full"
                placeholder="Headquarter"
              />
            </Autocomplete>
            <Autocomplete className="flex gap-2 flex-1">
              <input
                ref={MCPRef}
                className="p-2 focus:outline-blue-400 shadow rounded-md w-full"
                placeholder="MCPs"
              />
            </Autocomplete>
          </div>
          <div className="flex gap-2 w-[40%]">
            <button
              onClick={calculateRoute}
              className="bg-[#263544] text-white font-bold p-2 rounded-md shadow flex-1 whitespace-nowrap overflow-hidden"
            >
              Optimized Route
            </button>
            <div
              onClick={clearRoute}
              className="flex justify-center items-center w-[50px] h-[50px] text-[1.5rem] p-2 bg-opacity-60 bg-red-200 rounded-[50%] text-red-800 z-10 cursor-pointer"
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <span className="flex items-center font-bold pl-2">
            {`Distance: ${distance}`}
          </span>
          <span className="flex items-center font-bold">
            {`Duration: ${duration}`}
          </span>
          <div
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
            className="flex justify-center items-center w-[50px] h-[50px] text-[1.5rem] p-2 bg-opacity-60 bg-blue-200 rounded-[50%] text-blue-800 z-10 cursor-pointer"
          >
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
        </div>
      </div>
      <GoogleMap
        center={center}
        zoom={16}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          mapTypeControl: false,
          zoomControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default OptimizedRoutes;
