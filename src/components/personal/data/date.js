export default function a () {
  let date = []
  let d = new Date().getFullYear()
  for (let i = 2007; i <= d; i++) {
    date.push(i)
  }
  console.log(date)
  return date
}
