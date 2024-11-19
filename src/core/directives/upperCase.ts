/* eslint-disable @typescript-eslint/no-explicit-any */
export const capitalize = {
  beforeMount(el: any) {
    const capitalizeText = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

    el.textContent = capitalizeText(el.textContent)
  },
  updated(el: { textContent: any }, binding: { value: string }) {
    el.textContent = binding.value
      ? binding.value.charAt(0).toUpperCase() + binding.value.slice(1)
      : el.textContent
  },
}
