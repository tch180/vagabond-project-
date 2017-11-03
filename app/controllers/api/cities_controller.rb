class Api::CitiesController < ApplicationController
  #index route method to get all cities for homepage
  def index
    @cities = City.all
    render json: @cities
  end

  #route to show single city plus all of its post with order set up by most recent first
  def show
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:id])
    render json: @city, include: [:posts]
  end

  #create a new city
  def create
    @city = City.create!(city_params)
    render json: City.all
  end

  private

  def city_params
    params.require(:city).permit(:name, :image, :country, :region)
  end
end
