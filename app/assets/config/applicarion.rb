module ChatSpace
  class Application < Rails::Application
    require_relative 'boot'
    require 'rails/all'

Bundler.require(*Rails.groups)

    # config.generators do |g|
    #   g.stylesheets false
    #   g.javascripts false
    #   g.helper false
    #   g.test_framework false
    # end

    config.i18n.default_locale = :ja
  end
end