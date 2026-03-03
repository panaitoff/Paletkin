import { useState } from 'react'
import './TariffSection.css'

const defaultMarketplaces = [
  { id: 'wb', name: 'Wildberries', active: true },
  { id: 'ozon', name: 'OZON', active: false },
  { id: 'ym', name: 'Я.Маркет', active: false },
  { id: 'lamoda', name: 'Lamoda', active: false },
  { id: 'dm', name: 'Детский мир', active: false },
  { id: 'magnit', name: 'Магнит маркет', active: false },
  { id: 'sber', name: 'СберМегаМаркет', active: false }
]

const defaultWarehouses = [
  'Белые Столбы',
  'Внуково',
  'НевинномыссК',
  'Обухово',
  'Подольск',
  'Рязань',
  'Тула',
  'Электросталь',
  'Казань',
  'Краснодар',
  'Коледино'
]

const defaultTariffs = [
  { quantity: '1 Палет', price: '4200 P' },
  { quantity: '2 Палет', price: '4200 P' },
  { quantity: '3 Палет', price: '4200 P' },
  { quantity: 'От 9 до 10 паллет', price: '4200 P' },
  { quantity: 'От 11 до 15 паллет', price: '4200 P' }
]

export default function TariffsSection({
  title = 'Тарифы доставки на маркетплейсы',
  subtitle = 'Прозрачные тарифы на доставку до маркетплейсов',
  marketplaces = defaultMarketplaces,
  warehouses = defaultWarehouses,
  tariffs = defaultTariffs,
  className = ''
}) {
  const [activeMarketplaceId, setActiveMarketplaceId] = useState(
    marketplaces.find((m) => m.active)?.id ?? marketplaces[0]?.id
  )

  return (
    <section className={`tariff-section ${className}`}>
        <header className="tariff-section-header">
          <div className="tariff-section-header-left">
            <h2 className="tariff-section-title">{title}</h2>
            <p className="tariff-section-subtitle">{subtitle}</p>
          </div>
          <div className="tariff-section-marketplaces">
            {marketplaces.map((mp) => (
              <button
                key={mp.id}
                type="button"
                className={`tariff-section-marketplace-tag ${activeMarketplaceId === mp.id ? 'tariff-section-marketplace-tag--active' : ''}`}
                onClick={() => setActiveMarketplaceId(mp.id)}
              >
                {mp.name}
              </button>
            ))}
          </div>
        </header>

        <div className="tariff-section-data">
          <div className="tariff-section-warehouses">
            <h3 className="tariff-section-block-title">Склады</h3>
            <ul className="tariff-section-warehouses-tags">
              {warehouses.map((wh, i) => (
                <li key={i}>
                  <span className="tariff-section-warehouse-tag">{wh}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="tariff-section-prices-block">
            <div className="tariff-section-prices-header">
              <span className="tariff-section-prices-col-title">Количество паллет</span>
              <span className="tariff-section-prices-col-title">Стоимость</span>
            </div>
            <ul className="tariff-section-prices-list">
              {tariffs.map((row, i) => (
                <li key={i} className="tariff-section-price-row">
                  <span className="tariff-section-price-quantity">{row.quantity}</span>
                  <span className="tariff-section-price-pill">{row.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </section>
  )
}
