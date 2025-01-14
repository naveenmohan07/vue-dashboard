import { API_ENDPOINTS } from '../constants/api.constants'
import apiClient from '../utils/axios.util'

export const profileService = {
  getProfile: () => {
    console.log('Fetching profile')
    return apiClient.get(API_ENDPOINTS.PROFILE)
  },

  getAudienceDemographics: () => {
    console.log('Fetching Audience')
    return apiClient.get(API_ENDPOINTS.AUDIENCE_DEMOGRAPHICS)
  },
}
