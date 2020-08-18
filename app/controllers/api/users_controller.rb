class UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        
    end

    def new
        @user = User.new
        render :new
    end

    def update
        @user = User.find(params[:id])
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end


    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
