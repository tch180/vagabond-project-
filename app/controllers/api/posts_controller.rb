class Api::PostsController < ApplicationController

  def create
    @city = City.find(params[:city_id])
    @post = Post.new(post_params)
    @city.posts << @post
    @city.save!
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
    render json: @city, include: [:posts]
  end

  def update
    @post = Post.find(params[:id])
    @post.update!(post_params)
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id]).delete
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
    render json: @city, include: [:posts]
  end

  private

    def post_params
      params.require(:post).permit(:title, :body, :likes)
    end
end
