export const NOT_FOUND = {
  code: 400,
  error: 'Not Found',
  message: 'Data does not exist',
}

export const UNHANDLE = {
  code: 500,
  error: 'unhandled',
  message: 'กรุณาลองใหม่อีกครั้งในภายหลัง',
}

export const TICKET_FULL = {
  code: 460,
  error: 'ตั๋วหมด',
  message: 'ผู้เข้าร่วมครบจำนวนแล้ว',
}

export const DUPLICATE_TICKET = {
  code: 461,
  error: 'กดซ้ำ',
  message: 'ท่านได้เข้าร่วมกิจกรรมนี้แล้ว',
}

export const HAS_ACCOUNT = {
  code: 470,
  error: 'ซ้ำ',
  message: 'มีข้อมูลอยู่ในระบบแล้ว',
}

export const HAS_CITIZEN_ID = {
  code: 480,
  error: 'เลขบัตรประชาชนซ้ำ',
  message: 'เลขบัตรประชาชนนี้มีในระบบแล้ว',
}

export const REQUIRED = {
  code: 481,
  error: 'กรอกข้อมูลไม่ครบ',
  message: 'กรุณากรอก [...]',
}

export const HAS_ORG_NAME = {
  code: 490,
  error: 'ชื่อซ้ำ',
  message: 'ชื่อออแกไนซ์นี้มีอยู่แล้วในระบบ',
}

export const HAS_ORG_SLUG = {
  code: 491,
  error: 'slugซ้ำ',
  maessage: 'ชื่อ Slug นี้มีอยู่แล้วในระบบ',
}

export const DUPLICATE_MEMBER = {
  code: 492,
  error: 'เพิ่ม member ซ้ำ',
  message: 'สมาชิกนี้อยู่ในออแกไนซ์แล้ว',
}