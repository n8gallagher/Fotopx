class Api::PhotosController < ApplicationController

    def show
        @photo = Photo.find(params[:id])
        if @photo
            render "api/photos/show"
        else
            render json: ["Photo not found"], status: 404
        end
    end

    def index
        @photos = Photo.all
        render "api/photos/index"
    end

    def create
        photo = Photo.new(photo_params)
        if photo.save
            render json: {message: "You did it"}
        else
            render json: photo.errors.full_messages
        end
    end

    def heart 
        # @photo = Photo.find(params[:id]) ? 

    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :image, :user_id)
    end
end
