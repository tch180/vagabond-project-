class Api::PostsController < ApplicationController

  #creates an new post then sends back city with posts ordered
  def create
    @post = Post.new(post_params)
    @post.update!(city_id: params[:city_id])
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
    render json: @city, include: [:posts]
  end

  #updates a post then sends back city with posts ordered
  def update
    @post = Post.find(params[:id])
    @post.update!(post_params)
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
    render json: @city, include: [:posts]
  end

  #deletes a post then sends back city with posts ordered
  def destroy
    @post = Post.find(params[:id]).delete
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
    render json: @city, include: [:posts]
  end

  private

    def post_params
      params.require(:post).permit(:title, :body, :likes, :rating, :image)
    end
end
