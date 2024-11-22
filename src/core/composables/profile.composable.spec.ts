import { ref } from 'vue'
import { useProfile, useAudienceDemographics } from '../composables/profile.composable'
import { profileService } from '../service/profile.service'
jest.mock('../service/profile.service', () => ({
    profileService: {
      getProfile: jest.fn(),
      getAudienceDemographics: jest.fn(),
    },
  }));
  
  
  describe('useAudienceDemographics', () => {
  
    it('handles errors when fetching audience demographics', async () => {
      const mockError = new Error('Failed to fetch');
      (profileService.getAudienceDemographics as jest.Mock).mockRejectedValue(mockError);
  
      const { fetchAudienceDemographics, audienceDemographics, error, isLoading } = useAudienceDemographics();
  
      await fetchAudienceDemographics();
  
      expect(audienceDemographics.value).toBeUndefined();
      expect(error.value).toBe('Failed to fetch');
      expect(isLoading.value).toBe(false);
    });
  });
  