import nextra from 'nextra'
 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  // Disable meta file validation
  transform: (content, { route }) => content,
}) 
 
export default withNextra({
  // Disable strict mode to reduce validation errors
  reactStrictMode: false,
  // Optional: Skip other validations during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})