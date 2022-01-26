import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from './Search';
// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
// } from "use-places-autocomplete";
// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

const MapContainer = () => {
    const [selected, setSelected] = useState(null);
    const [markers, setMarkers] = useState([]);
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(15);
      }, []);
    
    // const libraries = ["places"];

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            },
        ]);
    }, []);

    const mapStyles = {
        height: "400px",
        width: "100%"
    };



    let defaultCenter = {
        lat: 39.27709, lng: -95.11749
    }



    return (
        <>
            
                <div className='map'>
                    <Search panTo= {panTo}/>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={4}
                        center={ markers.length === 0 ? defaultCenter : markers[0]}

                        onClick={onMapClick}
                        onLoad={onMapLoad}
                    >

                        {markers.map((marker) => (
                            <Marker
                                key={`${marker.lat}-${marker.lng}`}
                                position={{ lat: marker.lat, lng: marker.lng }}
                                onClick={() => {
                                    setSelected(marker);
                                }}
                                icon={{
                                    url: `/snowboard.svg`,
                                    origin: new window.google.maps.Point(0, 0),
                                    anchor: new window.google.maps.Point(15, 15),
                                    scaledSize: new window.google.maps.Size(30, 30),
                                }}
                            />
                        ))}
                        {selected ? (
                            <InfoWindow
                                position={{ lat: selected.lat, lng: selected.lng }}
                                onCloseClick={() => {
                                    setSelected(null);
                                }}
                            >
                                <div>
                                    <h2>
                                        <span role="img" aria-label="snowboard">
                                            🏂
                                        </span>{" "}
                                        Let's Go Here!
                                    </h2>

                                </div>
                            </InfoWindow>
                        ) : null}

                    </GoogleMap>
                </div>
            
        </>
    )
}

export default MapContainer;