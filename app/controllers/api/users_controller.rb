class UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            redirect_to api_user_url
        else
            render[:errors] = ['something went wrong']
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def new
        @user = User.new
        render :new
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
