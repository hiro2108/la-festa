import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useMediaQuery } from 'react-responsive';

const Access = (props) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 767px)' });
    const apiKey = import.meta.env.VITE_API_KEY;
    const position = props.shopOverview[props.selectedShop].CENTER;
    const zoom = props.shopOverview[props.selectedShop].ZOOM;
    const desktopMapPostion = { lat: 35.7142509, lng: 139.7611782 }
    const shopMessages = {
        shinjuku: '新宿本店',
        ikebukuro: '池袋店',
        kinshicho: '錦糸町店',
    }

    const desktopPositions = [
        props.shopOverview['shinjuku'].CENTER,
        props.shopOverview['ikebukuro'].CENTER,
        props.shopOverview['kinshicho'].CENTER,
    ]
    return (
        <div className='map' style={{ height: '400px', width: '100vw' }}>
            <APIProvider apiKey={apiKey}>
                <Map center={isDesktop ? desktopMapPostion : position} zoom={isDesktop ? 13 : zoom} mapId='59ae91785074626e'>
                    {!isDesktop && (
                        <AdvancedMarker position={position} />
                    )}
                    {isDesktop &&
                        desktopPositions.map((markerPosition, index) => {
                            const shopName = Object.keys(shopMessages).find(
                                (shopKey) => JSON.stringify(markerPosition) === JSON.stringify(props.shopOverview[shopKey].CENTER)
                            )
                            return (
                                <AdvancedMarker key={index} position={markerPosition}>
                                    <InfoWindow position={markerPosition} style={{ fontSize: '16px' }}>
                                        <p className='map-shopName'>{shopMessages[shopName]}</p>
                                    </InfoWindow>
                                </AdvancedMarker>
                            )
                        })}
                </Map>
            </APIProvider>
        </div>
    )
}

export default Access