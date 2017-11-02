class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    @post.update!(city_id: params[:city_id])
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
    render json: @city, include: [:posts]
  end

  def update
    @post = Post.find(params[:id])
    @post.update!(post_params)
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
    render json: @city, include: [:posts]
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
