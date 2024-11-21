<script setup lang="ts">
import ProfileAudienceCard from './shared/CardWrapper.vue'
import AppButton from '@/core/components/AppButton.vue'
import InfluencerInfoCard from './components/InfluencerInfoCard.vue'
import InfluencerAudienceCard from './components/InfluencerAudienceCard.vue'
import InfluencerContentScanner from './components/InfluencerContentScanner.vue'
import InfluencerPerformanceTimeline from './components/InfluencerPerformanceTimeline.vue'
import InfluencerContentCard from './components/InfluencerContentCard.vue'
</script>

<template>
  <div class="profile-wrapper">
    <div class="influencer-card">
      <InfluencerInfoCard />
    </div>

    <div class="influencer-content-container">
      <ProfileAudienceCard cardHeaderText="CONTENT">
        <div class="influencer-content-body">
          <InfluencerContentCard />
        </div>
        <div class="influencer-content-footer flex justify-center pt-6">
          <AppButton />
        </div>
      </ProfileAudienceCard>
    </div>

    <div class="influencer-audience-card-wrapper py-4">
      <ProfileAudienceCard cardHeaderText="AUDIENCE DEMOGRAPHICS">
        <InfluencerAudienceCard />
      </ProfileAudienceCard>
    </div>

    <div class="influencer-content-scanner-card">
      <InfluencerContentScanner />
    </div>

    <div class="influencer-performance-timeline-card">
      <InfluencerPerformanceTimeline />
    </div>
  </div>
</template>
