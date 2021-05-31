
import { mergeBase64, mergeFile } from './lib'
//@ts-expect-error
window.mergeBase64 = mergeBase64
//@ts-expect-error
window.mergeFile = mergeFile