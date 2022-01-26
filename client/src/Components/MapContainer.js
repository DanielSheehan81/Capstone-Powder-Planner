import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";

const MapContainer = () => {
    const [selected, setSelected] = useState(null);
    const [markers, setMarkers] = useState([]);


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
        height: "300px",
        width: "100%"
    };



    const defaultCenter = {
        lat: 39.27709, lng: -95.11749
    }

    

    return (
        <>
            <LoadScript
                googleMapsApiKey='AIzaSyDy4mA72vXAJS8UNIxKqIIM9XW9J4gBR98'>
                <div className='map'>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={4}
                        center={defaultCenter}
                        onClick={onMapClick}
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
            </LoadScript>
        </>
    )
}

export default MapContainer;