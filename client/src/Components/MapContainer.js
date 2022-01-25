import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


const MapContainer = () => {
    const [selected, setSelected] = useState(null);
    const [markers, setMarkers] = useState([]);

    // const onSelect = (item) => {
    //     setSelected(item);
    // };

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

    const locations = [
        {
            name: "Snowshoe Mountain Resort",
            location: {
                lat: 38.41164,
                lng: -79.99459
            },
            address: "10 Snowshoe Dr, Snowshoe, WV 26209"
        },
        {
            name: "Alleghany Springs",
            location: {
                lat: 38.41068,
                lng: -79.994502
            },
            address: "10 Snowshoe Dr, Dunmore, WV 24934"
        },
        {
            name: "4848",
            location: {
                lat: 38.41175,
                lng: -79.99632
            },
            address: "Snowshoe Mountain, 10 Snowshoe Dr, Snowshoe, WV 26209"
        }

    ];

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
                        {/* {
                            locations.map(item => {
                                return (
                                    <Marker key={item.name} position={item.location} onClick={() => onSelect(item)} />
                                )
                            })
                        }
                        {selected.location && (
                            <InfoWindow
                                position={selected.location}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                            >
                                <div>
                                    <p>{selected.name}</p>
                                    <p>{selected.address}</p>
                                </div>
                            </InfoWindow>
                        )} */}
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