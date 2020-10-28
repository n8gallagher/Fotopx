class Api::LikesController < ApplicationController

  before_action :require_logged_in

  def create
    params[:like][:user_id] = current_user.id
    @like = Like.new(like_params)
    if @like.save
      flash[:success] = 'Liked this photo'
    else
      flash[:errors] = @like.errors.full_messages
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    @like.destroy
  end


  private

  def like_params
    params.require(:like).permit(:photo_id, :user_id, :value)
  end
end
