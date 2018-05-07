declare module 'react-native-qqsdk' {
  enum shareScene {QQ, QQZone, Favorite}

  export var isQQClientInstalled: boolean

  export function ssoLogin (): void

  export function logout (): void

  export function shareText (text: string, shareScene: shareScene): void

  export function shareImage (image: string, title: string, description: string, shareScene: shareScene): void

  export function shareNews (url: string, image: string, title: string, description: string, shareScene: shareScene): void

  export function shareAudio (url: string, flashUrl: string, image: string, title: string, description: string, shareScene: shareScene): void;
}
