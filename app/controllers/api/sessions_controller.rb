class SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
    def new

    end

    def create

    end

    def destroy

    end
end