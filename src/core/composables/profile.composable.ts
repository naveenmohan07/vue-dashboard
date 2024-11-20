import { ref } from 'vue'
import { profileService } from '../service/profile.service'

export function useProfile() {
  const user = ref()
  const error = ref()
  const isLoading = ref(false)

  const fetchProfile = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await profileService.getProfile()
      console.log(response.data)
      user.value = response.data
    } catch (err: unknown) {
      error.value = (err as Error).message ?? 'Something went wrong'
    } finally {
      isLoading.value = false
    }
  }

  return { user, error, isLoading, fetchProfile }
}
