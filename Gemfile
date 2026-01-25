source "https://rubygems.org"

# Core Dependencies
gem 'csv'  # Required for Ruby 3.4+
gem 'sass-embedded', '~> 1.69'  # Modern Sass implementation
gem 'base64'
gem 'bigdecimal'

# Core Jekyll - use latest version compatible with Ruby 4
gem 'jekyll', '~> 4.3'
gem 'kramdown-parser-gfm', '~> 1.1.0'  # Required for GitHub Flavored Markdown

# Jekyll Plugins
group :jekyll_plugins do
  gem 'jekyll-seo-tag', '~> 2.8'
  gem 'jekyll-sitemap', '~> 1.4'
  gem 'jekyll-feed', '~> 0.17'
  gem 'jekyll-redirect-from', '~> 0.16'
  gem 'jekyll-minifier', '~> 0.1'
end

# Development & Testing
group :development, :test do
  gem 'webrick', '~> 1.8'  # Required for Ruby 3+
  gem 'html-proofer', '~> 5.0'  # Test rendered HTML files
  gem 'rake', '~> 13.1'  # Task automation
  gem 'faraday-retry', '~> 2.2'  # Required for Faraday v2.0+ retry middleware
  gem 'rubocop', '~> 1.60'  # Ruby linting
  gem 'rubocop-rake', '~> 0.6'  # RuboCop rules for Rake
end
