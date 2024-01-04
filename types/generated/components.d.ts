import type { Schema, Attribute } from '@strapi/strapi';

export interface LocationAddress extends Schema.Component {
  collectionName: 'components_location_addresses';
  info: {
    displayName: 'address';
    icon: 'pinMap';
  };
  attributes: {
    street_address1: Attribute.String;
    street_address2: Attribute.String;
    street_address3: Attribute.String;
    city: Attribute.String;
    state: Attribute.Enumeration<
      [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ]
    >;
    zip: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'location.address': LocationAddress;
    }
  }
}
