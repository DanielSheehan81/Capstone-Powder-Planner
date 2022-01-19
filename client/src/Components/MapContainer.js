import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
    const [selected, setSelected] = useState({});

    const onSelect = (item) => {
        setSelected(item);
    };

    const mapStyles = {
        height: "300px",
        width: "100%"
    };

    const defaultCenter = {
        lat: 38.41164, lng: -79.99459
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
                        zoom={15}
                        center={defaultCenter}
                    >
                        {
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
                        )}

                    </GoogleMap>
                </div>
            </LoadScript>
        </>
    )
}

export default MapContainer;