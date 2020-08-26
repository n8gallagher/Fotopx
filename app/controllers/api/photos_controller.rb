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
        @photos = Photo.find_by(user_id: params[:user_id])
        render "api/photos/show"
    end

    def create

    end


    def destroy

    end

    def new

    end

    def edit

    end

    def update

    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description)
    end
end
