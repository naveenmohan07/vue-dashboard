export interface Influencer {
  profile_name: string
  profile_gender: string
  profile_followers: {
    value: number
    type: string
    direction: string
  }
  profile_display_picture: string
  profile_verified: number
  profile_created_at: number
  profile_accounts: {
    instagram: number
    youtube: number
    email: number
  }
  profile_username: string
  profile_type: string
  profile_theme: string[]
  profile_keyword: string[]
  profile_country: {
    code: string
    name: string
    continent: string
  }
  profile_engagement_rate: {
    value: number
    type: string
    direction: string
    display_direction_text: boolean
  }
  profile_active_followers: {
    value: number
    type: string
    direction: string
    display_direction_text: boolean
  }
  profile_quality: {
    score: {
      value: number
      direction: string
      display_direction_text: boolean
    }
    score_metrics: {
      growth: number
      interaction: number
      impression: number
      reach: number
      media_value: number
    }
  }
  profile_media_value: {
    value: number
    type: string
    direction: string
    display_direction_text: boolean
  }
}

export interface AudienceDemographics {
  ages: {
    [ageGroup: string]: number
  }
  ethnicities: [
    {
      code: string
      name: string
      weight: number
    },
  ]
  countries: {
    [ageGroup: string]: number
  }
  genders: {
    MALE: number
    FEMALE: number
  }
}

export interface PerformanceTimeline {
  interactions: {
    date: string
    no_of_post: number
    interactions: {
      value: number
      type: string
    }
  }[]
  followers: {
    date: string
    followers: {
      value: number
      type: string
    }
  }[]
}
