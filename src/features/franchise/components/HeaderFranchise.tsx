import React from 'react';

import { Title, Button, Text } from "../../../ui/components/index";

import franchiseHeaderImage from "../../../assets/images/franchise/franchise-header-responsive.png";

export const HeaderFranchise = () => {
  return (
    <header className="header-franchise">
      {/* Background */}
      {/* <div className="header-franchise__background" aria-hidden="true" /> */}

      {/* Content */}
      <div className="header-franchise__content">
        <Title
          title="Create Something Bigger with Qargo Coffee"
          as="h1"
          size="lg"
          className="header-franchise__title"
        />

        <img src={franchiseHeaderImage} alt="" className='header-franchise__mobile-image' />

        <Text
          text="Join the country’s fastest-growing coffee franchise and build a thriving business with Italy’s premium coffee, fine pastries, a unique proven system, and unmatched support."
          size="lg"
          className="header-franchise__text"
        />

        <div className="header-franchise__actions">
          <Button text="Start the Conversation" size="md" className="header-franchise__button header-franchise__button--primary" />
          <Button text="Download Our Franchise Info" size="md" className="header-franchise__button header-franchise__button--secondary" />
        </div>
      </div>
    </header>
  )
}
