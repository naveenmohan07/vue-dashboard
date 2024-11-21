import { ref } from 'vue'
import { profileService } from '../service/profile.service'
import type { AudienceDemographics } from '../models/influencer.model'

export function useProfile() {
  const influencer = ref()
  const error = ref()
  const isLoading = ref(false)

  const fetchProfile = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await profileService.getProfile()
      console.log(response.data)
      influencer.value = response.data
    } catch (err: unknown) {
      error.value = (err as Error).message ?? 'Something went wrong'
    } finally {
      isLoading.value = false
    }
  }

  return { influencer, error, isLoading, fetchProfile }
}

export function useAudienceDemographics() {
  const audienceDemographics = ref<AudienceDemographics>()
  const error = ref()
  const isLoading = ref(false)

  const fetchAudienceDemographics = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await profileService.getAudienceDemographics()
      console.log(response.data)
      audienceDemographics.value = response.data
    } catch (err: unknown) {
      error.value = (err as Error).message ?? 'Something went wrong'
    } finally {
      isLoading.value = false
    }
  }

  return { audienceDemographics, error, isLoading, fetchAudienceDemographics }
}
