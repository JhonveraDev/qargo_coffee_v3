import React from 'react'

import { Title, Text } from "../../../ui/components/index";

import { INVESTMENT_OVERVIEW_ITEMS } from "../data/investmentOverview.data";

export const InvestmentOverview = () => {
  return (
    <section className="investment-overview">
      <Title
        title="Qargo Coffee Investment Overview"
        as="h2"
        size="sm"
        className="investment-overview__title"
      />

      <Text
        text="Our investment structure is designed to support long-term growth, with clear costs, scalable formats, and comprehensive support from day one. "
        size="lg"
        className="investment-overview__description"
      />

      <div className="investment-overview__cards">
        {INVESTMENT_OVERVIEW_ITEMS.map((item, index) => (
          <div className="investment-overview__card" key={index}>
            <h4 className="investment-overview__card-title">
              {item.title}
            </h4>
            <p className="investment-overview__card-value">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
