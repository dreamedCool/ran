let register = (data) => {
  if (data.name === '手机号码') {
    return /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(data.val)
  }
  if (data.name === '验证码') {
    return (!data.val || data.val && data.val.length === 4)
  }
  if (data.name === '密码') {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/.test(data.val)
  }
}
export default register
