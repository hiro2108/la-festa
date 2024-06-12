import { useState } from 'react'
// import Map from './Map'
import Access from './Access'

const shopOverview = {
    'shinjuku': {
        name: 'イタリアンレストラン La Festa 新宿本店',
        image: './images/shinjuku-vibe.webp',
        chair: '213',
        inquiry: '000-0000-000',
        access: '東京都新宿区○○○○',
        link: 'https://maps.app.goo.gl/4fPZGNwibgr3khuw7',
        CENTER: {
            lat: 35.6924892,
            lng: 139.6987123,
        },
        ZOOM: 16,
    },
    'ikebukuro': {
        name: 'イタリアンレストラン La Festa 池袋店',
        image: './images/ikebukuro-vibe.webp',
        chair: '195',
        inquiry: '111-1111-1111',
        access: '東京都豊島区○○○○',
        link: 'https://maps.app.goo.gl/773jf7TkNVwcduk99',
        CENTER: {
            lat: 35.7295071,
            lng: 139.7083252,
        },
        ZOOM: 16,
    },
    'kinshicho': {
        name: 'イタリアンレストラン La Festa 錦糸町店',
        image: './images/kinshicho-vibe.webp',
        chair: '201',
        inquiry: '222-2222-2222',
        access: '東京都墨田区○○○○',
        link: 'https://maps.app.goo.gl/d3PiNts1DEH3gDKDA',
        CENTER: {
            lat: 35.6966451,
            lng: 139.8119958,
        },
        ZOOM: 16,
    }
}

const Overview = (props) => {
    const [selectedShop, setSelectedShop] = useState('shinjuku')
    const handleSelectShop = (e) => {
        setSelectedShop(e);
    }

    return (
        <div>
            <div className="overview-buttons sp-only">
                <button onClick={() => handleSelectShop('shinjuku')} className={selectedShop === 'shinjuku' ? 'isActive' : ''}>新宿本店</button>
                <button onClick={() => handleSelectShop('ikebukuro')} className={selectedShop === 'ikebukuro' ? 'isActive' : ''}>池袋店</button>
                <button onClick={() => handleSelectShop('kinshicho')} className={selectedShop === 'kinshicho' ? 'isActive' : ''}>錦糸町店</button>
            </div>
            {props.isDesktop ?
                <div className='overview-vibe'>
                    <div><h3>新宿本店</h3><img src="./images/shinjuku-vibe.webp" alt="" /></div>
                    <div><h3>池袋店</h3><img src="./images/ikebukuro-vibe.webp" alt="" /></div>
                    <div><h3>錦糸町店</h3><img src="./images/kinshicho-vibe.webp" alt="" /></div>
                </div>
                :
                <img src={shopOverview[selectedShop].image}></img>
            }
            <table>
                <tr>
                    <th>店名</th>
                    <td className='sp-only'>{shopOverview[selectedShop].name}</td>
                    <td className="cell-pc-only">{shopOverview.shinjuku.name}</td>
                    <td className="cell-pc-only">{shopOverview.ikebukuro.name}</td>
                    <td className="cell-pc-only">{shopOverview.kinshicho.name}</td>
                </tr>
                <tr>
                    <th>営業時間</th>
                    <td colSpan='3'>
                        ランチ 11:40～14:00<br />
                        ディナー 18:00～23:00
                    </td>
                </tr>
                <tr>
                    <th>定休日</th>
                    <td colSpan='3'>毎週月曜日</td>
                </tr>
                <tr>
                    <th>席数</th>
                    <td className='sp-only'>{shopOverview[selectedShop].chair}席</td>
                    <td className="cell-pc-only">{shopOverview.shinjuku.chair}席</td>
                    <td className="cell-pc-only">{shopOverview.ikebukuro.chair}席</td>
                    <td className="cell-pc-only">{shopOverview.kinshicho.chair}席</td>
                </tr>
                <tr>
                    <th>問い合わせ</th>
                    <td className='sp-only'>
                        <p>電話：<a href={`tel:${shopOverview[selectedShop].inquiry}`}>{shopOverview[selectedShop].inquiry}</a></p>
                        <p className='overview-toFormWrap'><span>お問い合わせフォームは</span><button className="link overview-toForm">こちら</button></p>
                    </td>
                    <td className="cell-pc-only">
                        <p>電話：<a href={`tel:${shopOverview.shinjuku.inquiry}`}>{shopOverview.shinjuku.inquiry}</a></p>
                        <p className='overview-toFormWrap'><span>お問い合わせフォームは</span><button className="link overview-toForm">こちら</button></p>
                    </td>
                    <td className="cell-pc-only">
                        <p>電話：<a href={`tel:${shopOverview.ikebukuro.inquiry}`}>{shopOverview.ikebukuro.inquiry}</a></p>
                        <p className='overview-toFormWrap'><span>お問い合わせフォームは</span><button className="link overview-toForm">こちら</button></p>
                    </td>
                    <td className="cell-pc-only">
                        <p>電話：<a href={`tel:${shopOverview.kinshicho.inquiry}`}>{shopOverview.kinshicho.inquiry}</a></p>
                        <p className='overview-toFormWrap'><span>お問い合わせフォームは</span><button className="link overview-toForm">こちら</button></p>
                    </td>
                </tr>
                <tr>
                    <th>決済</th>
                    <td colSpan='3'>
                        現金<br />
                        クレジットカード（JCB、Master、Visa、American Express）<br />
                        電子マネー（交通系、楽天Edy、iD、QUICPay）、QR決済（PayPay、楽天ペイ、LINE Pay、d払い）
                    </td>
                </tr>
                <tr>
                    <th>アクセス</th>
                    <td className='sp-only'>
                        <p>{shopOverview[selectedShop].access}</p>
                        <a href={shopOverview[selectedShop].link} target="_blank" rel="noreferrer noopener" className='link'><span>マップで開く</span><img src="./images/blank.svg" alt="" /></a>
                        <p><small>※駐車場はありません</small></p>
                    </td>
                    <td className="cell-pc-only">
                        <p>{shopOverview.shinjuku.access}</p>
                        <a href={shopOverview.shinjuku.link} target="_blank" rel="noreferrer noopener" className='link'><span>マップで開く</span><img src="./images/blank.svg" alt="" /></a>
                        <p><small>※駐車場はありません</small></p>
                    </td>
                    <td className="cell-pc-only">
                        <p>{shopOverview.ikebukuro.access}</p>
                        <a href={shopOverview.ikebukuro.link} target="_blank" rel="noreferrer noopener" className='link'><span>マップで開く</span><img src="./images/blank.svg" alt="" /></a>
                        <p><small>※駐車場はありません</small></p>
                    </td>
                    <td className="cell-pc-only">
                        <p>{shopOverview.kinshicho.access}</p>
                        <a href={shopOverview.kinshicho.link} target="_blank" rel="noreferrer noopener" className='link'><span>マップで開く</span><img src="./images/blank.svg" alt="" /></a>
                        <p><small>※駐車場はありません</small></p>
                    </td>
                </tr>
            </table>
            <Access selectedShop={selectedShop} shopOverview={shopOverview} />
        </div >
    )
}

export default Overview
