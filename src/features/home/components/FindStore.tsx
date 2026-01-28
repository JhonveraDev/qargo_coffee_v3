import { Button, Text, Title } from "../../../ui/components";

import map from '../../../assets/images/home/home-find-store-map.png'

export const FindStore = () => {
  return (
    <section className="find-store">
      <div className="find-store__wrapper">
        <img
          src={map}
          alt="Store map"
          className="find-store__image"
        />

        <div className="find-store__content">
          <Title
            title="Find a store near you"
            as="h3"
            size="md"
            className="find-store__title"
          />

          <Text
            text="Experience Italian coffee culture, local charm, and unique flavors in a warm, welcoming atmosphere."
            size="md"
            className="find-store__description" />

          <Button
            text="Explore Locations"
            size="md"
            className="find-store__button"
          />
        </div>
      </div>
    </section>
  )
}
