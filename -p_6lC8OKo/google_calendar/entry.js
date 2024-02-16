import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    google_calendar: {
      type: "app",
      app: "google_calendar",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `https://www.googleapis.com/calendar/v3/calendars/owen@acon3d.com/events?timeMin=2024-01-10T00:00:00+09:00`,
      headers: {
        Authorization: `Bearer ${this.google_calendar.$auth.oauth_access_token}`,
      },
    })
  },
})
