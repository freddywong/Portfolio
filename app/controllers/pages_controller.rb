class PagesController < ApplicationController
  def home
    @home_page = true
  end

  def about
  end

  def projects
    @projects_page = true
  end

  def blog
  end

  def contact
  end
end
