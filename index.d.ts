declare module '@stonecutter/react-native-qqsdk' {
  enum shareScene {QQ, QQZone, Favorite}

  export function isQQClientInstalled(): Promise<boolean>

  export function ssoLogin (): Promise<any>

  export function logout (): Promise<any>

  export function shareText (text: string, shareScene: shareScene): Promise<any>

  export function shareImage (image: string, title: string, description: string, shareScene: shareScene): Promise<any>

  export function shareNews (url: string, image: string, title: string, description: string, shareScene: shareScene): Promise<any>

  export function shareAudio (url: string, flashUrl: string, image: string, title: string, description: string, shareScene: shareScene): Promise<any>
}
