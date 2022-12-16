class Api::V1::MessagesController < ApplicationController
  def index
    @greetings = Root.all
    @greeting = @greetings.sample

    render json: @greeting
  end
end
