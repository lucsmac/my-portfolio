import data from '~/static/api/sites-data.json'

export const state = () => ({
  sites: data
})

export const getters = {
  projects: state => state.sites,
  oneSite: state => slug => state.sites.find(el => el.slug === slug)
}
