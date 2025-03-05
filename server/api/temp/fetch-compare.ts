export default defineEventHandler( async(event) => {
  const { page, otherParam } = getQuery(event)
  return { 
    text: 'This is the example endpoint',
    page,
    otherParam,
    method: event.method
  }
})