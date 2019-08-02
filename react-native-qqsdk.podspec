require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name     = "react-native-qqsdk"
  s.version  = package['version']
  s.summary  = package['description']
  s.homepage = "https://github.com/stonecutter/react-native-qqsdk"
  s.license  = package['license']
  s.author   = package['author']
  s.source   = { :git => "https://github.com/stonecutter/react-native-qqsdk", :tag => "v#{s.version}" }

  s.platform = :ios, "8.0"
  s.framework = 'SystemConfiguration','CoreGraphics','CoreTelephony'
  s.libraries = 'iconv','sqlite3','stdc++','z'
  s.preserve_paths = 'README.md', 'LICENSE', 'package.json', 'index.js'
  s.source_files   = "ios/RCTQQSDK/*.{h,m}"
  # If you have use qqsdk in your project, choose the newest one and set this path to the container dir
  s.vendored_frameworks = 'ios/RCTQQSDK/TencentOpenAPI.framework'
  s.resource  = 'ios/RCTQQSDK/TencentOpenApi_IOS_Bundle.bundle'
  s.dependency 'React'
end
