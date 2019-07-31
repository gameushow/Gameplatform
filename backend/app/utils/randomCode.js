const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const generateCode = () => {
  let code = ''

  for (let i = 0; i < 5; i++) {
    code += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return code
}

export default generateCode