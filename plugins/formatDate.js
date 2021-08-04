export default (context, inject) => {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en', options)
  }
  inject('formatDate', formatDate)
  context.$formatDate = formatDate
}
