import { axios } from "@pipedream/platform"

export default defineComponent({
  props: {
    cloudflare_api_key: {
      type: "app",
      app: "cloudflare_api_key",
    },
  },

  async run({steps, $}) {
    return await axios($, {
      method: 'POST',
      url: `https://api.cloudflare.com/client/v4/zones/169095a6a9ba26d1580d3973cb9e534a/purge_cache`,
      headers: {
        "Authorization": `Bearer ${this.cloudflare_api_key.$auth.API_Key}`,
      },
      data: {
        'purge_everything': true
      },
    });
  },
})
