// Feature flags
export const features = {
  SHOW_SHOW_REWARDS_APP_LINK: false,
  USE_COMMENT_ENCRYPTION: true,
  SHOW_ADD_FUNDS: true,
  DATA_SAVER: true,
  PHONE_NUM_METADATA_IN_TRANSFERS: true,
  VERIFICATION_FORNO_RETRY: true,
  CUSD_MOONPAY_ENABLED: false,
  SHOW_CASH_OUT: true,
  PNP_USE_DEK_FOR_AUTH: true,
  KOMENCI: false,
}

export const pausedFeatures = {
  INVITE: true,
}

// Country specific features, unlisted countries are set to `false` by default
// Using 2 letters alpha code. See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
export const countryFeatures = {
  RESTRICTED_CP_DOTO: {
    JP: true,
    PH: true,
  },
  SANCTIONED_COUNTRY: {
    IR: true,
    CU: true,
    KP: true,
    SD: true,
    SY: true,
  },
  MOONPAY_DISABLED: {
    US: true,
  },
  PONTO_SUPPORTED: {
    PH: true,
  },
  KOTANI_SUPPORTED: {
    KE: true,
  },
  FIAT_SPEND_ENABLED: {
    PH: true,
  },
  SIMPLEX_ENABLED: {
    DZ: true,
    AO: true,
    AR: true,
    BD: true,
    BY: true,
    BO: true,
    BA: true,
    BR: true,
    CA: true,
    CN: true,
    CO: true,
    CD: true,
    CG: true,
    CW: true,
    CZ: true,
    EG: true,
    EC: true,
    EE: true,
    ER: true,
    ET: true,
    GI: true,
    GT: true,
    GW: true,
    GY: true,
    HK: true,
    IS: true,
    ID: true,
    IN: true,
    IL: true,
    CI: true,
    JP: true,
    JO: true,
    KZ: true,
    LA: true,
    LR: true,
    LT: true,
    MA: true,
    MK: true,
    MY: true,
    NA: true,
    NP: true,
    NG: true,
    NO: true,
    PW: true,
    PY: true,
    PR: true,
    PH: true,
    RU: true,
    RW: true,
    SA: true,
    RS: true,
    LK: true,
    TH: true,
    TN: true,
    TR: true,
    UA: true,
    GB: true,
    VN: true,
    US: true,
  },
}
